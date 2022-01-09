// TODO: Include packages needed for this application
const inquirer = require('inquirer');   
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of the project?",
    },
    {
        type: "input",
        name: "summary",
        message: "Write a summary of how the project functions.",
    },
    {
        type: "input",
        name: "download",
        message: "Explain the download instructions.",
    },
    {
        type: "input",
        name: "usage",
        message: "What will this project be used for?",
    },
    {
        type: "input",
        name: "contributions",
        message: "What were the contribution guidelines for the project?",
    },
    {
        type: "input",
        name: "testing",
        message: "Method of testing the project out?",
    },
    {
        type: "list",
        name: "license",
        message: "What are the different licenses used throughout?",
        choices: ["MIT", "cc", "apache-2.0", "bsl-1.0", "ISC", "Mozilla 2.0", "None"]
    },
    {
        type: "input",
        name: "github_username",
        message: "Enter your Github username.",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
      if (err) return console.log(error);
      console.log("README.md has been created.")
  })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response)
        const rmInfo = generateMarkdown(response)
        return rmInfo
    })
.then(rmInfo => writeToFile('README.md', rmInfo))
}

// Function call to initialize app
init();
