var orm = require("../config/orm");

var newBurger = {
    selectAll: function (cb) {
        orm.selectAll('burgers', function (res) {
            cb(res); 
        })
    }
}

module.exports = newBurger; 