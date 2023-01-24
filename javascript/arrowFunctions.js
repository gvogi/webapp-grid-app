let hello1 = function () {
    return "Hello World!";
}

console.log(hello1());

let hello2 = () => {
    return "Hello World 2"
}

console.log(hello2());

let hello3 = () => "Hello world 3";
console.log(hello3());

let hello4 = (val) => "Hello" + val;
console.log(hello4("World 4"));

let calc = (a, b) => a + b + 100;
console.log(calc(3, 7));

function hello5(parameter1, parameter2 = "5") {
    return "Hello" + parameter1 + "," + parameter2;
}

console.log(hello5("World"));

console.log(hello5("World", "xxxx"));
