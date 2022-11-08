const users = document.getElementById('users');

function download(){
	fetch('https://randomuser.me/api')
	.then((response) => {
		return response.json();
	})
	.then((response) => {
		const user = response.results[0];
		const people = new People(
			user.picture,
			user.location.city,
			user.name,
			user.cell,
			user.phone
		);
		people.createUser();
	});
}

class People{
	constructor(picture, city, name, cell, phone){
		this.picture = picture;
		this.city = city;
		this.name = name;
		this.cell = cell;
		this.phone = phone;
	}
	getName(){
		return `${this.name.first} ${this.name.last}`;
	}
	createUser(){
		const user = document.createElement('div');
		user.id = 'user';
		const inf = document.createElement('span');
		inf.innerHTML = `<img src="${this.picture.medium}" alt="image" width="150px" height="150px">
		<div>
			<p>City: ${this.city}</p>
			<p>Name: ${this.getName()}</p>
			<p>Cell: ${this.cell}</p>
			<p>Phone: ${this.phone}</p>
		</div>`;
		
		user.appendChild(inf);
		users.appendChild(user);
		Console.log(this.picture, this.city, this.getName(), this.cell, this.phone);		
	}
}