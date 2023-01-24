// const args = process.argv.slice(2);
const args = process.argv;


// console.log(args);

// console.log(args[2].split(','));
const arr1 = args[2].split(',').map(val => Number(val));
// console.log(arr1);


// const arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1]
const arr2 = [];
let min = 0;
let find = 0;

for (let i = 0; i < arr1.length; i++) {
    values = arr1.filter((val) => !isNaN(val));
    // console.log(arr1, values);
    min = Math.min(...values);
    arr2[i] = min;
    find = arr1.indexOf(min);
    arr1[find] = "x";
}

console.log(arr2);
// console.log(arr1);
