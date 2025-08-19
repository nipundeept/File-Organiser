import promptSync from "prompt-sync";
const fs=require("fs");
const prompt=promptSync();
let name=prompt("What is your name? ");
console.log(`Hello ${name}`);
let age=prompt(`Please enter your age ${name}: `);
console.log(`So your age is ${age}`)

//split method divides a string into an array of substrings based on a given separator
//string_var.split(separator, limit);
let words=name.split(" ")
console.log(words);