// TODO: Include packages needed for this application



// sections:
// title
// tableofcontents (clickeable hyperlinks)
// license (input should be checkboxes)
// installation
// usage
// contributing (input should include github username/output: link to the github page)
// tests 
// questions (input should include email address)

const inquirer = require('inquirer');
const fs = require('fs');


const questions = [
    {
        type: 'input',
        message: 'what is the name of your project?',
        name: 'projectname',
    },
    {
        type: 'checkbox',
        message: 'which licesnse would you like to use?',
        name: 'license',
        choices: [
            { name: 'this', value: 'this' },
            { name: 'that', value: 'that' },
            { name: 'theother', value: 'theother' },
        ]
    },
    {
        type: 'input',
        message: 'what is your github username?',
        name: 'githubun',
    },
    {
        type: 'input',
        message: 'what is your email address?',
        name: 'email',
    },
]


// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) =>
            response.confirm === response.password
                ? console.log('Success!')
                : console.log('You forgot your password already?!')
        );
}

// Function call to initialize app
init();
