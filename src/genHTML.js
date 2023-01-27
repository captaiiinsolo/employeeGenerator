// HTML page layout
const genHTML = (response) => {
// generate manager card
const genManager = (responseManager) => {
    return `
    <div class="column is-one-third">
        <div class="hero is-info is-small has-text-centered">
            <div class="hero-body">
                <p class="title is-4">${responseManager.name}</p>
                <p class="subtitle is-4">Manager</p>
            </div>
        </div>

    <div class="card">
        <div class="card-content">
            <p class="subtitle is-5"><i class="fa-solid fa-id-badge m-2 p-2"></i> <span>${responseManager.id}</span> </p>
            <p class="subtitle is-5"><i class="fa-solid fa-envelope m-2 p-2"></i> <span><a href="mailto:${responseManager.email}">${responseManager.email}</a></span> </p>
            <p class="subtitle is-5"><i class="fa-solid fa-phone m-2 p-2"></i> <span><a href="tel:${responseManager.office}">${responseManager.office}</a></span> </p>
        </div>
    </div>
</div>
`;
};

// generate engineer card
const genEngineer = (responseEngineer) => {
    return `
    <div class="column is-one-third">
    <div class="hero is-info is-small has-text-centered">
        <div class="hero-body">
            <p class="title is-4">${responseEngineer.name}</p>
            <p class="subtitle is-4">Engineer</p>
        </div>
    </div>

    <div class="card">
        <div class="card-content">
            <p class="subtitle is-5"><i class="fa-solid fa-id-badge m-2 p-2"></i> <span>${responseEngineer.id}</span> </p>
            <p class="subtitle is-5"><i class="fa-solid fa-envelope m-2 p-2"></i> <span><a href="mailto:${responseEngineer.email}">${responseEngineer.email}</a></span> </p>
            <p class="subtitle is-5"><i class="fa-brands fa-github m-2 p-2"></i> <span><a href="https://github.com/${responseEngineer.git}">${responseEngineer.git}</a></span> </p>
        </div>
    </div>
</div>
`;
};

// generate intern card
const genIntern = (responseIntern) => {
    return `
    <div class="column is-one-third">
    <div class="hero is-info is-small has-text-centered">
        <div class="hero-body">
            <p class="title is-4">${responseIntern.name}</p>
            <p class="subtitle is-4">Intern</p>
        </div>
    </div>

    <div class="card">
        <div class="card-content">
            <p class="subtitle is-5"><i class="fa-solid fa-id-badge m-2 p-2"></i> <span>${responseIntern.id}</span> </p>
            <p class="subtitle is-5"><i class="fa-solid fa-envelope m-2 p-2"></i> <span><a href="mailto:${responseIntern.email}">${responseIntern.email}</a></span> </p>
            <p class="subtitle is-5"><i class="fa-solid fa-school m-2 p-2"></i> <span>${responseIntern.school}</span> </p>
        </div>
    </div>
</div>
`;
};

const html = [];
html.push(
    response
        .filter((employee) => employee.getRole() === 'Manager')
        .map((manager) => genManager(manager))
);

html.push(
    response
        .filter((employee) => employee.getRole() === 'Engineer')
        .map((engineer) => genEngineer(engineer))
        .join('')
);

html.push(
    response
        .filter((employee) => employee.getRole() === 'Intern')
        .map((intern) => genIntern(intern))
        .join('')
    );

    return html.join('');

};



module.exports = (response) => {
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
            ${genHTML(response)}
        </div>
    </section>
    
</body>
</html>
`;

};