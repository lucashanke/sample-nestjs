import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from '../controllers/dtos/transaction.dto';
import Transaction from '../domain/transaction.domain';
import { TransactionsRepository } from '../persistance/transaction.repository';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  async create(
    createTransactionDto: CreateTransactionDto,
  ): Promise<Transaction> {
    const { amount, paymentMethod, userId } = createTransactionDto;
    const transaction = Transaction.create(amount, paymentMethod, userId);

    return this.transactionsRepository.save(transaction);
  }

  async findAll(): Promise<Transaction[]> {
    return this.transactionsRepository.find();
  }
}
