const express = require('express');
const routes = require('./routes/routes');
const { connectToDatabase } = require('./config/db');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

// Conecte ao banco de dados antes de iniciar o servidor
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log('Failed to connect to the database:', error);
  });
