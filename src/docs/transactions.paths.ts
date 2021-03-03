export default {
  transactions: {
    post: {
      tags: ['transactions'],
      summary: 'Criação de transaçãp',
      operationId: '/transactions',
      produces: ['application/json'],
      parameters: [
        {
          in: 'body',
          name: 'body',
          description: 'Objeto mínimo para criação de um novo usuário',
          required: true,
          schema: {
            type: 'object',
            required: ['amount', 'userId', 'paymentMethod'],
            properties: {
              amount: { type: 'float' },
              userId: { type: 'string' },
              paymentMethod: { type: 'string' },
            },
          },
        },
      ],
      responses: {
        '200': {
          description: 'Sucesso',
          schema: {
            type: 'object',
            properties: {
              id: { type: 'integer' },
              amount: { type: 'float' },
              email: { type: 'string' },
              userId: { type: 'string' },
              paymentMethod: { type: 'string' },
            },
          },
        },
      },
    },
  },
};
