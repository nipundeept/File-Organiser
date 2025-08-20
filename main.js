#!/usr/bin/env node
import PromptSync from "prompt-sync";
import path from "path";
import fs from "fs";
import { helpFunction } from "./contents/help.js";
import { organiseFunction } from "./contents/organise.js"; 

const prompt = PromptSync();
// two main commands: "organise", "help"
console.log("organise <directory> or type help.");
let input = prompt("Enter your command: ");
let inputImplementation = input.split(" ");

//for edge cases: extra space being input
for (let i = 0; i < inputImplementation.length; i++) {
    let key = inputImplementation[i];
    if (key == "") {
        inputImplementation.splice(i, 1);
    }
}
let length = inputImplementation.length;
if (length == 1) {
    if (inputImplementation[0] != "help") {
        console.log("Invalid key.")
        process.exit(1);
    }
}
else if (length == 2) {
    if (!["organise"].includes(inputImplementation[0])) {
        console.log("Invalid key.");
        process.exit(1);
    }
}
switch (inputImplementation[0]) {
    case "organise":
        organiseFunction(inputImplementation[1]);
        break;
    case "help":
        helpFunction();
        break;
    default:
        console.log("Invalid input entered.");
}
