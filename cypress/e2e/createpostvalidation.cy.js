const testingEmail = "mycypresstestemail@noroff.no";
const testingPass = "12345678";

const testTitle = "Testing Cypress";
const testBody = "Testing Cypress";
const testTags = "testing cypress";
const testMedia = "Testing Cypress";

describe("Create Post", () => {
  it("login", () => {
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
    cy.get("footer a").contains("New Post").wait(500).click();
    cy.get("#postTitle").should("exist").type(testTitle, { delay: 50 });
    cy.get("#postBody").should("exist").type(testBody, { delay: 50 });
    cy.get("#postTags").should("exist").type(testTags, { delay: 50 });
    cy.get("#postMedia").should("exist").type(testMedia, { delay: 50 });
    cy.get("#postForm div button [type='submit']")
      .should("exist")
      .click({ force: true });
  });
});
