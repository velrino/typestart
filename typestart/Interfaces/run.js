"use strict";
var animal_dao_1 = require("./animal.dao");
var Animal_1 = require("./../OO/Animal");
var dao = new animal_dao_1.AnimalDao();
var animal = new Animal_1.Animal('Shazam');
dao.insert(animal);
//# sourceMappingURL=run.js.map