const Express = require("express");
const BodyParser = require("body-parser");
const Mongoose = require('mongoose');

const Config = require('./config');
const todoRouter = require('./routes/todoRouter');

const app = Express();

app.use(BodyParser.urlencoded({extended: true}));
app.use(BodyParser.json());

app.use('/todolist/', todoRouter);

Mongoose.connect(Config.mongoURI, { useNewUrlParser: true, dbName: 'todolist' }, err => {
    if(err) return console.log(err);
    app.listen(3000, function(){
        console.log("We are fly, man...");
    });
});


