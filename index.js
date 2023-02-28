/**
 * Build out classes - done
 * Need to build out inquirer prompts - done
 * similar to last homework, collect answers for each class invoked - done
 * Compile all the answers to template literal for the html- done
 * CSS stylesheet, may want to build this out ahead of time
 * write HTML to file, may want to use append in case more classes are added later
 */
const inquirer = require("inquirer");
const fs = require("fs");
const { Employee, Manager, Engineer, Intern } = require("./lib/class");
const generateHtml = require("./src/generateHtml");
const generateNewCard = require("./src/generateHtml");

async function initInquirer() {
    const team = [];
  
    const { name, id, email, officeNumber } = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the team manager's employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the team manager's email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number?",
      },
    ]);
  
    const manager = new Manager(name, id, email, officeNumber);
    team.push(manager);
  
    let done = false;
  
    while (!done) {
      const { option } = await inquirer.prompt([
        {
          type: "list",
          name: "option",
          message: "What would you like to do?",
          choices: [
            { name: "Add an engineer", value: "engineer" },
            { name: "Add an intern", value: "intern" },
            { name: "Finish building my team", value: "finish" },
          ],
        },
      ]);
  
      switch (option) {
        case "engineer":
          const { engineerName, engId, engEmail, github } = await inquirer.prompt([
            {
              type: "input",
              name: "name",
              message: "What is the engineer's name?",
            },
            {
              type: "input",
              name: "id",
              message: "What is the engineer's employee ID?",
            },
            {
              type: "input",
              name: "email",
              message: "What is the engineer's email address?",
            },
            {
              type: "input",
              name: "github",
              message: "What is the engineer's GitHub username?",
            },
          ]);
          const engineer = new Engineer(engineerName, engId, engEmail, github);
          console.log(`engineer instantiated ${engineer}`);
          team.push(engineer);
          break;
        case "intern":
          const { name, id, email, school } = await inquirer.prompt([
            {
              type: "input",
              name: "name",
              message: "What is the intern's name?",
            },
            {
              type: "input",
              name: "id",
              message: "What is the intern's employee ID?",
            },
            {
              type: "input",
              name: "email",
              message: "What is the intern's email address?",
            },
            {
              type: "input",
              name: "school",
              message: "What school does the intern attend?",
            },
          ]);
          const intern = new Intern(name, id, email, school);
          team.push(intern);
          break;
        case "finish":
          done = true;
          break;
      }
    }
  
    const html = generateHtml.genHtml(team);
    writeToFile(html);
  }
  

function writeToFile(data) {
    fs.readFile("dist/index.html","utf8", (err, existingContents) => {
        if (err) {
          // if the file does not exist, just write the data as a new file
          fs.writeFile("dist/index.html", data, (err) => {
            if (err) {
              console.error(err);
            } else {
              console.log("index.html created successfully!");
            }
          });
        } else {
            const newCardHtml = generateNewCard.generateNewCard(teamMember, teamMember.getRole());
            const updatedContents = existingContents.replace("<!-- CARD_PLACEHOLDER -->", newCardHtml);
            fs.writeFileSync("dist/index.html", updatedContents);
        }
});
}

initInquirer();
