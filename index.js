const express = require('express');
const { updateBalance } = require('./controllers/userController');
const { sequelize } = require('./models');
const { Umzug, SequelizeStorage } = require('umzug');
const { validateUpdateBalance } = require('./middlewares/validation');
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();
const port = 3000;

app.use(express.json());

app.post('/update-balance', validateUpdateBalance, updateBalance);

const umzug = new Umzug({
  migrations: { glob: 'migrations/*.js' },
  storage: new SequelizeStorage({ sequelize }),
  context: sequelize.getQueryInterface(),
  logger: console,
});

(async () => {
  await umzug.up();
  console.log('Migrations executed');

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
})();
