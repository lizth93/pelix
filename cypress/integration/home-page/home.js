/// <reference types="Cypress" />
require("cypress-xpath");

describe("Test Home page, validating the link", () => {
  it("the link of this page need to include -collections", () => {
    cy.visit("https://pelix-luze.netlify.app");
    cy.url().should("include", "collections");
  });

  it("click on the movies-section on the header", () => {
    cy.get('[href="/movies/page/1"]').click();
    cy.url().should("include", "movies");
  });

  it("click on the tv-section on the header", () => {
    cy.get('[href="/tv/page/1"]').click();
    cy.url().should("include", "tv");
  });

  it("validate buttons in latest advances In streaming active", () => {
    cy.visit("https://pelix-luze.netlify.app");
    cy.get(".btn-group")
      .contains("In Streaming")
      .click({ force: true })
      .should("have.class", "active");

    cy.get(".btn-group").contains("In Tv").not("have.class", "active");
    cy.get(".btn-group").contains("In theaters").not("have.class", "active");
  });

  it("validate buttons in latest advances In Tv active", () => {
    cy.visit("https://pelix-luze.netlify.app");
    cy.get(".btn-group")
      .contains("In Tv")
      .click({ force: true })
      .should("have.class", "active");

    cy.get(".btn-group").contains("In Streaming").not("have.class", "active");
    cy.get(".btn-group").contains("In theaters").not("have.class", "active");
  });

  it("validate buttons in latest advances In Tv active", () => {
    cy.visit("https://pelix-luze.netlify.app");
    cy.get(".btn-group")
      .contains("In theaters")
      .click({ force: true })
      .should("have.class", "active");

    cy.get(".btn-group").contains("In Streaming").not("have.class", "active");
    cy.get(".btn-group").contains("In Tv").not("have.class", "active");
  });
});
