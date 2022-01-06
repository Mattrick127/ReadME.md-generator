// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateReadMe = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the title of your project!?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else{
                    console.log('Please enter a title name for your Readme!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'Please explain what your project is about.',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else{
                    console.log('Please enter a title name for your Readme!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'Would you like to include a table of contents?'
        },
        {
            type: 'input',
            name: 'name',
            message: 'How would one sitting at home be able to use your application?',
            default: false
        },
        {
            type: 'input',
            name: 'name',
            message: 'What are the uses for this application?',
            default: false
        },
        {
            type: 'input',
            name: 'name',
            message: 'Would you like to list any fellow collaborators in this project?',
            default: false
        },
        {
            type: 'input',
            name: 'name',
            message: 'Would you like to include a license?',
            default: false
        },
        {
            type: 'input',
            name: 'name',
            message: 'Would you like to include a badge at the top of your ReadME?',
            default: false
        },
        {
            type: 'input',
            name: 'name',
            message: 'What other features does your product contain?',
            default: false
        },
        {
            type: 'input',
            name: 'name',
            message: 'Would you like to include tests?',
            default: false
        },
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();