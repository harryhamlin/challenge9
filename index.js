// packages required for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { builtinModules } = require('module');

// inquirer questions in the command line
const questions = [
    {
        type: 'input',
        message: 'what is the name of your project?',
        name: 'projectName',
    },
    {
        type: 'input',
        message: 'provide a project description',
        name: 'desctription'
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
        message: 'describe the usage of this app',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'provide description of tests for project',
        name: 'tests'
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

// function that writes the markdown to the README.md file from the export module from generateMarkdown
function writeToFile(questions) {
    // const { projectName } = questions;
    // const fileName = `${projectName.toLowerCase().split(' ').join('')}.md`;
    fs.writeFile('README.md', generateMarkdown.generateMarkdown(questions), { flag: 'wx' }, (err) =>
        err ? console.error(err) : console.log('written to file')
    );
}

// 
function init() {
    inquirer
        .prompt(questions)
        .then((response) =>
            writeToFile(response)
        );
}

// Function call to initialize app

module.exports = init


