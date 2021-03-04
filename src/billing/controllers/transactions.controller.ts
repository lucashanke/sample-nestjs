import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransactionsService } from '../services/transactions.service';
import { CreateTransactionDto, TransactionDto } from './dtos/transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  async create(
    @Body() createTransactionDto: CreateTransactionDto,
  ): Promise<TransactionDto> {
    return TransactionDto.fromTransaction(
      await this.transactionsService.create(createTransactionDto),
    );
  }

  @Get()
  async findAll(): Promise<TransactionDto[]> {
    const allTransactions = await this.transactionsService.findAll();
    return allTransactions.map((transaction) =>
      TransactionDto.fromTransaction(transaction),
    );
  }
}
