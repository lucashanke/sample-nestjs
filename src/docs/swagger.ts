import transactionsPaths from './transactions.paths';
import { OpenAPIV3 } from 'openapi-types';

export const swaggerDocument: OpenAPIV3.Document = {
  openapi: '3.0.1',
  info: {
    description: 'Swagger doc for billing service',
    version: '1.0.0',
    title: 'Billing API',
  },
  paths: {
    ...transactionsPaths,
  },
};
