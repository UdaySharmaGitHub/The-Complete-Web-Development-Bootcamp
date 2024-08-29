const fs = require("fs");

// For Writing in the File (Its OverWrite the Whole File)
fs.writeFile("message.txt", "Hello NodeJS Uday", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

//  For Read The File 
fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
