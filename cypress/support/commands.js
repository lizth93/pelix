// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

Cypress.Commands.add("latestAdvancesCategory", (category) => {
  cy.get(".btn-group")
    .contains(category)
    .click({ force: false })
    .should("have.class", "active");
});

Cypress.Commands.add("validateModalTopRated", ($selector, category) => {
  cy.get($selector).click();
  cy.url().should("include", category);
  cy.get(".videos-related").contains("Videos Related:");

  cy.get(".modal-footer > .btn").contains("Close").click();
});
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "./commands";
Cypress.Server.defaults({
  ignore: (xhr) => bool,
});
