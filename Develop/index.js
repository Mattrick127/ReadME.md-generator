// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateReadMe = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the title of your project!?'
        }
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
// "title", "description", "tableOfContents", "Installation", "Usage", "License", "Contributing", "Tests", "Questions"