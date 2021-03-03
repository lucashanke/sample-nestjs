import transactionsPaths from './transactions.paths';

export const swaggerDocument = {
  swagger: '2.0',
  info: {
    description: 'Swagger doc for billing service',
    version: '1.0.0',
    title: 'Billing API',
  },
  paths: {
    ...transactionsPaths,
  },
};
