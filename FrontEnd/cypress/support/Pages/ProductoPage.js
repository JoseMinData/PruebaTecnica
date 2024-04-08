class ProductoPage { 

    // Mapeo de los objetos
    constructor(){
        this.btnAddToCart = `.col-sm-12 > .btn`;
        this.btnHome = `.active > .nav-link`;
        this.btnCart = `#cartur`;
    }

    // Metodo para agregar un producto al carrito
    agregarAlCarrito= () => {
        cy.get(this.btnAddToCart).click();

    }

    // Metodo para ir a la Home
    goHome = () => {
        cy.get(this.btnHome).click();
    }

    // Metodo para ir al carrito
    goCart = () => {
        cy.get(this.btnCart).click();
    }
}

export default new ProductoPage()