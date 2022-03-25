describe("should order checkout successfully", () =>  {
    before( () => {
        cy.visit("http://localhost:3000");
    });

		it("login", () => {
        cy.get('[name="user"]').type("admin").should('have.value', "admin");
        cy.get('[name="password"]').type("123").should('have.value', "123");
        cy.get("button").contains("Войти").click();
    });

		it("add company", () => {
      cy.get('[name="company"]').type("Good company");
      cy.get('[name="address"]').type("Vologda");
      cy.get('[name="email"]').type("test@test.ru");
      cy.get('[name="phone"]').type("12345678");
      cy.get("button").contains("добавить").click();
    });

		it("change red color to blue", () => {
        cy.get("button").contains("Сменить на синюю тему").click();
    });

		it("change blue color to red", () => {
        cy.get("button").contains("Сменить на красную тему").click();
    });

		it("click on card", () => {
				cy.get('li:first').click()
				cy.contains('Vologda').click()
		})

		it("add company", () => {
      cy.get('[name="company"]').type("Nice company");
      cy.get('[name="address"]').type("London");
      cy.get('[name="email"]').type("test@test.com");
      cy.get('[name="phone"]').type("87654321");
      cy.get("button").contains("добавить").click();
    });

		it("click on card", () => {
				cy.get('li:first').rightclick()
				cy.contains('London').click()
		})

		it("test router", () => {
        cy.get("a").contains("Ещё одна страница").click();
    });

		it("test router", () => {
        cy.get("a").contains("Нажми на меня чтобы вернуться на страницу с карточками").click();
    });

		it("logout", () => {
        cy.get("button").contains("выйти").click();
    });
});
