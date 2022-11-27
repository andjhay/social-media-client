const testingEmail = "mycypresstestemail@noroff.no";
const testingPass = "12345678";

const wrongEmail = "mycypresstestemail@gmail.no";
const wrongPass = "12345678";

describe("Test with wrong Authentication", () => {
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
      .type(wrongEmail, { delay: 50 });
    cy.get("#loginForm input[type='password']")
      .should("exist")
      .type(wrongPass, { delay: 50 });
    cy.get("#loginModal button")
      .contains("Login")
      .should("be.visible")
      .click()
      .wait(500);
  });

  it("Does not login", () => {
    expect(localStorage.getItem("token")).to.be.null;
  });
});

describe("Test with correct Authentication", () => {
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

  it("Can login", () => {
    expect(localStorage.getItem("token")).to.not.be.null;
  });
});
