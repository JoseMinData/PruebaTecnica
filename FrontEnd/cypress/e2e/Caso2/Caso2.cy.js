/// <reference types="Cypress"/>

// Importar las paginas

import HomePage from "../../support/Pages/HomePage.js";
import ProductoPage from "../../support/Pages/ProductoPage.js";
import CarroPage from "../../support/Pages/CarroPage.js";

describe(`CP001 - Realizar una compra con login`, ()=> {

    before(()=> {
        cy.log(`Empiezan los test`);
    })

    after(()=> {
        cy.log(`Terminaron todos los test`);
    })

    beforeEach(()=> {
        cy.log(`Empezo el test`);
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit(`https://www.demoblaze.com`);
        cy.viewport(1440, 1000);
    })

    afterEach(()=> {
        cy.log(`Se termino el test`);
    })

    ///////////////////////////////////////////////////// TESTS /////////////////////////////////////////////////////
    // Primer test
    it(`CP001 - Realizar una compra con login`, ()=> {
        HomePage.login('tandard_user', 'secret_sauce');
        HomePage.seleccionarProducto("Samsung galaxy s6");
        ProductoPage.agregarAlCarrito();
        ProductoPage.goHome();
        HomePage.seleccionarProducto("Sony vaio i7");
        ProductoPage.agregarAlCarrito();
        ProductoPage.goCart();
        CarroPage.placeOrder("Jose Karlos Aguilar", "Argentina", "Buenos Aires", "4242 4242 424242", "Abril", "2025");
    })
    
})