const inquirer = require('inquirer');
const fs = require('fs')
const generateHTML = (answers) => 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../node_modules/bulma/css/bulma.css">
    <script src="https://kit.fontawesome.com/6fdd9419ec.js" crossorigin="anonymous"></script>
    <title>My Team</title>
</head>
<body>
    <section>
        <header class="hero is-danger has-text-centered">
            <div class="hero-body">
                <p class="title">My Team</p>
            </div>
        </header>
    </section>

    <section>
      <div class="columns is-multiline is-centered m-2 p-4">
        <div class="column is-one-third">
            <div class="hero is-info is-small has-text-centered">
                <div class="hero-body">
                    <p class="title is-4">${employeeName}</p>
                    <p class="subtitle is-4">${employeePosition}</p>
                </div>
            </div>

            <div class="card">
                <div class="card-header-title">
                    <i class="fa-solid fa-id-badge"></i>
                </div>

                <div class="card-content">
                    <p>${idNum}</p>
                </div>

                <div class="card-header-title">
                    <i class="fa-solid fa-envelope"></i>
                </div>

                <div class="card-content">
                    <p>${email}</p>
                </div>

            </div>
        </div>

        <div class="column is-one-third">
            <div class="hero is-info is-small has-text-centered">
                <div class="hero-body">
                    <p class="title is-4">Employee Name</p>
                    <p class="subtitle is-4">Position</p>
                </div>
            </div>

            <div class="card">
                <div class="card-header-title">
                    <i class="fa-solid fa-id-badge"></i>
                </div>

                <div class="card-content">
                    <p></p>
                </div>

                <div class="card-header-title">
                    <i class="fa-solid fa-envelope"></i>
                </div>

                <div class="card-content">
                    <p></p>
                </div>

            </div>
        </div>

        <div class="column is-one-third">
            <div class="hero is-info is-small has-text-centered">
                <div class="hero-body">
                    <p class="title is-4">Employee Name</p>
                    <p class="subtitle is-4">Position</p>
                </div>
            </div>

            <div class="card">
                <div class="card-header-title">
                    <i class="fa-solid fa-id-badge"></i>
                </div>

                <div class="card-content">
                    <p></p>
                </div>

                <div class="card-header-title">
                    <i class="fa-solid fa-envelope"></i>
                </div>

                <div class="card-content">
                    <p></p>
                </div>

            </div>
        </div>

        <div class="column is-one-third">
            <div class="hero is-info is-small has-text-centered">
                <div class="hero-body">
                    <p class="title is-4">Employee Name</p>
                    <p class="subtitle is-4">Position</p>
                </div>
            </div>

            <div class="card">
                <div class="card-header-title">
                    <i class="fa-solid fa-id-badge"></i>
                </div>

                <div class="card-content">
                    <p></p>
                </div>

                <div class="card-header-title">
                    <i class="fa-solid fa-envelope"></i>
                </div>

                <div class="card-content">
                    <p></p>
                </div>

            </div>
        </div>

        <div class="column is-one-third">
            <div class="hero is-info is-small has-text-centered">
                <div class="hero-body">
                    <p class="title is-4">Employee Name</p>
                    <p class="subtitle is-4">Position</p>
                </div>
            </div>

            <div class="card">
                <div class="card-header-title">
                    <i class="fa-solid fa-id-badge"></i>
                </div>

                <div class="card-content">
                    <p></p>
                </div>

                <div class="card-header-title">
                    <i class="fa-solid fa-envelope"></i>
                </div>

                <div class="card-content">
                    <p></p>
                </div>

            </div>
        </div>
        
      </div>
    </section>
    
</body>
</html>`

const questions = [
    {
        type: "input",
        name: "",
        message: ""
    },

    {
        type: "input",
        name: "",
        message: ""
    },
];