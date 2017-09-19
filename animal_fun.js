const fs = require('fs');

// fs.readFile('./animal.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// fs.writeFile('./example.txt', 'I will be written to example.txt', err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file successfully written!");
//   }
// });

console.log(process.argv);

// Pass a single letter to your script
// Read the animals.txt file
// Grab every animal which begins with the letter
// Write that list of animals to a new file called "{letter}_animals.txt"