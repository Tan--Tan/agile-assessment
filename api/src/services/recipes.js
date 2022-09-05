const fs = require('fs'); 
const path = require('path');
const csvParse = require('csv-parse');
const sanitizer = require('string-sanitizer');

const csvData = [];
const inputFile = path.join(__dirname, '../data/recipes.csv');
// mocked favourite IDs
const favouriteIds = [2,4,6,8];
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

function getList({ search, cat }) {
    let result = csvData;
    if(search !== null) {
        result = csvData.filter(i => i.title.toLowerCase().includes(search.toLowerCase()));
    }
    if(cat !== null) {
        result = csvData.filter(i => sanitizer.sanitize(i.category) === cat);
    }
    return result;
}

function getById(id) {
    return csvData.find(i => i.id === Number(id));
}

function getFavouriteList() {
    return csvData.filter(i => favouriteIds.includes(i.id));
}

module.exports = {
    getList,
    getById,
    getFavouriteList
}