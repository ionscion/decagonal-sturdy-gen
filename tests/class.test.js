const { Employee, Manager, Engineer, Intern } = require("../lib/class");
describe("Employee", () => {
  test("getName method returns the correct name", () => {
    const employee = new Employee("Ben Sboto", 12345, "ben@test.com");
    expect(employee.getName()).toBe("Ben Sboto");
  });
  test("getId method returns the correct ID", () => {
    const employee = new Employee("Ben Sboto", 12345, "ben@test.com");
    expect(employee.getId()).toBe(12345);
  });
  test("getEmail method returns the correct email", () => {
    const employee = new Employee("Ben Sboto", 12345, "ben@test.com");
    expect(employee.getEmail()).toBe("ben@test.com");
  });
  test("getRole method returns the correct role", () => {
    const employee = new Employee("Ben Sboto", 12345, "ben@test.com");
    expect(employee.getRole()).toBe("Employee");
  });
});

describe("Manager", () => {
  test("getName method returns the correct name", () => {
    const manager = new Manager("Benjamin Sboto", 6789, "ben@test.com", 410);
    expect(manager.getName()).toBe("Benjamin Sboto");
  });
  test("getId method returns the correct ID", () => {
    const manager = new Manager("Benjamin Sboto", 6789, "ben@test.com", 410);
    expect(manager.getId()).toBe(6789);
  });
  test("getEmail method returns the correct email", () => {
    const manager = new Manager("Benjamin Sboto", 6789, "ben@test.com", 410);
    expect(manager.getEmail()).toBe("ben@test.com");
  });
  test("getOfficeNumber method returns the correct office number", () => {
    const manager = new Manager("Benjamin Sboto", 6789, "ben@test.com", 410);
    expect(manager.getOfficeNumber()).toBe(410);
  });
  test("getRole method returns the correct role", () => {
    const manager = new Manager("Benjamin Sboto", 6789, "ben@test.com", 410);
    expect(manager.getRole()).toBe("Manager");
  });
});

describe("Engineer", () => {
  test("getName method returns the correct name", () => {
    const engineer = new Engineer(
      "Benjamin Sboto",
      9967,
      "ben@test.com",
      "ionscion"
    );
    expect(engineer.getName()).toBe("Benjamin Sboto");
  });
  test("getName id returns the correct id", () => {
    const engineer = new Engineer(
      "Benjamin Sboto",
      9967,
      "ben@test.com",
      "ionscion"
    );
    expect(engineer.getId()).toBe(9967);
  });
  test("getEmail method returns the correct email", () => {
    const engineer = new Engineer(
      "Benjamin Sboto",
      9967,
      "ben@test.com",
      "ionscion"
    );
    expect(engineer.getEmail()).toBe("ben@test.com");
  });
  test("getGithub method returns the correct username", () => {
    const engineer = new Engineer(
      "Benjamin Sboto",
      9967,
      "ben@test.com",
      "ionscion"
    );
    expect(engineer.getGithub()).toBe("ionscion");
  });
  test("getRole method returns the correct role", () => {
    const engineer = new Engineer(
      "Benjamin Sboto",
      9967,
      "ben@test.com",
      "ionscion"
    );
    expect(engineer.getRole()).toBe("Engineer");
  });
});

describe("Intern", () => {
  test("getName method returns the correct name", () => {
    const intern = new Intern("Ben Sboto", 33, "ben@test.com", "DU");
    expect(intern.getName()).toBe("Ben Sboto");
  });
  test("getId method returns the correct id", () => {
    const intern = new Intern("Ben Sboto", 33, "ben@test.com", "DU");
    expect(intern.getId()).toBe(33);
  });
  test("getEmail method returns the correct email", () => {
    const intern = new Intern("Ben Sboto", 33, "ben@test.com", "DU");
    expect(intern.getEmail()).toBe("ben@test.com");
  });
  test("getSchool method returns the correct school", () => {
    const intern = new Intern("Ben Sboto", 33, "ben@test.com", "DU");
    expect(intern.getSchool()).toBe("DU");
  });
  test("getRole method returns the correct role", () => {
    const intern = new Intern("Ben Sboto", 33, "ben@test.com", "DU");
    expect(intern.getRole()).toBe("Intern");
  });
});
