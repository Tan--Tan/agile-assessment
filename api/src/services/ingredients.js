const fs = require('fs'); 
const path = require('path');
const csvParse = require('csv-parse');
const sanitizer = require('string-sanitizer');

const csvData = [];
const inputFile = path.join(__dirname, '../data/ingredients.csv');
let curId = 0;

fs.createReadStream(inputFile)
    .pipe(csvParse.parse({delimiter: ',', from_line: 2}))
    .on('data', function(csvrow) {
        const row = {
            id: curId,
            title: csvrow[0],
            calories: csvrow[1],
            protein: csvrow[2],
            fat: csvrow[3],
            carbs: csvrow[4],
        }; 
        csvData.push(row); 
        ++curId;        
    })
    .on('end',function() {

    });

function getList({ search }) {
    let result = csvData;
    if(search !== null) {
        result = csvData.filter(i => i.title.toLowerCase().includes(search.toLowerCase()));
    }
    return result;
}

module.exports = {
    getList
}