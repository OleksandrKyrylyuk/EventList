import { Client } from './Client';
import { Event } from './Event';
import { EventService } from './EventService';
import { generateUser, generateEvent } from './util'

const eventService = new EventService();
const testUser = new Client('Olya', "798 46 13");
const testEvent = new Event('test', 23, "test", "24.04.2022");

eventService.addEvent(testUser, testEvent);

for (let i = 0; i < 3; i++)
	eventService.addEvent(generateUser(), generateEvent());

eventService.getEventsByClient('Olya')
	



