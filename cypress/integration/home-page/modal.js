/// <reference types="Cypress" />
require("cypress-xpath");

describe("Test Home page, validating modals", () => {
  beforeEach(() => {
    cy.visit("https://pelix-luze.netlify.app");
  });
  it("validate modal of the top-rated-section movies", () => {
    const selector =
      "div:nth-of-type(1) > .container-top-rated > .section-top-rated > div:nth-of-type(1) > .static-detail > .collection__title > .icons > .more-icon";
    cy.validateModalTopRated(selector, "collections/movies");
  });

  it("validate modal of the top-rated-section tv", () => {
    const selector =
      ":nth-child(3) > .container-top-rated > .section-top-rated > :nth-child(1) > .sc-dkzDqf > .collection__title > .icons > .more-icon";
    cy.validateModalTopRated(selector, "collections/tv");
  });

  it("validate modal of the latest Advances streaming", () => {
    const selector = ".section-films .film:nth-of-type(1) .static-detail";
    cy.latestAdvancesCategory(
      "In Streaming",
      selector,
      "collections/play/streaming"
    );
  });

  it("validate modal of the latest Advances Tv", () => {
    const selector = ".section-films .film:nth-of-type(1) .static-detail";
    cy.latestAdvancesCategory("In Tv", selector, "collections/play/tv");
    cy.visit("https://pelix-luze.netlify.app");
  });

  it("validate modal of the latest Advances theaters", () => {
    const selector = ".section-films .film:nth-of-type(1) .static-detail";
    cy.latestAdvancesCategory(
      "In theaters",
      selector,
      "collections/play/movies"
    );
  });
});
