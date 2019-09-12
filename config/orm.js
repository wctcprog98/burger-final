var connection = require("./connection.js");


var orm = {
  all: function (tableInput, cb) {
    connection.query('SELECT * FROM ' +tableInput+ ';', function (err, result) {
      if (err) throw err;
      cb(result)
    })
  },
  
  update: function(input, cond, cb) {
    connection.query('UPDATE '+input+' SET devoured=true WHERE id=' +cond+ ';', function (err, res) {
      if (err) throw err;
      cb(res);
    })
  },
  
  create: function(input,val,cb){
    connection.query('INSERT INTO ' + input+" (burger_name) VALUES ('"+val+"');",function(err, result){
      if(err) throw err;
      cb(result)
    })
  }
}


module.exports = orm;