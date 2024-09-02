
class Account {
    constructor(login, email) {
        this.login = login
        this.email = email
    }
    getInfo() {
        console.log(`email: ${this.email},loin: ${this.login}`);
    }
}
const mangoAccount = new Account('Mangozedog', 'mango@dog.woof');
mangoAccount.getInfo();
const polyAccount = new Account('Poly', 'poly@mail.com')
polyAccount.getInfo()


class User {
    constructor(name, age, followers) {
        this.name = name
        this.age = age
        this.followers = followers
    }
    getInfo() {
        console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`)
    }
}
const mangoUser = new User('Mango', 2, 20);
mangoUser.getInfo(); // User Mango is 2 years old and has 20 followers
const polyUser = new User('Poly', 3, 17);
polyUser.getInfo(); // User Poly is 3 years old and has 17 followers


class Storage {
    constructor(arr) {
        this.items = arr
    }
    getItems() {
        console.log(this.items)
    }
    addItem(item) {
        this.items.push(item)
    }
    removeItem(item) {
        if (this.items.includes(item)) {
            const remove = this.items.indexOf(item);
            this.items.splice(remove, 1);
        }
    }
}
const storage = new Storage(['Нанітоіди', 'Пролонгер', 'Залізні жупи', 'Антигравітатор',])

const items = storage.getItems(); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.log(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.log(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]


class StringBuilder {
    constructor(value) {
        this.value = value
    }
    append(str) {
        this.value += str
    }
    prepend(str) {
        this.value = str + this.value
    }
    pad(str) {
        this.value = str + this.value + str
    }
}

const builder = new StringBuilder(3);

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value);//  '=^.^='


class Car {
    #price
    constructor({ maxSpeed, speed = 0, isOn = false, distance = 0, price }) {
        this.maxSpeed = maxSpeed
        this.speed = speed
        this.isOn = isOn
        this.distance = distance
        this.#price = price
    }
    getSpecs() {
        return `maxSpeed:${this.maxSpeed} speed:${this.speed} isOn: ${this.isOn} distance: ${this.distance} price: ${this.price}`
    }
    get price() {
        return this.#price;
    }
    set price(changePrice) {
        this.#price = changePrice;
    }
    turnOn() {
        this.isOn = true
    }
    turnOff() {
        this.isOn = false
    }
    accelerate(value) {
        if (value <= this.maxSpeed) {
            this.speed += value
        }
    }
    decelerate(value) {
        if (value > 0) {
            this.speed -= value
        }
    }
    drive(hours) {
        if (this.isOn === true) {
            this.distance = hours * this.speed
        }
    }
}
const bmw = new Car({ maxSpeed: 200, price: 2000 });
bmw.turnOn();
bmw.accelerate(50);
bmw.drive(2);

console.log(mustang.getSpecs())
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(mustang.getSpecs())
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000