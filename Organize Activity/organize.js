let fs = require("fs");
let path = require("path");

let types = {
    media: ["mp4", "mkv", "jpg"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

function organizefn(scn) {
    //console.log("organize command executed: " + "C:\\Users\\JEETENDRA KUMAR\\Desktop\\Dev\\Activity1");
   let mainPath = scn;
 
   let contents = fs.readdirSync(scn);
   //console.log(contents);
   let n = contents.length;
   
   let organizedFolder = path.join(mainPath, "organized folder");
   //console.log(organizedFolder);
   fs.mkdirSync(organizedFolder);

   let mediaPath = path.join(organizedFolder, "media");
   let archivesPath = path.join(organizedFolder, "archives");
   let documentsPath = path.join(organizedFolder, "documents");
   let appPath = path.join(organizedFolder, "app");
   console.log(mediaPath);
   console.log(archivesPath);
   console.log(documentsPath);
   console.log(appPath);

   fs.mkdirSync(mediaPath);
   fs.mkdirSync(archivesPath);
   fs.mkdirSync(documentsPath);
   fs.mkdirSync(appPath);

   for(let i = 0; i < n; i++){
       //console.log(contents[i]);
       let filenames = contents[i]; //filenames will give the names of individual files present in main file.
       let extensions = getFileExtension(filenames);
       //console.log(extensions);
       let pathOfFiles = path.join(mainPath,filenames);  //these paths are to be copied to the final files
       //console.log(pathOfFiles);
       for(let key in types){
           for(let i = 0; i < types[key].length; i++){
               let temp = types[key][i];
               if(extensions == temp){
                    finalWork(pathOfFiles, organizedFolder, key);
               }
           }
       }
     }

    function finalWork(pathOfFiles, organizedFolder, key){
        let srcFilePath = path.join(organizedFolder, key);
        //console.log(srcFilePath);
        let baseName = path.basename(pathOfFiles);
        let destFilePath = path.join(srcFilePath, baseName);
        console.log(destFilePath);
        fs.copyFileSync(pathOfFiles, destFilePath);
  }

   function getFileExtension(filenames){
       let arr = [];
       arr = filenames.split(".");
       return arr[arr.length - 1];
   }

   



    
}
//code export
module.exports = {
    organizefxn: organizefn
}