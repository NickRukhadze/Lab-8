// Q1
let name = "Nick";
let age = 19;
console.log("Name:", name);
console.log("Age:", age);

// Q2
let stringVar = "Hello, World!";
let numberVar = 42;
let booleanVar = true;
let undefinedVar;
console.log("String:", stringVar);
console.log("Number:", numberVar);
console.log("Boolean:", booleanVar);
console.log("Undefined:", undefinedVar);

// Q3
let RollNumber = 15;
if (RollNumber > 10) {
    console.log("The RollNumber is greater than 10");
}

// Q4
let isMember = true;
if (isMember) {
    console.log("Member discount applied.");
}

// Q5
let startValue = 50;
if (startValue > 0) {
    console.log("The startValue is positive.");
} else if (startValue < 0) {
    console.log("The startValue is negative.");
} else {
    console.log("The startValue is zero.");
}

// Q6
let a = 5;
let b = 10;
console.log("a == b:", a == b);
console.log("a === b:", a === b);
console.log("a != b:", a != b);
console.log("a > b:", a > b);
console.log("a < b:", a < b);
console.log("a >= b:", a >= b);
console.log("a <= b:", a <= b);

// Q7
let firstName = "Nikoloz";
let lastName = "Rukhadze";
let myAge = 19;
console.log("Hello, " + firstName + " " + lastName + ", you are " + myAge + " years old.");

// Q8
let num = 50;
if (num > 0 && num < 100) {
    console.log("The number is within range.");
}

// Q9
let hasCar = true;
let hasLicense = true;
let hasInsurance = true;
if (hasCar && hasLicense && hasInsurance) {
    console.log("You can drive legally.");
} else {
    console.log("Check your driving eligibility.");
}

// Q10
let number = 21;
if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

// Q11
let score = 85;
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80 && score <= 89) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}
