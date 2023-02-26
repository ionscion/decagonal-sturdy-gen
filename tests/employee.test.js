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




