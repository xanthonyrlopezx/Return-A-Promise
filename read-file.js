//Practice Returning Promises from a Function

const fs = require("fs");

function readFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (error, buffer) => {
      if (error) {
        return reject(error);
      }
      resolve(buffer.toString());
    });
  });
}

module.exports = readFile;

// readFile() returns a new Promise(). The promise takes a callback function with two parameters, resolve() and reject(), which are both functions.

//To fulfill the promise successfully, pass the final value that you want to extract from the promise to the resolve() function. The file contents 
//are passed into the resolve() function and the promise becomes fulfilled.

//The reject() function works the same way as resolve(), except that it is used when the asynchronous code has failed or gone wrong in some way.
//If error has a truthy value, then error is passed to the reject() function and the promise becomes rejected. You will see more examples using reject() in the future.
