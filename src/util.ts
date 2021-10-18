import faker from 'faker';


import { Client } from './Client';
import { Event } from './Event';

export const generateUser = (): Client => {
	const name = faker.name.firstName();
	const tel = faker.phone.phoneNumberFormat();
	
	return new Client(name, tel);
}

export const generateEvent = () : Event => {
	const name = faker.company.companyName();
	const numOfPeople = faker.datatype.number(100);
	const place = faker.address.streetAddress();
	const date = faker.date.future().toLocaleDateString();
	return new Event(name, numOfPeople, place, date);
}
