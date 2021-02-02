const fs = require('fs');

function errorFirstCallback(err, data) {
    if (err) {
        console.error('There was an error', err);
        return;
    }
    console.log(data);
}

fs.readFile('./my-data.json', errorFirstCallback); // <Buffer 7b 0a 20 20 20 20 22 >
fs.readFile('./does-exist', errorFirstCallback); // Error