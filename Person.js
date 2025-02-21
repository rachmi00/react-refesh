class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName(){
        return this.firstName + ' ' + this.lastName;
    }
}

const robin = new Person('Robin', 'Wieruch')

console.log(robin.getName());