#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "Enter first number",
    type: "input", // Change type to "input"
    name: "firstNumber" // Correct the name to match
  },
  {
    message: "Enter second number",
    type: "input", // Change type to "input"
    name: "secondNumber" // Correct the name to match
  },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"]
  }
]);

// Convert input strings to numbers
const firstNumber = parseFloat(answer.firstNumber);
const secondNumber = parseFloat(answer.secondNumber);

// Conditional statement
if (answer.operator === "Addition") {
  console.log(firstNumber + secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(firstNumber - secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(firstNumber * secondNumber);
} else if (answer.operator === "Division") {
  console.log(firstNumber / secondNumber);
} else {
  console.log("Please select valid operators");
}