import { OpenAPIV3 } from 'openapi-types';

const transactionsPath: OpenAPIV3.PathsObject = {
  '/transactions': {
    post: {
      tags: ['/transactions'],
      summary: 'Criação de transação',
      operationId: 'create',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['amount', 'userId', 'paymentMethod'],
              properties: {
                amount: { type: 'number' },
                userId: { type: 'number' },
                paymentMethod: { type: 'string' },
              },
            },
          },
        },
      },
      responses: {
        '201': {
          description: 'Sucesso',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  id: { type: 'integer' },
                  amount: { type: 'number' },
                  userId: { type: 'number' },
                  paymentMethod: { type: 'string' },
                  timestamp: { type: 'string' },
                },
              },
            },
          },
        },
      },
    },
    get: {
      tags: ['/transactions'],
      summary: 'Lista de transação',
      operationId: '/transactions',
      responses: {
        '200': {
          description: 'Sucesso',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  type: 'object',
                  required: ['id', 'amount', 'userId', 'paymentMethod'],
                  properties: {
                    id: { type: 'integer' },
                    amount: { type: 'number' },
                    userId: { type: 'number' },
                    paymentMethod: { type: 'string' },
                    timestamp: { type: 'string' },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export default transactionsPath;
