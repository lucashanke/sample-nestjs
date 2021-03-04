import { middleware } from 'express-openapi-validator';
import { swaggerDocument } from 'src/docs/swagger';

export const openapiValidatorMiddleware = middleware({
  //@ts-ignore
  apiSpec: swaggerDocument,
  ignorePaths: (path) => path.startsWith('/metrics'),
  validateRequests: true,
  validateResponses: {
    removeAdditional: 'all',
  },
  validateFormats: 'full',
});
