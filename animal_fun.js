const fs = require('fs');

function selectAnimals(animalString, animalLetter) {
  return animalString
    .split('\n')
    .filter(animal => animal.startsWith(animalLetter))
    .join('\n');
}

const animalLetter = process.argv[2].toUpperCase();

fs.readFile('./animals.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const animals = selectAnimals(data, animalLetter);

  fs.writeFile(`${animalLetter}_animals.txt`, animals, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`successfully created ${animalLetter}_animals.txt`)
  });
});


// fs.writeFile('./example.txt', 'I will be written to example.txt', err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file successfully written!");
//   }
// });

// console.log(process.data);

// Pass a single letter to your script
// Read the animals.txt file
// Grab every animal which begins with the letter
// Write that list of animals to a new file called "{letter}_animals.txt"

