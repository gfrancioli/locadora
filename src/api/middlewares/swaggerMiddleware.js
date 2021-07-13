const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = YAML.load('./swagger.yaml');

module.exports = {
  serve: swaggerUi.serve,
  setup: swaggerUi.setup(swaggerDocument)
};
