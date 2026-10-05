class Producto {
    constructor(nombre, precio, descuento, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.descuento = descuento;
        this.imagen = imagen;
    }

    calcularPrecioFinal() {
        return this.precio - (this.precio * this.descuento / 100);
    }
}
    const catalogo = [
    new Producto("Laptop", 2500, 10, "laptop.jpg"),
    new Producto("Mouse", 80, 20, "mouse.jpg"),
    new Producto("Teclado", 150, 15, "teclado.jpg")
];

const contenedor = document.getElementById("contenedor-productos");

catalogo.forEach(function (producto) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p class="precio">Precio: S/ ${producto.precio}</p>
        <button class="btn-descuento">Aplicar Descuento</button>
    `;

    const boton = tarjeta.querySelector(".btn-descuento");
    const textoPrecio = tarjeta.querySelector(".precio");

    boton.addEventListener("click", function () {
        const precioFinal = producto.calcularPrecioFinal();
        textoPrecio.textContent = `Precio con descuento: S/ ${precioFinal.toFixed(2)}`;
    });

    contenedor.appendChild(tarjeta);
});