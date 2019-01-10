const express = require('express');
const todoRouter = express.Router();
const ObjectID = require('mongodb').ObjectID;

const todoScheme = require('../model/todo');

// get all todo

todoRouter.route('/').get((req, res) => {
  todoScheme.find((err, todolist) => {
    if(err) return console.log(err);
    res.json(todolist);
  })
})

// add todo

todoRouter.route('/add').post((req, res) => {
  let todoText = req.body.text;
  let todoImportance = req.body.importance;
  let todoActive = req.body.active;

  const todo = new todoScheme(
    {
      text: todoText, 
      importance: todoImportance, 
      active: todoActive
    });    

  todo.save(err => {
      if(err) return console.log(err);
  });
  res.json(todo._id)
});

//delete todo

todoRouter.route('/delete/:id').get((req, res) => {
  console.log(req.params.id)
  const id = ObjectID(req.params.id);
  todoScheme.findByIdAndDelete(id, function(err, doc){
    if(err) return console.log(err);
    console.log("Удален пользователь ", doc);
});
})

// edit todo

todoRouter.route('/edit/:id').post((req, res) => {
  console.log(req.body)
  const id = ObjectID(req.params.id);
  todoScheme.updateOne({_id: id}, 
    {
      text: req.body.text, 
      importance: req.body.importance,
      active: req.body.active,
    }, function(err, result){
    if(err) return console.log(err);
    console.log(result);
});
})

// edit completed todo 
todoRouter.route('/edit/completed/:id').post((req, res) => {
  console.log(req.body)
  const id = ObjectID(req.params.id);
  todoScheme.updateOne({_id: id}, 
    {
      active: req.body.active,
    }, function(err, result) {
      if(err) return console.log(err)
      console.log(result)
    }
    )
})

module.exports = todoRouter;