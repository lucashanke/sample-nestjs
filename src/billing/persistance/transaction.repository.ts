import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Transaction from '../domain/transaction.domain';
import { TransactionEntity } from './transaction.entity';

@Injectable()
export class TransactionsRepository {
  constructor(
    @InjectRepository(TransactionEntity)
    private readonly transactionsRepository: Repository<TransactionEntity>,
  ) {}

  async save(transaction: Transaction): Promise<Transaction> {
    return this.transactionsRepository.save(
      TransactionEntity.fromTransaction(transaction),
    );
  }

  async find(): Promise<Transaction[]> {
    const transactionEntities = await this.transactionsRepository.find();
    return transactionEntities.map((entity) => entity.toTransaction());
  }
}
