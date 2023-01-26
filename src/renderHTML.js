const renderHTML = (myTeam) => {
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
            </div>
        </section>
        
    </body>
    </html>`
}

const genManager = (managerInfo) => {
    return `
    <div class="column is-one-third">
        <div class="hero is-info is-small has-text-centered">
            <div class="hero-body">
                <p class="title is-4">Kyrie Santos</p>
                <p class="subtitle is-4">Manager</p>
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                <p class="subtitle is-5"><i class="fa-solid fa-id-badge m-2 p-2"></i> <span>001</span> </p>
                <p class="subtitle is-5"><i class="fa-solid fa-envelope m-2 p-2"></i> <span></span> </p>
            </div>
        </div>
    </div>`
}


const genEngineer = (engineerInfo) => {
    return `
    <div class="column is-one-third">
    <div class="hero is-info is-small has-text-centered">
        <div class="hero-body">
            <p class="title is-4">Solomon Santos</p>
            <p class="subtitle is-4">Engineer</p>
        </div>
    </div>

    <div class="card">
        <div class="card-content">
            <p class="subtitle is-5"><i class="fa-solid fa-id-badge m-2 p-2"></i> <span>002</span> </p>
            <p class="subtitle is-5"><i class="fa-solid fa-envelope m-2 p-2"></i> <span></span> </p>
        </div>
    </div>
</div>`
}


const genIntern = (internInfo) => {
    return `
    <div class="column is-one-third">
    <div class="hero is-info is-small has-text-centered">
        <div class="hero-body">
            <p class="title is-4">Sabrina Brown</p>
            <p class="subtitle is-4">Intern</p>
        </div>
    </div>

    <div class="card">
        <div class="card-content">
            <p class="subtitle is-5"><i class="fa-solid fa-id-badge m-2 p-2"></i> <span>003</span> </p>
            <p class="subtitle is-5"><i class="fa-solid fa-envelope m-2 p-2"></i> <span></span> </p>
        </div>
    </div>
</div>`
}