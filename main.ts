#! usr/bin/env node
import inquirer from "inquirer";

const your_word :  {Word:string} = await inquirer.prompt({
    name:"Word",
    type:"input",
    message:"write your sentence or any phrase to count."
})

let word = your_word.Word.trim().split(" ")

console.log(word);
console.log(`your sentence or phrase count is ${word.length}.`);

