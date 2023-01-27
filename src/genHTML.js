const Employee = require("../lib/Employee");

// HTML page layout
const genHTML = (response) => {
    const genTeam = (myTeam) => {
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
                ${myTeam}
            </div>
        </section>
        
    </body>
    </html>
    `
    }


// generate manager card
const genManager = (responseManager) => {
    return `
    <div class="column is-one-third">
        <div class="hero is-info is-small has-text-centered">
            <div class="hero-body">
                <p class="title is-4">${responseManager.managerName}</p>
                <p class="subtitle is-4">Manager</p>
            </div>
        </div>

    <div class="card">
        <div class="card-content">
            <p class="subtitle is-5"><i class="fa-solid fa-id-badge m-2 p-2"></i> <span>${responseManager.managerID}</span> </p>
            <p class="subtitle is-5"><i class="fa-solid fa- m-2 p-2"></i> <span>${responseManager.managerEmail}</span> </p>
            <p class="subtitle is-5"><i class="fa-solid fa- m-2 p-2"></i> <span>${responseManager.managerOffice}</span> </p>
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
            <p class="title is-4">${responseEngineer.engineerName}</p>
            <p class="subtitle is-4">Engineer</p>
        </div>
    </div>

    <div class="card">
        <div class="card-content">
            <p class="subtitle is-5"><i class="fa-solid fa-id-badge m-2 p-2"></i> <span>${responseEngineer.engineerID}</span> </p>
            <p class="subtitle is-5"><i class="fa-solid fa- m-2 p-2"></i> <span>${responseEngineer.engineerEmail}</span> </p>
            <p class="subtitle is-5"><i class="fa-solid fa- m-2 p-2"></i> <span>${responseEngineer.engineerGit}</span> </p>
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
            <p class="title is-4">${responseIntern.internName}</p>
            <p class="subtitle is-4">Intern</p>
        </div>
    </div>

    <div class="card">
        <div class="card-content">
            <p class="subtitle is-5"><i class="fa-solid fa-id-badge m-2 p-2"></i> <span>${responseIntern.internID}</span> </p>
            <p class="subtitle is-5"><i class="fa-solid fa-envelope m-2 p-2"></i> <span>${responseIntern.internEmail}</span> </p>
            <p class="subtitle is-5"><i class="fa-solid fa-envelope m-2 p-2"></i> <span>${responseIntern.internEDU}</span> </p>
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

// module.exports = () => {
//     return `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="../node_modules/bulma/css/bulma.css">
//     <script src="https://kit.fontawesome.com/6fdd9419ec.js" crossorigin="anonymous"></script>
//     <title>My Team</title>
// </head>
// <body>
//     <section>
//         <header class="hero is-danger has-text-centered">
//             <div class="hero-body">
//                 <p class="title">My Team</p>
//             </div>
//         </header>
//     </section>

//     <section>
//         <div class="columns is-multiline is-centered m-2 p-4">
//             ${genHTML(myTeam)}
//         </div>
//     </section>
    
// </body>
// </html>
// `;

// };