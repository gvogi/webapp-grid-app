const json = require('./data.json');

// console.log(json);

const data = json.data;
// console.log(data);

// let x = JSON.stringify(json);
// console.log(x);

// console.log(JSON.parse(x));

// 3ways to traverse an array

for (let i = 0; i < data.length; i++) {
    console.log("First: ", data[i].name, data[i].surname);
}

data.forEach(val => {
    console.log("Second: ", val.name, val.surname);
})

for (let item in data) {
    console.log("Third: ", item, data[item].name, data[item].surname);
}