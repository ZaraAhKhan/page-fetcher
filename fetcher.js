const request = require('request');
const fs = require('fs');

const arrayArgs = process.argv.slice(2);

request(arrayArgs[0], (error, response, body) => {
  if(error) {
    console.log("Error: ", error);
    return;
  }
  let content = body;
  fs.writeFile(arrayArgs[1], content , err => {
    if (err) {
      console.error(err);
      return;
    }

    fs.stat(arrayArgs[1],(err,stats) => {
      if (err) {
        console.error(err);
        return;
      }
      let sizeOfFile = stats.size;
      console.log(`Downloaded and saved ${sizeOfFile} bytes to ${arrayArgs[1]}`);
    });
    
  });
  
});
