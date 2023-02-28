
function genHtml(team) {
    let html = `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>My Team Overview</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
            crossorigin="anonymous"
          />
        </head>
        <body>
          <div class="jumbotron jumbotron-fluid bg-info">
            <div class="container text-center ">
              <h1 class="display-4">My Team</h1>
            </div>
          </div>
      
          <div class="container">
            <div class="row row-cols-1 row-cols-md-3 justify-content-center">
    `;
  
    for (const teamMember of team) {
      const { name, id, email, officeNumber } = teamMember;
      const role = teamMember.getRole();
      const additionalInfo = additionalInformation(teamMember, role);
  
      html += `
        <div class="col mb-4">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h4 class="card-title">${name}</h4>
              <h5 class="card-title">${role}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${id}</li>
              <li class="list-group-item">${email}</li>
              ${
                additionalInfo
                  ? `<li class="list-group-item">${additionalInfo}</li>`
                  : ""
              }
            </ul>
          </div>
        </div>
      `;
    }
  
    html += `</div></div></body></html>`;
    return html;
  }
  

function generateNewCard(teamMember, role) {
  const { name, id, email } = teamMember;
  const additionalInfo = additionalInformation(teamMember, role);
  return `
  <div class="col mb-4">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h4 class="card-title">${name}</h4>
                <h5 class="card-title">${role}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${id}</li>
                <li class="list-group-item">${email}</li>
                ${
                  additionalInfo
                    ? `<li class="list-group-item">${additionalInfo}</li>`
                    : ""
                }
            </ul>
        </div>
    </div>
      
  <!-- CARD_PLACEHOLDER -->
  `;
}

function additionalInformation(teamMember, role) {
  let additionalInfo = "";
  switch (role) {
    case "Manager":
      additionalInfo = `Office Number: ${teamMember.officeNumber}`;
      break;
    case "Engineer":
      additionalInfo = `GitHub: <a href="https://github.com/${teamMember.github}" target="_blank">${teamMember.github}</a>`;
      break;
    case "Intern":
      additionalInfo = `School: ${teamMember.getSchool()}`;
      break;
    case "Employee":
      additionalInfo = "";
      break;
    default:
      break;
  }
  return additionalInfo;
}

module.exports = {
  genHtml: genHtml,
  generateNewCard: generateNewCard,
};
