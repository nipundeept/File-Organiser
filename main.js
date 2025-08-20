import PromptSync from "prompt-sync";
import path from "path";
import fs from "fs";

console.log(path.basename("/Users/naman/Documents/file.txt"));
const prompt = PromptSync();
// three main commands: "tree", "organise", "help"
console.log("Input tree or organise along with the directory or type help for the list of commands and their usage");
let input = prompt("Task Manager: ");
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
    if (!["tree", "organise"].includes(inputImplementation[0])) {
        console.log("Invalid key.");
        process.exit(1);
    }
}
switch (inputImplementation[0]) {
    case "tree":
        treeFunction(inputImplementation[1]);
        break;
    case "organise":
        organiseFunction(inputImplementation[1]);
        break;
    case "help":
        helpFunction();
        break;
        defaut:
        console.log("Invalid input entered.");
}



function treeFunction(dirPath) {
    console.log(`Tree is implemented for the directory ${dirPath}`);



}

function helpFunction() {
    console.log(`
        list of all the commands: 
        1. tree "directoryPath"
        2. organise "directoryPath"
        3. help
        `);
}
function organiseFunction(dirPath) {
    let destination = path.join(dirPath, "Organised Files");;
    console.log(`Organise is being implemented for the directory ${dirPath}`);
    let doesPathExist = fs.existsSync(dirPath);

    if (doesPathExist) {

        try {
            fs.mkdirSync(destination);
            console.log("Folder created successfully.");
        }
        catch (err) {
            if (err.code === "EEXIST") {
                console.log("Directory already exists in the given destination.");
            }
            else {
                console.log("Error creating the destination.", err);
            }
        }
        organiseHelper(dirPath, destination);
    }

    else {
        console.log("Input directory does not exist.");
    }
}


function organiseHelper(src, dest) {
    let child = fs.readdirSync(src);
    console.log(child);
    for (let i = 0; i < child.length; i++) {
        let childPath = path.join(src, child[i]);
        let isFile = fs.lstatSync(childPath).isFile();
        if (isFile) {
            console.log(child[i]);
        }
    }
}