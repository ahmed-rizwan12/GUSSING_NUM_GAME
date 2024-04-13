#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
console.log("Welcome to the number guessing game");
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer_1.default.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6: ",
    },
]);
if (answers.userGuessedNumber == randomNumber) {
    console.log("Congratulation!you guessed a correct number");
}
else {
    console.log(`you guessed a wrong number.The correct number was ${randomNumber}`);
}
