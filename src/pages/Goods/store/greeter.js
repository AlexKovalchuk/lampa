"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName + " " + person.fullName;
}
var user = new Student("Jane", "M.", "User");
console.log(greeter(user));
var isDone = false;
var decimal = 6;
var hex = 0xf10d;
var binary = 10;
var octal = 484;
var color = "blue";
color = 'red';
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
// console.log(sentence);
var list = [1, 2, 3];
var list2 = [1, 2, 3];
var x;
// Initialize it
x = ["hello", 10]; // OK
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[2];
console.log('c', c);
console.log('colorName', colorName);
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
var list3 = [1, true, "free"];
list3[1] = 100;
function warnUser() {
    // console.log("This is my warning message");
}
warnUser();
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
function infiniteLoop() {
    while (true) {
    }
}
// create({ prop: 0 }); // OK
var someValue = "this is a string";
var strLength = someValue.length;
var someValue2 = "this is a string";
var strLength2 = someValue2.length;
function f(shouldInitialize) {
    if (shouldInitialize) {
        var xe = 10;
    }
    console.log('x', xe);
    return xe;
}
function sumMatrix(matrix) {
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
function f2(input) {
    var a = 100;
    if (input) {
        // Still okay to reference 'a'
        var b = a + 1;
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
        var x_1 = 100;
        return x_1;
    }
    return x;
}
f3(false, 0); // returns '0'
f3(true, 0); // returns '100'
function sumMatrix2(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i_1 = 0; i_1 < currentRow.length; i_1++) {
            sum += currentRow[i_1];
        }
    }
    return sum;
}
function theCityThatAlwaysSleeps() {
    var getCity;
    if (true) {
        var city_1 = "Seattle";
        getCity = function () {
            return city_1;
        };
    }
    return getCity();
}
var numLivesForCat = 9;
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat
};
function f4(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f4([1, 2]);
