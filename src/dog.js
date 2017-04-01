class Dog {
	constructor(name){
		this.name = name
	}

	bark(){
		return `My name is ${this.name}`
	}
}

module.exports = Dog
