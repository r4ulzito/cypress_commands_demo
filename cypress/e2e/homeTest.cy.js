describe("Ao acessar a página inicial", () => {
    it("Deve exibir lista de conteudos com títulos referentes ao termo digitado", () => {
        const novoTermo = "Cypress";

        cy.visit("https://wlsf82-hacker-stories.web.app/");

        cy.get("#search").should("be.visible").clear().type(novoTermo);
        cy.contains("Submit").should("be.visible").click();

        cy.get(".item").contains(novoTermo).should("be.visible");
    });

    it("Deve criar botão de busca rápida com o ultimo termo pesquisado ao buscar um novo termo", () => {
        const antigoTermo = "React";
        const novoTermo = "Test";

        cy.visit("https://wlsf82-hacker-stories.web.app/");

        cy.get("#search").should("be.visible").clear().type(novoTermo);
        cy.contains("Submit").should("be.visible").click();

        cy.get(".last-searches").within(() => {
            cy.get("button")
                .contains(antigoTermo)
                .should("be.visible")
                .and("be.enabled");
        });
    });
});
