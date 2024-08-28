"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
//string, number, boolean...
const x = 20;
console.log(x);
//inferencia x annotation
const y = 12;
//y = '12' //error
let z = 10;
//tipos basicos
let isDone = false;
let decimal = 6;
let color = 'blue';
let list = [1, 2, 3];
let list2 = [1, 2, 3];
let x2;
//objects
let person;
person = {
    name: 'John',
    age: 30
};
console.log(person);
const myNumbers = [1, 2, 3];
console.log(myNumbers.push(4));
//tuplas
let myTuple = ['hello', 10, ['a', 'b', 'c']];
console.log(myTuple);
//object literals -> {prop: value}
const user = {
    name: 'John',
    age: 30
};
console.log(user);
//any
let notSure = 4;
notSure = 'maybe a string instead';
notSure = false;
//union types
let id = 234;
id = '234';
const userId = 1234;
const productId = '1234';
//enums
var Size;
(function (Size) {
    Size["Small"] = "S";
    Size["Medium"] = "M";
    Size["Large"] = "L";
})(Size || (Size = {}));
const camisa = {
    name: 'Camisa Polo',
    size: Size.Small
};
console.log(camisa);
//literal types
let small = 'small';
//small = 'medium' //error
small = 'small';
//functions
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
//optional parameters
function greet(name, greeting) {
    return `Hello ${name} ${greeting ? greeting : ''}`;
}
console.log(greet('John'));
console.log(greet('John', 'Good morning'));
function greetPerson(person) {
    return `Hello ${person.name} - ${person.age}`;
}
let jhon = {
    name: 'John',
    age: 30
};
console.log(greetPerson(jhon));
//narrowing
//checagem de tipos
function isNumber(info) {
    if (typeof info === 'number') {
        console.log('É um número');
        return;
    }
    console.log('Não é um número');
}
console.log(isNumber('123'));
//generics
function insertAtBeginning(array) {
    array.forEach((i) => {
        console.log(i);
    });
}
const demoArray = [1, 2, 3];
insertAtBeginning(demoArray);
//classes
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello ${this.name}, it's great to see you! I'm ${this.age}`;
    }
}
const john = new User('John', 30);
console.log(john.greet());
class Car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    speedUp() {
        this.speed += 10;
    }
}
const car = new Car('Ford', 150);
car.speedUp();
//herança
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distance = 0) {
        console.log(`${this.name} moved ${distance}m`);
    }
}
class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}
const dog = new Dog('Rex');
dog.bark();
dog.move(10);
//decorators
//função que retorna uma função
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
            }
        };
    };
}
let House = (() => {
    let _classDecorators = [BaseParameters()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var House = _classThis = class {
        constructor(price) {
            this.price = price;
        }
    };
    __setFunctionName(_classThis, "House");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        House = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return House = _classThis;
})();
const house = new House(200000);
console.log(house);
