const mongoose = require('mongoose');

const { DATABASE_URI } = process.env

mongoose.connect(DATABASE_URI);

mongoose.connection.on('open', () => console.log('you are connected to mongodb')).on('close', () => console.log('you are disconnected from mongodb')).on('error', () => console.log(error))