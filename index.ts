#! /usr/bin/env node

import inquirer from "inquirer";
console.log("Welcome to the number guessing game");
const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "please guess a number between 1-6: ",
  },
]);

if (answers.userGuessedNumber == randomNumber) {
  console.log("Congratulation!you guessed a correct number");
} else {
  console.log(
    `you guessed a wrong number.The correct number was ${randomNumber}`
  );
}
