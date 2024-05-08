describe("Ao acessar a página inicial", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Deve exibir lista de conteudos com títulos referentes ao termo digitado", () => {
        const novoTermo = "Cypress";

        cy.buscaTermo(novoTermo);

        cy.get(".item").contains(novoTermo).should("be.visible");
    });

    it("Deve criar botão de busca rápida com o ultimo termo pesquisado ao buscar um novo termo", () => {
        const antigoTermo = "React";
        const novoTermo = "Test";

        cy.buscaTermo(novoTermo);

        cy.get(".last-searches").within(() => {
            cy.get("button")
                .contains(antigoTermo)
                .should("be.visible")
                .and("be.enabled");
        });
    });
});
