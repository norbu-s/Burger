const orm = require('../config/orm.js');

const burger = {
    all(cb) {
        orm.all('burger', (res) => cb(res));
    },

    create(vals, cb) {
        orm.create('burger', 'burger_name', vals, (res) => cb(res));
    },
    update(value, id, cb) {
        orm.update('burger', 'devoured', value, id, (res) => cb(res));
    },
    delete(id, cb) {
        orm.deleteOne('burger', id, (res) => cb(res));
    },
};

module.exports = burger;