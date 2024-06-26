"use server";

import fs from "fs"
import path from "path";

export const persistChanges = (key,newData) => {
  console.log(newData);

  const dataFilePath = path.join(process.cwd(), '/src/store/data.json');
  

  console.log("dataFilePath:::",dataFilePath)
  
  //const filePath = path.resolve("./src/store/data.json");
  let jsonData = fs.readFileSync(dataFilePath, 'utf8');
   jsonData = JSON.parse(jsonData);
   jsonData[key] = newData;

  const updatedJsonString = JSON.stringify(jsonData, null, 2);

    // Write the updated JSON string back to the file
    fs.writeFile(dataFilePath, updatedJsonString, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('Record updated/inserted successfully!');
        return true
    });

  const filePath = path.resolve( "./src/store/data.json");
  


  return false
};

export const getRecord = async (key) => {

  
//const dataFilePath = path.join(process.cwd(), '/src/store/data.json');
  const dataFilePath = path.join(__dirname, 'src', 'store', 'data.json');

  console.log("dataFilePath::",dataFilePath)

  //const filePath = path.resolve(dataFilePath);
  const jsonData = fs.readFileSync(dataFilePath, 'utf8');
  const data = JSON.parse(jsonData);

  if (data[key]) {
    return data[key];
  } else {
    return null;
  }

}
