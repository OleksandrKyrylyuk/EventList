"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
var Event = /** @class */ (function () {
    function Event(name, numOfPeople, place, _date) {
        this.name = name;
        this.numOfPeople = numOfPeople;
        this.place = place;
        this._date = _date;
        Event.id++;
    }
    Event.newEvent = function (name, numOfPeople, place, _date) {
        return new Event(name, numOfPeople, place, _date);
    };
    Object.defineProperty(Event.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (date) {
            this._date = date;
        },
        enumerable: false,
        configurable: true
    });
    Event.prototype.print = function () {
        console.log("Name: " + this.name + " \nPeople number: " + this.numOfPeople + " \nPlace: " + this.place + " \nDate: " + this._date);
    };
    Event.id = 1;
    return Event;
}());
exports.Event = Event;
