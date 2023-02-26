const { Employee, Manager, Engineer, Intern } = require("../lib/class");

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
  