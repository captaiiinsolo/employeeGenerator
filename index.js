const inquirer = require('inquirer');
const fs = require('fs/promise');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const genHTML = require('./src/renderHTML');
let myTeam = [];

function writeFile(src, response) {
    fs.writeFile('./src/myTeam.html', myTeamData, (err) => {
        err ? console.log(err) : console.log('New employee has been created!')
    });
}


// Function to initialize Main Menu Prompt
const genNewEmployee = () => {
    inquirer
        .createPromptModule([
            {
                type: 'list',
                message: 'What type of employee would you like to add?',
                name: 'genNewEmployee',
                choices: ['Manager', 'Engineer', 'Intern', 'None']
            }
        ])
        .then(response => {
            switch (response.genNewEmployee) {
                case 'Manager':
                    genNewManager();
                    break;
                
                case 'Engineer':
                    genNewEngineer();
                    break;

                case 'Intern':
                    genNewIntern();
                    break;

                case 'None':
                    let myTeamData = genHTML(response)
                    writeFile('./src/myTeam.html', myTeamData);
                      
            }
        })
}

// Fuction for Manager Info Prompt
const genNewManager = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the name of the new Manager?',
                name: 'managerName'
            },
            
            {
                type: 'input',
                message: 'What is the email address of the new manager?',
                name: 'managerEmail'
            },

            {
                type: 'input',
                message: 'What is their new office number?',
                name: 'managerOffice'
            }

        ])
        .then((response) => {
            const manager = new Manager(response.managerName, response.managerEmail, response.managerOffice)
            myTeam.push(manager)

            genNewEmployee();
        })
}

// Function for Engineer Info Prompt
const genNewEngineer = () => {
    inquirer
        .prompt([
            {
                type: 'input'
            }
        ])
}
// Function for Intern Info Prompt

