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
const generateMarkdown = require('./utils/generateMarkdown.js')

const questions = [
    {
        type: 'input',
        message: 'what is the name of your project?',
        name: 'projectName',
    },
    {
        type: 'list',
        message: 'which licesnse would you like to use?',
        name: 'license',
        choices: [
            { name: 'Apache 2.0'},
            { name: 'Boost 1.0'},
            { name: 'BSD 3-Clause'},
            { name: 'CC0-1.0'},
            { name: 'Eclipse Public License 1.0'},
            { name: 'MIT'},
            { name: 'MPL-2.0'},
            { name: 'Perl'},
            { name: 'None', value: null}
        ]
    },
    {
        type: 'input',
        message: 'what is your github username?',
        name: 'githubUN',
    },
    {
        type: 'input',
        message: 'what is your email address?',
        name: 'email',
    },
]

// TODO: Create a function to write README file
function writeToFile(questions) {
    const { projectName } = questions
    const fileName = `${projectName.toLowerCase().split(' ').join('')}.md`
    fs.writeFile(fileName, generateMarkdown.generateMarkdown(questions), { flag: 'wx' }, (err) =>
        err ? console.error(err) : console.log('written to file')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) =>
            writeToFile(response)
        );
}

// Function call to initialize app
init();
