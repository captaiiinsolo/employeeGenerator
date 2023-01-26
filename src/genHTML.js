// HTML page layout
const genHTML = (response) => {
    return `
    <!DOCTYPE html>
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
                ${response}
            </div>
        </section>
        
    </body>
    </html>`
}

// generate manager card
const genManager = (response) => {
    return `
    <div class="column is-one-third">
        <div class="hero is-info is-small has-text-centered">
            <div class="hero-body">
                <p class="title is-4">${response.managerName}</p>
                <p class="subtitle is-4">Manager</p>
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                <p class="subtitle is-5"><i class="fa-solid fa-id-badge m-2 p-2"></i> <span>${response.managerID}</span> </p>
                <p class="subtitle is-5"><i class="fa-solid fa- m-2 p-2"></i> <span>${response.managerEmail}</span> </p>
                <p class="subtitle is-5"><i class="fa-solid fa- m-2 p-2"></i> <span>${response.managerOffice}</span> </p>
            </div>
        </div>
    </div>`
}

// generate engineer card
const genEngineer = (response) => {
    return `
    <div class="column is-one-third">
    <div class="hero is-info is-small has-text-centered">
        <div class="hero-body">
            <p class="title is-4">${response.engineerName}</p>
            <p class="subtitle is-4">Engineer</p>
        </div>
    </div>

    <div class="card">
        <div class="card-content">
            <p class="subtitle is-5"><i class="fa-solid fa-id-badge m-2 p-2"></i> <span>${response.engineerID}</span> </p>
            <p class="subtitle is-5"><i class="fa-solid fa- m-2 p-2"></i> <span>${response.engineerEmail}</span> </p>
            <p class="subtitle is-5"><i class="fa-solid fa- m-2 p-2"></i> <span>${response.engineerGit}</span> </p>
        </div>
    </div>
</div>`
}

// generate intern card
const genIntern = (response) => {
    return `
    <div class="column is-one-third">
    <div class="hero is-info is-small has-text-centered">
        <div class="hero-body">
            <p class="title is-4">${response.internName}</p>
            <p class="subtitle is-4">Intern</p>
        </div>
    </div>

    <div class="card">
        <div class="card-content">
            <p class="subtitle is-5"><i class="fa-solid fa-id-badge m-2 p-2"></i> <span>${response.internID}</span> </p>
            <p class="subtitle is-5"><i class="fa-solid fa-envelope m-2 p-2"></i> <span>${response.internEmail}</span> </p>
            <p class="subtitle is-5"><i class="fa-solid fa-envelope m-2 p-2"></i> <span>${response.internEDU}</span> </p>
        </div>
    </div>
</div>`
}