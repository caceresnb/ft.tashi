/*EVENTO enviar compra*/
let carrito = document.getElementById("formulario");

carrito.addEventListener("submit", validarFormulario);

function validarFormulario(event){
    event.preventDefault();
    console.log("Formulario Enviado");    
}

let producto= document.getElementById("producto");

let cantidad= document.getElementById ("cantidad");

/* JSON & STORAGE */ 
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

guardarLocal("carrito", JSON.stringify(productos));

const recuperarLocal = (clave, valor) => { localStorage.getItem(clave, valor) };

recuperarLocal("carrito", JSON.parse(productos));

/* FUNCION Venta multiplicar por el precio y dar subtotal */
function Venta(producto, precio, cantidad) {
    this.producto = producto;
    this.precio  = precio;
    this.cantidad  = cantidad;
    this.subTotal = this.precio * this.cantidad
    this.suCompra = function(){ console.log("Usted selecciono "+ this.cantidad + "de" this.producto+ "total"+ this.subTotal)}
  }
  venta1.suCompra();

