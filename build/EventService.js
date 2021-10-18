"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventService = void 0;
var EventService = /** @class */ (function () {
    function EventService() {
        this.eventList = [];
    }
    EventService.prototype.addEvent = function (client, event) {
        var newEvent = {
            client: client,
            event: event
        };
        this.eventList.push(newEvent);
    };
    ;
    EventService.prototype.deleteEvent = function (id) {
        this.eventList = __spreadArray(__spreadArray([], this.eventList.slice(0, id), true), this.eventList.slice(id + 1), true);
    };
    EventService.prototype.clearEventList = function () {
        this.eventList = [];
    };
    EventService.prototype.getEventsByDate = function (str) {
        this.eventList.forEach(function (el) {
            if (el.event.date === str)
                console.log(el);
        });
    };
    EventService.prototype.getEventsByClient = function (str) {
        this.eventList.forEach(function (el) {
            if (el.client.name === str)
                console.log(el);
        });
    };
    return EventService;
}());
exports.EventService = EventService;
