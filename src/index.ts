//string, number, boolean...
const x: number = 20

console.log(x)

//inferencia x annotation
const y = 12
//y = '12' //error

let z: number = 10

//tipos basicos
let isDone: boolean = false
let decimal: number = 6
let color: string = 'blue'
let list: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]
let x2: [string, number]

//objects
let person: {
    name: string
    age: number
}

person = {
    name: 'John',
    age: 30
}

console.log(person)

const myNumbers: number[] = [1, 2, 3]
console.log(myNumbers.push(4))

//tuplas
let myTuple: [string, number, string[]] = ['hello', 10, ['a', 'b', 'c']]

console.log(myTuple)

//object literals -> {prop: value}
const user: {name: string, age: number} = {
    name: 'John',
    age: 30
}

console.log(user)

//any
let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false

//union types
let id: number | string = 234
id = '234'

//type alias
type StringOrNumber = string | number

const userId: StringOrNumber = 1234
const productId: StringOrNumber = '1234'

//enums

enum Size {
    Small = 'S',
    Medium = 'M',
    Large = 'L'
}

const camisa = {
    name: 'Camisa Polo',
    size: Size.Small
}

console.log(camisa)

//literal types
let small: 'small' = 'small'
//small = 'medium' //error
small = 'small'

//functions
function add(a: number, b: number): number {
    return a + b
}
console.log(add(2, 3))

//optional parameters
function greet(name: string, greeting?: string): string | void {
    return `Hello ${name} ${greeting ? greeting : ''}`
}

console.log(greet('John'))
console.log(greet('John', 'Good morning'))

//interfaces
interface Person {
    name: string
    age: number
}

function greetPerson(person: Person): string {
    return `Hello ${person.name} - ${person.age}`
}

let jhon: Person = {
    name: 'John',
    age: 30
}

console.log(greetPerson(jhon))

//narrowing
//checagem de tipos
function isNumber(info: string | number) {
    if (typeof info === 'number') {
        console.log('É um número')
        return
    }  
    console.log('Não é um número')
}

console.log(isNumber('123'))

//generics
function insertAtBeginning<T>(array: T[]) {
    array.forEach((i) => {
        console.log(i)
    })
}

const demoArray = [1, 2, 3]
insertAtBeginning(demoArray)


//classes
class User {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    greet() {
        return `Hello ${this.name}, it's great to see you! I'm ${this.age}`
    }
}

const john = new User('John', 30)

console.log(john.greet())

//interfaces em classes
interface IVehicle {
    brand: string
    speed: number
    speedUp(): void
}

class Car implements IVehicle {
    brand: string
    speed: number

    constructor(brand: string, speed: number) {
        this.brand = brand
        this.speed = speed
    }

    speedUp() {
        this.speed += 10
    }
}

const car = new Car('Ford', 150)
car.speedUp()

//herança
class Animal {
    name: string

    constructor(name: string) {
        this.name = name
    }

    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}m`)
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!')
    }
}

const dog = new Dog('Rex')
dog.bark()
dog.move(10)

//decorators
//função que retorna uma função
function BaseParameters() {
    return function<T extends {new(...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.random()
        }
    }
}

@BaseParameters() //decorator aplicado
class House {
    price: number

    constructor(price: number) {
        this.price = price
    }   
}

const house = new House(200000)
console.log(house)