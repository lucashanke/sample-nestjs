import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import controllers from './controllers';
import { TransactionEntity } from './persistance/transaction.entity';
import { TransactionsRepository } from './persistance/transaction.repository';
import { TransactionsService } from './services/transactions.service';

export const moduleDefinition = {
  controllers,
  providers: [TransactionsRepository, TransactionsService],
  imports: [TypeOrmModule.forFeature([TransactionEntity])],
};

@Module(moduleDefinition)
export class BillingModule {}
