const fs = require('fs');
const path = require('path');

// Createa a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder Created');
// });

// Create and write file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if (err) throw err;
//     console.log('File Created');

//     // Append to file
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love Node.js', err => {
//         if (err) throw err;
//         console.log('File Created');
//     });
// });

// Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//         if (err) throw err;
//         console.log(data);
// });

// Rename a file
fs.rename(
    path.join(__dirname, '/test', 'hello.txt'), 
    path.join(__dirname, '/test', 'HelloWorld.txt'), err => {
    if (err) throw err;
    console.log('File renamed');
});