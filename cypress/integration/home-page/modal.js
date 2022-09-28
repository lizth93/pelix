/// <reference types="Cypress" />
require("cypress-xpath");

describe("Test Home page, validating modals", () => {
  it("validate modal of the top-rated-section movies", () => {
    cy.visit("https://pelix-luze.netlify.app");
    cy.get(
      "div:nth-of-type(1) > .container-top-rated > .section-top-rated > div:nth-of-type(1) > .static-detail > .collection__title > .icons > .more-icon"
    ).click();
    cy.url().should("include", "collections/movies");
    cy.get(".videos-related").contains("Videos Related:");

    cy.get(".modal-footer > .btn").contains("Close").click();
  });

  it("validate modal of the top-rated-section tv", () => {
    cy.visit("https://pelix-luze.netlify.app");

    cy.get(
      ":nth-child(3) > .container-top-rated > .section-top-rated > :nth-child(1) > .sc-dkzDqf > .collection__title > .icons > .more-icon"
    ).click();
    cy.url().should("include", "collections/tv");
    cy.get(".videos-related").contains("Videos Related:");

    cy.get(".modal-footer > .btn").contains("Close").click();
  });

  it("validate modal of the latest Advances streaming", () => {
    cy.visit("https://pelix-luze.netlify.app");

    cy.get(".btn-group")
      .contains("In Streaming")
      .click({ force: true })
      .should("have.class", "active")
      .then(() => {
        cy.get(".section-films .film:nth-of-type(1) .static-detail").click({
          force: true,
        });

        cy.url().should("include", "collections/play/streaming");
        cy.get(".btn-close").click({ force: true });
      });
  });

  it("validate modal of the latest Advances Tv", () => {
    cy.visit("https://pelix-luze.netlify.app");

    cy.get(".btn-group")
      .contains("In Tv")
      .click({ force: true })
      .should("have.class", "active")
      .then(() => {
        cy.get(".section-films .film:nth-of-type(1) .static-detail").click({
          force: true,
        });

        // cy.url().should("include", "collections/play/tv");
        cy.get(".btn-close").click({ force: true });
      });
    cy.visit("https://pelix-luze.netlify.app");
  });

  it("validate modal of the latest Advances theaters", () => {
    cy.visit("https://pelix-luze.netlify.app");

    cy.get(".btn-group")
      .contains("In theaters")
      .click({ force: false })
      .should("have.class", "active");

    cy.get(".section-films .film:nth-of-type(1) .static-detail").click({
      force: true,
    });

    // cy.url().should("include", "play/movies");
    cy.get(".btn-close").click({ force: true });
  });
});
