import { middleware } from 'express-openapi-validator';
import { swaggerDocument } from 'src/docs/swagger';

export const openapiValidatorMiddleware = middleware({
  //@ts-ignore
  apiSpec: swaggerDocument,
  validateRequests: true,
  validateResponses: {
    removeAdditional: 'all',
  },
  validateFormats: 'full',
});
