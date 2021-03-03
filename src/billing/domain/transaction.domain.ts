export default class Transaction {
  id?: number;
  amount: number;
  paymentMethod: string;
  userId: number;
  timestamp: string;

  constructor(
    amount: number,
    paymentMethod: string,
    userId: number,
    timestamp: string,
    id?: number,
  ) {
    if (paymentMethod === 'CC' && amount > 100) {
      throw new Error('amount not allowed for this type of payment method');
    }
    this.amount = amount;
    this.paymentMethod = paymentMethod;
    this.userId = userId;
    this.timestamp = timestamp;
    this.id = id;
  }

  static create(
    amount: number,
    paymentMethod: string,
    userId: number,
  ): Transaction {
    return new Transaction(
      amount,
      paymentMethod,
      userId,
      new Date().toString(),
    );
  }
}
