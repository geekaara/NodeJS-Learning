const fs = require('fs')

//Creating a new file
fs.writeFileSync('notes.txt', 'I am happy to learn Node JS.')
//Appending a message to the file
fs.appendFileSync('notes.txt', '\nWe have successfully appended this message.')
//Reading from a file
var data = fs.readFileSync('notes.txt')
console.log(data)