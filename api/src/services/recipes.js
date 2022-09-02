const fs = require('fs'); 
const path = require('path');
const csvParse = require('csv-parse');

const csvData = [];
const inputFile = path.join(__dirname, '../data/recipes.csv');
let curId = 0;

fs.createReadStream(inputFile)
    .pipe(csvParse.parse({delimiter: ',', from_line: 2}))
    .on('data', function(csvrow) {
        const row = {
            id: curId,
            title: csvrow[0],
            desc: csvrow[1].replace('\n', ' '),
            category: csvrow[2],
            servings: Number(csvrow[3]),
            cookingTime: Number(csvrow[4]),
            imgURL: csvrow[5],
            cookingSteps: csvrow[6].split('\n').filter(i => i.length > 0),
            ingredients: csvrow[7].split('\n').map((i) => {
                const val = i.split(':');
                return {
                    name: val[0],
                    value: Number(val[1])
                }
            })
        }; 
        csvData.push(row); 
        ++curId;        
    })
    .on('end',function() {

    });

function getList() {
    return csvData;
}

function getById(id) {
    return csvData.find(i => i.id === Number(id));
}

module.exports = {
    getList,
    getById
}