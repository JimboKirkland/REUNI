// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../db");


var studentIdEntry = $('#studentIdEntry').val().trim();
var parentIdEntry = $('#parentIdEntry').val().trim();
// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("PATHHERE", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.reunify_db.findOne({
      where: {
        studentID: req.body.studentIdEntry
      }
    }).then(function(dbTodo) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbReunify);
    });
  });


  app.get("PATHHERE", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.reunify_db.findOne({
      where: {
        parentID: req.body.par_govt_id,
        par_name: req.body.par_name
      }
    }).then(function(dbTodo) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbReunify);
    });
  });



//INNER JOIN FOR NEW TABLE OF PARENT STUDENT FOR PRESENT ON SITE?
INSERT INTO new Table (field1, field2)
SELECT a.studentID, a.par_govt_id, 
FROM reunify_db a 
inner join 
parentPresent body
on a.item = b.item



  // POST route for saving a new todo
  app.post("/PATHHERE", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.parentPresent.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbTodo) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbTodo);
    });
  });


  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/PATHHERE", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.studentIdEntry.update({
      reunify_pt: req.body.reunify_pt,
      student_status: req.body.student_status
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });

};



/*
  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });
*/


