const mongoose = require('mongoose');

const password = encodeURIComponent('aunu');
const connectionString =
  'mongodb+srv://arihant:Qd1G1LCN4dIQ4scM@task-manager.8bd9mit.mongodb.net/?retryWrites=true&w=majority&appName=task-manager';

const connectDB = (url) => {
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
