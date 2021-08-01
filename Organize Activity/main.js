let helpObj = require("./command/help");
let treeObj = require("./command/tree");
let organizeObj = require("./command/organize");


let inputArr = process.argv.slice(2);
let command = inputArr[0];

switch(command) {
     case "tree":
         treeObj.treefxn(inputArr[1])
         break;
     case "organize":
         organizeObj.organizefxn(inputArr[1]);
         break;
     case "help":
         helpObj.helpfxn();
         break;
         default:
             console.log("kindly enter the correct cmd");
             break;
}

//main inputs
//input --> node main.js tree "path"
//print --> tree command executed with path ""
//input --> node main.js organize "path"
//print --> organize command executed with path ""
//input --> node main.js help
  //print --> list of all the commands
      // 1. node main.js tree "path"
      // 2. node main.js organize "path"
      // 3. node main.js help