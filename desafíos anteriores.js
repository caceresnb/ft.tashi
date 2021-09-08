const subTotal = precioUnitario * cantidad;

//primeros desafios//
function cotizar() {
  let entrada   = prompt("Ingresa producto a cotizar");
      switch (entrada) {
          case "medialunas":
            alert("la docena $1200");
            break;
          case "pain au chocolat":
          case "croissant":
            alert("6 unidades $1440");
            break;
          case "alfajor":
            alert("6 unidades $1500");
            break;
          case "pan de masa madre":
            alert("la unidad $350");
            break;       
          default:
            alert("Lo lamentamos, por el momento no disponemos de " + entrada + "");
        }
  }
cotizar();
//desafio Objetos//
let entradaProducto   = prompt("Ingresa producto por favor");
let entradaCantidad   = prompt("Ingresa cantidad por favor");
class Venta {
  constructor(nombreProducto, cantidad) {
      this.nombreProducto  = nombreProducto.toUpperCase();
      this.precioUnitario = parseFloat(precioUnitario);
      this.vendido = false;
      this.cantidad = cantidad;
      this.subTotal= subTotal;
  }
  cuenta() {
      this.subTotal = this.precioUnitario * this.cantidad;
  }
  vender() {
      this.vendido = true;
  }
}
const venta1 = new Venta("medialunas", 12);
venta1.cuenta();
venta1.vender ();
console.log (cuenta);
//ver como hacer para que figure en alert el subtotal//

//desafio Arrays//
const vendido = [

  { nombreProducto: "medialunas", cantidad: 0 },

  { nombreProducto: "croissant", cantidad: 1 },

];

function metodoEjm() {

  const encontrado = vendido.find(

    (producto) => producto.nombreProducto == "croissant"

  );

  encontrado.cantidad += 1;

}

metodoEjm();

console.log(vendido);

let produc = [
  "medialunas",
  "pain aun chocolat",
  "croissant",
  "alfajor",
  "pan de masa madre",
  "pan de masa madre con nueces",
  "cinnamon rolls",
  "rolls de queso y lomito",
];

let precio = [100, 150, 150, 100, 350,370,150,150];

let ul = document.createElement("ul");

for (const producto of produc) {
  let li = document.createElement("li");
  li.innerHTML = medialunas;
  ul.appendChild(li);
}
console.log (ul);
