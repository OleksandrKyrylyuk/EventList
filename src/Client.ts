export class Client {

	static newClient(name: string, telephone: string) : Client {
		return new Client(name, telephone);
	}

	constructor(private _name: string, private telephone: string){}

	get name():string {
		return this._name
	}
	
	print():void {
		console.log(`Name: ${this._name} \nCell number: ${this.telephone}`);
	}

	changeInfo(name: string, telephone: string) {
		this._name = name;
		this.telephone = telephone;
	}
}