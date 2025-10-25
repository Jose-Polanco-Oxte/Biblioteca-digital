import express from 'express';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { errorHandler } from './utils/async.wrapper';

const app = express();
app.use(express.json())
app.use(errorHandler)

// Read YAML
const swaggerDocument = yaml.load(
  fs.readFileSync(path.join(__dirname, '../docs/openapi.1.0.yml'), 'utf8')
) as object;

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app