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

function initInquirer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team member's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is team member's employee id number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is team member's email address?",
      },
      {
        type: "list",
        name: "role",
        message: "What is team member's role at the company?",
        choices: ["Employee", "Manager", "Engineer", "Intern"],
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        when: (answers) => answers.role === "Manager",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
        when: (answers) => answers.role === "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school name?",
        when: (answers) => answers.role === "Intern",
      },
    ])
    .then((answers) => {
      const { name, id, email, role } = answers;
      console.log(answers);

      switch (role) {
        case "Employee":
          const employee = new Employee(name, id, email);
          console.log(`Employee class instantiated!`);
          const employeeContents = generateHtml.genHtml(
            employee,
            employee.getRole()
          );
          writeToFile(employee, employeeContents);
          break;
        case "Manager":
          const manager = new Manager(name, id, email);
          console.log(`Manager class instantiated!`);
          const managerHtml = generateHtml.genHtml(manager, manager.getRole());
          writeToFile(manager, managerHtml);
          break;
        case "Engineer":
          const engineer = new Engineer(name, id, email);
          console.log(`Engineer class instantiated!`);
          const engineerHtml = generateHtml.genHtml(
            engineer,
            engineer.getRole()
          );
          writeToFile(engineer, engineerHtml);
          break;
        case "Intern":
          const intern = new Intern(name, id, email);
          console.log(`Intern class instantiated!`);
          const internHtml = generateHtml.genHtml(intern, intern.getRole());
          writeToFile(intern, internHtml);
          break;
      }
    });
}

function writeToFile(teamMember, data) {
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
