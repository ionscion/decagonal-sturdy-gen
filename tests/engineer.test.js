const { Employee, Manager, Engineer, Intern } = require("../lib/class");

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
  