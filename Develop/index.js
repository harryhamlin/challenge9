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
        type: 'list',
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

// TODO: Create a function to write README file
function writeToFile(questions) {
    const { projectname, license, githubun, email } = questions
    const fileName = `${projectname.toLowerCase().split(' ').join('')}.md`
    console.log(fileName);
    console.log(projectname);
    console.log(license);
    console.log(githubun);
    console.log(email);
    fs.writeFile(fileName, `${projectname}`, (err) =>
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
