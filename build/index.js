"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client_1 = require("./Client");
var Event_1 = require("./Event");
var EventService_1 = require("./EventService");
var util_1 = require("./util");
var eventService = new EventService_1.EventService();
var testUser = new Client_1.Client('Olya', "798 46 13");
var testEvent = new Event_1.Event('test', 23, "test", "24.04.2022");
eventService.addEvent(testUser, testEvent);
for (var i = 0; i < 3; i++)
    eventService.addEvent((0, util_1.generateUser)(), (0, util_1.generateEvent)());
eventService.getEventsByClient('Olya');
