const firstnumber = parseFloat(prompt('kindly input a first number: '));
const secondnumber = parseFloat(prompt('kindly input a second number: '));
const calculate = prompt('Enter operation either (+, -, *, /):');

let result;

if(calculate == '+') {
    result = firstnumber + secondnumber;
}
else if (calculate == '-'){
    result = firstnumber - secondnumber;
}
else if (calculate == '*'){
    result = firstnumber * secondnumber;
}
else {
    result = firstnumber / secondnumber;
}
alert(`${firstnumber} ${calculate} ${secondnumber} = ${result}`);