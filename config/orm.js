var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  all: function (input, cb) {
    connection.query('SELECT * FROM ' +input+ ';', function (err, res) {
      if (err) throw err;
      cb(res)
    })
  },
  
  update: function(input, cond, cb) {
    connection.query('UPDATE '+input+' SET devoured=true WHERE id=' +cond+ ';', function (err, res) {
      if (err) throw err;
      cb(res);
    })
  },
  
  create: function(input,value,cb){
    connection.query('INSERT INTO ' + input+" (burger_name) VALUES ("+val+");",function(err, result){
      if(err) throw err;
      cb(result)
    })
  }
}


module.exports = orm;