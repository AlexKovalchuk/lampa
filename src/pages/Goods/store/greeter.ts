import {log} from "util";

class Student {
    fullName: string;
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
    fullName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName + " " + person.fullName;
}

let user = new Student("Jane", "M.", "User");
console.log(greeter(user));

let isDone: boolean = false;
let decimal: number = 6;
let hex: number = 0xf10d;
let binary: number = 0b1010;
let octal: number = 0o744;
let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;
// console.log(sentence);

let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK

enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;
let colorName: string = Color[2];
console.log('c', c);
console.log('colorName', colorName);
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

let list3: any[] = [1, true, "free"];

list3[1] = 100;
function warnUser(): void {
    // console.log("This is my warning message");
}
warnUser();

function error(message: string): never {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}

function infiniteLoop(): never {
    while (true) {
    }
}

declare function create(o: object | null): void;

// create({ prop: 0 }); // OK

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;

function f(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var xe = 10;
    }

    console.log('x', xe);
    return xe;
}

function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}

// for (var i = 0; i < 10; i++) {
//     setTimeout(function() { console.log('i', i); }, 100 * i);
// }
// for (let j = 0; j < 10; j++) {
//     setTimeout(function() { console.log('j', j); }, 100 * j);
// }


function f2(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }
}

try {
    throw "oh no!";
}
catch (e) {
    console.log("Oh well.");
}

function f3(condition, x) {
    if (condition) {
        let x = 100;
        return x;
    }

    return x;
}

f3(false, 0); // returns '0'
f3(true, 0);  // returns '100'

function sumMatrix2(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}

function theCityThatAlwaysSleeps() {
    let getCity;

    if (true) {
        let city = "Seattle";
        getCity = function() {
            return city;
        }
    }

    return getCity();
}

const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}

function f4([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f4([1, 2]);

