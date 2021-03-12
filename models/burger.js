const orm = require('../config/orm.js');

const burger = {
  all(cb) {
    orm.all('burger', (res) => cb(res));
  },

  create(cols, vals, cb) {
    orm.create('burger', 'burger_name', vals, (res) => cb(res));
  },
  update(objColVals, condition, cb) {
    orm.update('burger', 'devoured', condition, (res) => cb(res));
  },
  delete(condition, cb) {
    orm.delete('burger','id', condition, (res) => cb(res));
  },
};

module.exports = burger;