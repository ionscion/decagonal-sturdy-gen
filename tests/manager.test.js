const { Employee, Manager, Engineer, Intern } = require("../lib/class");

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