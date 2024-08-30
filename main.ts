#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.blue('\n \t Welcome to Touqeer - Word Counter Programme \n'));
console.log('='.repeat(50));

let answers = await inquirer.prompt(
  {
    name: "sentence",
    type: "input",
    message: 'Enter Your Sentence Here :',
  }
);

let word = answers.sentence.trim().split(" ");
console.log(word);
console.log(word.length);
