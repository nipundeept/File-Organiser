import types from "./types.js";
import fs from "fs";
import path from "path";
export function organiseFunction(dirPath) {
    let destination = path.join(dirPath, "Organised Files");
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
            let category=getCategory(child[i]);
            //console.log(child[i], "belongs to -->",category);
            sendFiles(childPath, dest, category);
        }
    }
}

function getCategory(name){
    let extension=path.extname(name);
    extension=extension.slice(1);
    //console.log(extension);
    for (let type in types){
        let typeArray=(types[type]);
        for (let i=0;i<typeArray.length;i++){
            if (extension===typeArray[i])
                return type;
        }
    }
    return "Others";
}

function sendFiles(srcPath, dest, cat){
    let catPath=path.join(dest, cat);
    if (!fs.existsSync(catPath)){
        fs.mkdirSync(catPath);
    }
    let fileName=path.basename(srcPath);
    let destFilePath=path.join(catPath,fileName);
    fs.copyFileSync(srcPath, destFilePath);
    console.log(`${fileName} is being copied to: ${cat}`);
}