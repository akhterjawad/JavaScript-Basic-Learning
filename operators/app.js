// Arithmetic Operators

// Addition (+)
// Subtraction (-)
// Multiplication (*)
// Division (/)
// Modulus (Remainder) (%)
// Exponentiation (**)
// Increment (++)
// Decrement (--)

let a = 10;
let b = 3;

// Addition
let add = a + b; // 13

// Subtraction
let subtract = a - b; // 7

// Multiplication
let multiply = a * b; // 30

// Division
let divide = a / b; // 3.3333333333333335

// Modulus
let modulus = a % b; // 1

// Exponentiation
let exponentiate = a ** b; // 1000

// Increment
let increment = a;
increment++; // increment is now 11

// Decrement
let decrement = b;
decrement--; // decrement is now 2


// Assignment Operators

// Assignment (=)
// Addition assignment (+=)
// Subtraction assignment (-=)
// Multiplication assignment (*=)
// Division assignment (/=)
// Remainder assignment (%=)
// Exponentiation assignment (**=)
// Left shift assignment (<<=)
// Right shift assignment (>>=)
// Unsigned right shift assignment (>>>=)
// Bitwise AND assignment (&=)
// Bitwise OR assignment (|=)
// Bitwise XOR assignment (^=)

let c = 10;
let d = 20;

c += d; // a = a + b (a is now 30)
console.log(c); // 30

c -= d; // a = a - b (a is now 10)
console.log(c); // 10

c *= 2; // a = a * 2 (a is now 20)
console.log(a); // 20

c /= 4; // a = a / 4 (a is now 5)
console.log(c); // 5

c %= 3; // a = a % 3 (a is now 2)
console.log(c); // 2

c **= 3; // a = a ** 3 (a is now 8)
console.log(c); // 8


// Comparison Operators

// Equal (==)
// Not equal (!=)
// Strict equal (===)
// Strict not equal (!==)
// Greater than (>)
// Greater than or equal (>=)
// Less than (<)
// Less than or equal (<=)

let e = 5;
let f = 10;
let g = "5";
let h = 5;

// Equal (`==`)
console.log(e == g); // true, because the values are the same (type coercion)

// Not equal (`!=`)
console.log(e != f); // true, because 5 is not equal to 10

// Strict equal (`===`)
console.log(e === h); // true, because both the value and the type are the same
console.log(e === g); // false, because the types are different (number vs string)

// Strict not equal (`!==`)
console.log(e !== g); // true, because the types are different (number vs string)
console.log(e !== h); // false, because both the value and the type are the same

// Greater than (`>`)
console.log(f > e); // true, because 10 is greater than 5

// Greater than or equal (`>=`)
console.log(f >= e); // true, because 10 is greater than or equal to 5
console.log(e >= h); // true, because 5 is equal to 5

// Less than (`<`)
console.log(e < f); // true, because 5 is less than 10

// Less than or equal (`<=`)
console.log(e <= h); // true, because 5 is equal to 5
console.log(e <= f); // true, because 5 is less than 10


// Logical Operators

// Logical AND (&&)
// Logical OR (||)
// Logical NOT (!)

// Define variables
let h1 = true;   // Represents a condition (e.g., user is logged in)
let h2 = false;  // Represents another condition (e.g., user has admin privileges)
let h3 = true;   // Represents a third condition (e.g., user has a valid subscription)

// Logical AND (`&&`): Returns true if all conditions are true
if (h1 && h2) {
    console.log("User is logged in and has admin privileges.");
} else {
    console.log("Either the user is not logged in or does not have admin privileges.");
}
// Output: "Either the user is not logged in or does not have admin privileges."

// Logical OR (`||`): Returns true if at least one condition is true
if (h1 || h3) {
    console.log("User is either logged in or has a valid subscription.");
} else {
    console.log("User is neither logged in nor has a valid subscription.");
}
// Output: "User is either logged in or has a valid subscription."

// Logical NOT (`!`): Returns true if the condition is false
if (!h2) {
    console.log("User does not have admin privileges.");
} else {
    console.log("User has admin privileges.");
}
// Output: "User does not have admin privileges."


// String Operators

// Concatenation (+)
// Concatenation assignment (+=)

// Concatenation using the `+` operator
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: John Doe

// Concatenation using the `+=` operator
let greeting = "Hello";
greeting += ", " + fullName;
console.log(greeting); // Output: Hello, John Doe

// Using template literals for concatenation
let age = 30;
let message = `My name is ${fullName} and I am ${age} years old.`;
console.log(message); // Output: My name is John Doe and I am 30 years old.

// String comparison
let password = "secret";
let confirmPassword = "secret";
let isPasswordMatch = password === confirmPassword;
console.log(isPasswordMatch); // Output: true

// Check if the user's bio is within the character limit
let bioLength = userBio.length;
let maxBioLength = 100;
let isBioValid = bioLength <= maxBioLength;
console.log(`Is the bio valid? ${isBioValid}`); // true if bio is within limit

// Provide feedback on the user's bio
if (bioLength > maxBioLength) {
  console.log(`Bio is too long by ${bioLength - maxBioLength} characters.`);
} else {
  console.log("Bio is within the acceptable length.");
}


// Comma Operator

// Comma (,)

// Using the comma operator to perform multiple operations in an expression
let result = (console.log("First expression"), console.log("Second expression"), 42);
console.log(result); // Output: 42

