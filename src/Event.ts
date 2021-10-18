

export class Event {
	static id = 1;

	static newEvent(name: string, numOfPeople: number, place: string, _date: string): Event {
		return new Event (name, numOfPeople, place, _date)
	}

	constructor (
		private name: string,
		private numOfPeople: number,
		private place: string,
		private _date: string,
	){
		Event.id++;
	}

	set date(date: string){
		this._date = date
	}

	get date(){
		return this._date
	}

	print():void{
		console.log(`Name: ${this.name} \nPeople number: ${this.numOfPeople} \nPlace: ${this.place} \nDate: ${this._date}`);
		
	}
}