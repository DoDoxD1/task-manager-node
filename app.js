const connectDB = require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks.js');

app.use(express.json());

//routes

app.get('/hello', (req, res) => {
  res.send('Helllo');
});

app.use('/api/v1/tasks', tasks);

const port = 3000;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, console.log(`Server is listening at ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();