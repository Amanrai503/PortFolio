const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('./public/Cv_Aman.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('parsed_cv.txt', data.text);
    console.log("Parsed successfully.");
});
