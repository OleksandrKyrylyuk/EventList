import { Event } from './Event';
import { Client } from './Client'

interface IEventList {
	client: Client,
	event: Event
}

export class EventService {

	public eventList: IEventList[] = [];

	addEvent(client: Client, event: Event):void{
		const newEvent: IEventList = {
			client, 
			event
		}
		this.eventList.push(newEvent);
	};

	 deleteEvent(id: number):void{
	 	this.eventList = [...this.eventList.slice(0, id), ...this.eventList.slice(id + 1)]
	}

	clearEventList():void{
		this.eventList = [];
	}

	getEventsByDate(str: string):void {
		this.eventList.forEach( (el: IEventList):void => {
			if (el.event.date === str) console.log(el);
		} )
	}

	getEventsByClient(str: string):void {
		this.eventList.forEach( (el: IEventList):void => {
			if (el.client.name === str) console.log(el);
		} )
	}

}