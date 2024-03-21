#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "FirstNumber" },
    { message: "Enter Second Number", type: "number", name: "SecondNumber" },
    {
      message: "Select one of the Operators to perform your desired operation",
      type: "list",
      name: "operator",
      choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
    },
  ]);
  
  // console.log(answer); // To display answers in console
  
  //Conditional Statement
  
  if (answer.operator === "ADDITION") {
    console.log("Your Added Value is:");
    console.log(answer.FirstNumber + answer.SecondNumber);
  } else if (answer.operator === "SUBTRACTION") {
    console.log("Your Subtracted Value is:");
    console.log(answer.FirstNumber - answer.SecondNumber);
  } else if (answer.operator === "MULTIPLICATION") {
    console.log("Your Multiplied Value is:");
    console.log(answer.FirstNumber * answer.SecondNumber);
  } else if (answer.operator === "DIVISION") {
    console.log("Your Divided Value is:");
    console.log((answer.FirstNumber / answer.SecondNumber).toFixed(3));
  } else {
    console.log("Please Select From The Given Operators");
  }
  