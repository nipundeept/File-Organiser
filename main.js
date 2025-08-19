import PromptSync from "prompt-sync";
let fs=require("fs");
const prompt=PromptSync();
// three main commands: "tree", "organise", "help"
console.log("Input tree or organise along with the directory or type help for the list of commands and their usage");
let input=prompt("Task Manager: ");
let inputImplementation=input.split(" ");
//for edge cases: extra space being input
for (let i=0;i<inputImplementation.length;i++){
    let key=inputImplementation[i];
    if (key==""){
        inputImplementation.splice(i,1);
    }
}
let length=inputImplementation.length;
if (length==1){
    if (inputImplementation[0]!="help"){
        console.log("Invalid key.")
        process.exit(1);
    }
}
else if (length==2){
    if (!["tree", "organise"].includes(inputImplementation[0])) {
        console.log("Invalid key.");
        process.exit(1);
    }
}
switch (inputImplementation[0]){
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



















function treeFunction(dirPath){
    console.log(`Tree is implemented for the directory ${dirPath}`);
   


}


function helpFunction(){
    console.log(`
        list of all the commands: 
        1. tree "directoryPath"
        2. organise "directoryPath"
        3. help
        `);        
}


function organiseFunction(dirPath){
    console.log(`Organise is implemented for the directory ${dirPath}`);
     //1.input--> directory path
    //2. create -> organised_files -> directory
    //3. check all files -> identify the category of the file present in the input directory.
    //4. copy/cut files to that organised directory inside of any category folder
    let doesPathExist=fs.existsSync(dirPath);
    if (doesPathExist){

    }
    else{
        console.log("Directory path does not exist.");
    }
}