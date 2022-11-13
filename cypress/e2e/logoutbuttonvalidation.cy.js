const testingEmail = "mycypresstestemail@noroff.no";
const testingPass = "12345678";

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.get("#registerModal button")
      .contains("Login")
      .should("be.visible")
      .click()
      .wait(500);
    cy.get("#registerModal button")
      .contains("Close")
      .should("be.visible")
      .click()
      .wait(500);
    cy.get("#loginForm input[type='email']")
      .should("exist")
      .type(testingEmail, { delay: 50 });
    cy.get("#loginForm input[type='password']")
      .should("exist")
      .type(testingPass, { delay: 50 });
    cy.get("#loginModal button")
      .contains("Login")
      .should("be.visible")
      .click()
      .wait(2000);
  });

  it("is Logged in", () => {});
});

describe("Logout", () => {
  beforeEach(() => {
    cy.get("header button")
      .contains("Logout")
      .click()
      .should(() => {
        expect(localStorage.getItem("token")).to.be.null;
      });
  });

  it("Logout successful", () => {});
});
