/**
 * Build out classes - done
 * Need to build out inquirer prompts - done
 * similar to last homework, collect answers for each class invoked - done
 * Compile all the answers to template literal for the html
 * CSS stylesheet, may want to build this out ahead of time
 * write HTML to file, may want to use append in case more classes are added later
 */
const inquirer = require("inquirer");
const fs = require("fs");
const { Employee, Manager, Engineer, Intern } = require("./lib/class");

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
          break;
        case "Manager":
          const manager = new Manager(name, id, email);
          console.log(`Manager class instantiated!`);
          break;
        case "Engineer":
          const engineer = new Engineer(name, id, email);
          console.log(`Engineer class instantiated!`);
          break;
        case "Intern":
          const intern = new Intern(name, id, email);
          console.log(`Intern class instantiated!`);
          break;
      }
    });
}

function writeToFile(data) {
  fs.writeFile(
    "dist/index.html",
    data,
    (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("index.html created successfully!");
      }
    }
  );
}

initInquirer();
