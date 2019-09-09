var connection = require("./connection.js");

var orm = {
    selectAll: function (input, cb) {
        connection.query("SELECT * FROM" + input + ";", function (err, result) {
            if (err) throw err;
            cb(result); 
        })
    }
}

module.exports = orm; 

