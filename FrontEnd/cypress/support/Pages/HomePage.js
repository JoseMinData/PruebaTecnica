class HomePage { 

    // Mapeo de los objetos
    constructor(){
        this.prodcuto = `.hrefch`;
        this.btnLogin = `#login2`;
        this.inputUsername = `#loginusername`;
        this.inputPassword = `#loginpassword`;
        this.btnConfirmLogin = `#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary`;
        this.textWelcome = `#nameofuser`;

    }

    // Metodo para seleccionar producto, se tiene que pasar el nombre del producto que se quiere seleccionar 
    seleccionarProducto = (nombreProducto) => {
        cy.get(this.prodcuto).contains(nombreProducto).click();
    }

     // Metodo para hacer login
     login = (username, password) => {
        cy.get(this.btnLogin).click();
        cy.get(this.inputUsername).should("be.visible").type("s").type(username);
        cy.get(this.inputPassword).should("be.visible").type(password);
        cy.get(this.btnConfirmLogin).click();
        cy.get(this.textWelcome).should('include.text', 'Welcome');
     }
}

export default new HomePage()