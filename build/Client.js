"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(_name, telephone) {
        this._name = _name;
        this.telephone = telephone;
    }
    Client.newClient = function (name, telephone) {
        return new Client(name, telephone);
    };
    Object.defineProperty(Client.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Client.prototype.print = function () {
        console.log("Name: " + this._name + " \nCell number: " + this.telephone);
    };
    Client.prototype.changeInfo = function (name, telephone) {
        this._name = name;
        this.telephone = telephone;
    };
    return Client;
}());
exports.Client = Client;
