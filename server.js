const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');

const routes = require('./src/api/routes');
const database = require('./src/infra/database/index');

app.use(morgan('combined'));
app.use(compression());
app.use(bodyParser.json());


database.init();
app.use(routes());

app.listen(port, function() {
  console.log('Server started on port: ' + port);
});
