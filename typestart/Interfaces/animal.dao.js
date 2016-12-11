"use strict";
var Animal_1 = require("./../OO/Animal");
var AnimalDao = (function () {
    function AnimalDao() {
        this.tableName = '';
    }
    AnimalDao.prototype.insert = function (object) {
        console.log('inserting');
        object.mover(90);
        return true;
    };
    AnimalDao.prototype.update = function (object) {
        return true;
    };
    AnimalDao.prototype.delete = function (id) {
        return null;
    };
    AnimalDao.prototype.find = function (id) {
        return null;
    };
    AnimalDao.prototype.findAll = function () {
        return [new Animal_1.Animal('Shazam')];
    };
    return AnimalDao;
}());
exports.AnimalDao = AnimalDao;
//# sourceMappingURL=animal.dao.js.map