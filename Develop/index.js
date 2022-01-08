// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

const writeFile = fileContent => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('.README.md', fileContent, err => {
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
            message: 'Please enter the title of your project.',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else{
                    console.log('You must enter a title to continue the generator.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'In your words, what is your project about and what does it do.',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else{
                    console.log('You must enter a description for your application.');
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
            type: 'confirm',
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
            choices: ['MIT', 'Boost', 'Unlicensed'],
            when: ({ confirmLicense }) => {
                if (confirmLicense) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'tests',
            message: 'Would you like to add anything else for the user to know when testing your application?',
        },
        {
            type: 'confirm',
            name: 'questions',
            message: 'Would you like to add any additional questions?',
        },
        {
            type: 'confirm',
            name: 'github',
            message: 'Please enter your github username for your README.',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else{
                    console.log('You must enter a github username for your README.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'email',
            message: 'Please enter your email for your README.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else{
                    console.log('You must enter your email for your README.');
                    return false;
                }
            }
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




