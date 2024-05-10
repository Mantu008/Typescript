"use strict";
//string
Object.defineProperty(exports, "__esModule", { value: true });
var Name = "mantu";
console.log("string->", Name);
//number
var a = 10;
var b = 10.5;
var sum = (a + b);
console.log("number->", sum);
//boolean
var isLoggedIn = false;
console.log("boolean->", isLoggedIn);
//any 
var hero;
function getHero() {
    return "mantu";
}
hero = getHero();
console.log(hero);
