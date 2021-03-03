import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import Transaction from '../domain/transaction.domain';

@Entity({ name: 'transactions' })
export class TransactionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  paymentMethod: string;

  @Column()
  userId: number;

  @Column()
  timestamp: string;

  static fromTransaction(transaction: Transaction): TransactionEntity {
    const entity = new TransactionEntity();
    entity.amount = transaction.amount;
    entity.paymentMethod = transaction.paymentMethod;
    entity.timestamp = transaction.timestamp;
    entity.userId = transaction.userId;
    return entity;
  }

  toTransaction(): Transaction {
    return new Transaction(
      this.amount,
      this.paymentMethod,
      this.userId,
      this.timestamp,
    );
  }
}
