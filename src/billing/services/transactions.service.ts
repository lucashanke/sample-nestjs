import { CounterMetric, PromService } from '@digikare/nestjs-prom';
import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from '../controllers/dtos/transaction.dto';
import Transaction from '../domain/transaction.domain';
import { TransactionsRepository } from '../persistance/transaction.repository';

@Injectable()
export class TransactionsService {
  private readonly invalidCount: CounterMetric;

  constructor(
    private readonly transactionsRepository: TransactionsRepository,
    private readonly promService: PromService,
  ) {
    this.invalidCount = this.promService.getCounter({
      name: 'invalid_transaction_count',
    });
  }

  async create(
    createTransactionDto: CreateTransactionDto,
  ): Promise<Transaction> {
    const { amount, paymentMethod, userId } = createTransactionDto;
    try {
      const transaction = Transaction.create(amount, paymentMethod, userId);
      return this.transactionsRepository.save(transaction);
    } catch (error) {
      this.invalidCount.inc();
      throw error;
    }
  }

  async findAll(): Promise<Transaction[]> {
    return this.transactionsRepository.find();
  }
}
