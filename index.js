const inquirer = require('inquirer');
const fs = require('fs/promises');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const genHTML = require('./src/genHTML');
let myTeam = [];

function writeFile(src, myTeamData) {
    fs.writeFile('./src/myTeam.html', myTeamData, (err) => {
        err ? console.log(err) : console.log('New employee has been created!')
    });
}


// Function to initialize Main Menu Prompt
const genNewEmployee = () => {
    inquirer
        .prompt([
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
                message: 'Enter the ID # for the new Manager',
                name: 'managerID'
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
        .then((responseManager) => {
            const manager = new Manager(responseManager.managerName, responseManager.managerID, responseManager.managerEmail, responseManager.managerOffice)
            myTeam.push(manager)

            genNewEmployee();
        })
}

// Function for Engineer Info Prompt
const genNewEngineer = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the name of the new Engineer?",
                name: 'engineerName'
            },

            {
                type: 'input',
                message: 'Enter the ID # for the new Engineer',
                name: 'engineerID'
            },

            {
                type: 'input',
                message: 'What is the email address of the new engineer?',
                name: 'engineerEmail'
            },

            {
                type: 'input',
                message: 'What is their GitHub profile name?',
                name: 'engineerGit'
            }
        ])
        .then((responseEngineer) => {
            const engineer = new Engineer(responseEngineer.engineerName, responseEngineer.engineerID, responseEngineer.engineerEmail, responseEngineer.engineerGit)
            myTeam.push(engineer)

            genNewEmployee();
        })
}
// Function for Intern Info Prompt

const genNewIntern = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the name of the new Intern?',
                name: 'internName'
            },

            {
                type: 'input',
                message: 'Enter the ID # for the new Intern.',
                name: 'internID'
            },

            {
                type: 'input',
                message: 'What is the email address of the new intern?',
                name: 'internEmail'
            },

            {
                type: 'input',
                message: 'What College or University does the intern attend?',
                name: 'internEDU'
            }

        ])
        .then((responseIntern) => {
            const intern = new Intern(responseIntern.internName, responseIntern.internID, responseIntern.internEmail, responseIntern.internEDU)
            myTeam.push(intern)

            genNewEmployee();
        })
}

genNewEmployee();

