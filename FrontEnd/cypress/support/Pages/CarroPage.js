class ProductoPage { 

    // Mapeo de los objetos
    constructor(){
        this.btnPlaceOrder = `.col-lg-1 > .btn`;
        this.inputName = `#name`;
        this.inputCountry= `#country`;
        this.inputCity = `#city`;
        this.inputCard = `#card`;
        this.inputMonth = `#month`;
        this.inputYear = `#year`;
        this.btnPurchase = `#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary`;
        this.textPurchase = `.sweet-alert > h2`;
        this.btnOK = `.confirm`;
    }

    // Metodo para ejecutar la orden de compra, se tienen que pasar los datos del formulario
    placeOrder = (name, country, city, card, month, year) => {
        cy.get(this.btnPlaceOrder).click();
        cy.wait(1000);
        cy.get(this.inputName).should("be.visible").type(name);
        cy.get(this.inputCountry).should("be.visible").type(country);
        cy.get(this.inputCity).should("be.visible").type(city);
        cy.get(this.inputCard).should("be.visible").type(card)
        cy.get(this.inputMonth).should("be.visible").type(month);
        cy.get(this.inputYear).should("be.visible").type(year);
        cy.get(this.btnPurchase).click();
        cy.get(this.textPurchase).should('have.text', 'Thank you for your purchase!');
        cy.get(this.btnOK).should('have.text', 'OK');
        cy.get(this.btnOK).click();
    }

}

export default new ProductoPage()