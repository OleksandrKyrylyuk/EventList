"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEvent = exports.generateUser = void 0;
var faker_1 = __importDefault(require("faker"));
var Client_1 = require("./Client");
var Event_1 = require("./Event");
var generateUser = function () {
    var name = faker_1.default.name.firstName();
    var tel = faker_1.default.phone.phoneNumberFormat();
    return new Client_1.Client(name, tel);
};
exports.generateUser = generateUser;
var generateEvent = function () {
    var name = faker_1.default.company.companyName();
    var numOfPeople = faker_1.default.datatype.number(100);
    var place = faker_1.default.address.streetAddress();
    var date = faker_1.default.date.future().toLocaleDateString();
    return new Event_1.Event(name, numOfPeople, place, date);
};
exports.generateEvent = generateEvent;
