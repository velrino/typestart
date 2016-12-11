"use strict";
var dao_1 = require("./dao");
var Animal_1 = require("./../OO/Animal");
var dao = new dao_1.Dao();
var animal = new Animal_1.Animal('Aslan');
var cavalo = new Animal_1.Animal('Shazam');
dao.insert(animal);
//# sourceMappingURL=run.js.map