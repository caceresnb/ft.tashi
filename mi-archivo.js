
const recuperarLocal = (clave, valor) => { localStorage.getItem(clave, valor) };
recuperarLocal("carrito", JSON.parse(productos));

function Venta(producto, precio, cantidad) {
  this.producto = producto;
  this.precio  = precio;
  this.cantidad  = cantidad;
  this.subTotal = this.precio * this.cantidad
  this.suCompra = function(){ console.log("Usted selecciono "+ this.cantidad + "de" this.producto+ "total"+ this.subTotal)}
}
const venta1 = new Venta (12, "medialunas");
venta1.suCompra();









