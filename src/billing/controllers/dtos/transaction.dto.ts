import Transaction from 'src/billing/domain/transaction.domain';

export class CreateTransactionDto {
  amount: number;
  paymentMethod: string;
  userId: number;
}

export class TransactionDto {
  id: number;
  amount: number;
  paymentMethod: string;
  userId: number;
  timestamp: string;

  static fromTransaction(transaction: Transaction) {
    return {
      id: transaction.id,
      amount: transaction.amount,
      paymentMethod: transaction.paymentMethod,
      userId: transaction.userId,
      timestamp: transaction.timestamp,
    };
  }
}
