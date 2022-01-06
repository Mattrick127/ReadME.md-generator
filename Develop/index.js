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
            name: 'title',
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
            name: 'description',
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
            name: 'installation',
            message: 'How would one sitting at home be able to use your application?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are the uses for this application?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Would you like to list any fellow collaborators in this project?',
        },
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to include a license?',
        },
        {
            type: 'choice',
            name: 'license',
            message: 'What type of license would you like to have for your README?',
            choices: ['MIT', 'Boost', 'Unlicense'],
            when: ({ confirmLicense }) => {
                if (confirmLicense) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'badges',
            message: 'Would you like to include a badge at the top of your ReadME?',
        },
        {
            type: 'input',
            name: 'features',
            message: 'What other features does your product contain?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Would you like to include tests?',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Would you like to add any additional questions?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Would you like to include your github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Would you like to include your email?'
        }
    ])
}


// TODO: Create a function to write README file


promptQuestions()
.then(readMeData => {
    return generateMarkdown(readMeData);
})
.then(pageReadMe => {
    return writeFile(pageReadMe);
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
})
.catch(err => {
    console.log(err);
});


// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app




