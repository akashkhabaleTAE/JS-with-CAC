// let score = null; // type of score is object

// console.log(typeof score);

// let valueInNumber = Number(score); // converting null into integer will assign 0 to variable
// let valueInString = String(score); // converting null into string will assign its default value null to variable
// console.log(valueInNumber);
// console.log(valueInString);

// let check = undefined;

// console.log(typeof check); // undefined is of type undefined

// let checkToNumber = Number(check); // converting undefined into number will return NaN
// let checkToString = String(check); // converting undefined into string will assign its default value undefined to variable

// console.log(typeof checkToNumber);
// console.log(checkToNumber);

// console.log(typeof checkToString);
// console.log(checkToString);


// let tryBoolean = false;

// console.log(typeof tryBoolean + " " + tryBoolean);

// let tryToNumber = Number(tryBoolean); // true becomes 1 and false becomes 0 by converting boolean into number
// let tryToString = String(tryBoolean); // true remains true and false remains false but as a string

// console.log(typeof tryToNumber + " " + tryToNumber);

// console.log(typeof tryToString + " " + tryToString);


// let name = "akash";

// console.log(typeof name + " " + name);

// let nameToNumber = Number(name); // converting string of letters will return NaN as a result
// let nameToString = String(name); // converting string into sting will remain the same

// console.log(typeof nameToNumber + " " + nameToNumber);
// console.log(typeof nameToString + " " + nameToString);


let result = ''; // converting empty string to boolean will result false and vice versa

console.log(typeof result + " " + result);

let booleanResult = Boolean(result);
console.log(typeof booleanResult + " " + booleanResult);
let stringResult = String(result);
console.log(typeof stringResult + " " + stringResult);