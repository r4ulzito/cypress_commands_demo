Cypress.Commands.add("buscaTermo", (termo) => {
    cy.get("#search").should("be.visible").clear().type(termo);
    cy.contains("Submit").should("be.visible").click();
});
