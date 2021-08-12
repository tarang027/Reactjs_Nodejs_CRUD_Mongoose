const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const UserRoute = require('./UserRoute');



mongoose.Promise = global.Promise;
mongoose.connect( 'mongodb://localhost:27017/orm_demo' , { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(UserRoute);

const port = process.env.PORT || 5000;

app.listen(port,() => {
    console.log(`Listening on port ${port}..`)
});