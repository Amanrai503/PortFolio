import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('./public/Cv_Aman.pdf');

(pdf.default || pdf)(dataBuffer).then(function(data) {
    fs.writeFileSync('parsed_cv.txt', data.text);
    console.log("Parsed successfully.");
});
