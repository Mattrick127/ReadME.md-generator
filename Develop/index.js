// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

const writeFile = fileContent => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('.ReadME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};
module.exports = { writeFile };

// TODO: Create an array of questions for user input
// const promptQuestions = [];

const promptQuestions = () => {
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
    //     {
    //         type: 'input',
    //         name: 'description',
    //         message: 'Please explain what your project is about.',
    //         validate: titleInput => {
    //             if (titleInput) {
    //                 return true;
    //             } else{
    //                 console.log('Please enter a title name for your Readme!');
    //                 return false;
    //             }
    //         }
    //     },
    //     {
    //         type: 'input',
    //         name: 'contents',
    //         message: 'Would you like to include a table of contents?'
    //     },
    //     {
    //         type: 'input',
    //         name: 'installation',
    //         message: 'How would one sitting at home be able to use your application?',
    //         default: false
    //     },
    //     {
    //         type: 'input',
    //         name: 'usage',
    //         message: 'What are the uses for this application?',
    //         default: false
    //     },
    //     {
    //         type: 'input',
    //         name: 'contribution',
    //         message: 'Would you like to list any fellow collaborators in this project?',
    //         default: false
    //     },
    //     {
    //         type: 'input',
    //         name: 'licesnse',
    //         message: 'Would you like to include a license?',
    //         default: false
    //     },
    //     {
    //         type: 'input',
    //         name: 'badge',
    //         message: 'Would you like to include a badge at the top of your ReadME?',
    //         default: false
    //     },
    //     {
    //         type: 'input',
    //         name: 'features',
    //         message: 'What other features does your product contain?',
    //         default: false
    //     },
    //     {
    //         type: 'input',
    //         name: 'tests',
    //         message: 'Would you like to include tests?',
    //         default: false
    //     },
    ])




}


// TODO: Create a function to write README file


promptQuestions()
.then(readmeData => {
    return generateMarkdown(readmeData);
})


// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app