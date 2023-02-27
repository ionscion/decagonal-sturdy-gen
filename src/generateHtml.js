function genHtml(teamMember, role) {
  const { name, id, email } = teamMember;
  return `<!DOCTYPE html>
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
            <div class="col mb-4">
              <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h4 class="card-title">${name}</h4>
                  <h5 class="card-title">${role}</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">${id}</li>
                  <li class="list-group-item">${email}</li>
                </ul>
              </div>
            </div>
      
            <!-- CARD_PLACEHOLDER -->
        
          </div>
        </div>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>
    `;
}

function generateNewCard(teamMember, role) {
  const { name, id, email } = teamMember;
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
            </ul>
        </div>
    </div>
      
  <!-- CARD_PLACEHOLDER -->
  `;
}
module.exports = {
  genHtml: genHtml,
  generateNewCard: generateNewCard,
};
