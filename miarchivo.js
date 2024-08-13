//primera preentrega. Simulador del monto a pagar por el usuario en cuotas
let total = parseInt(prompt("Ingrese el monto total a pagar"));
let cuotas = parseInt(
  prompt(
    "Selecione en cuantas cuotas desea pagar. Marque 3 para pagar en 3 cuotas, 6 para pagar en 6 cuotas o 12 para pagar en 12 cuotas. "
  )
);
let resultado;

function mensaje() {
  console.log("El monto total a pagar en cuotas es " + resultado + " pesos");
}

if (cuotas == 3) {
  resultado = total / 3;
  mensaje();
} else if (cuotas == 6) {
  resultado = total / 6;
  mensaje();
} else if (cuotas == 12) {
  resultado = total / 12;
  mensaje();
} else {
  console.log("Usted no ha ingresado un valor");
}

switch (cuotas) {
  case 22:
    console.log("No se puede pagar en 22 cuotas");
    break;
  case 24:
    console.log("No se puede pagar en 24 cuotas");
    break;

  case 26:
    console.log("No se puede pagar en 26 cuotas");
    break;

  case 30:
    console.log("No se puede pagar en 30 cuotas");
    break;

  default:
    break;
}

//segunda preentrega. Estructuracion de un carrito de compras
class yerbas {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const yerba1 = new yerbas("Verdeada", 3700);
const yerba2 = new yerbas("Picada Vieja", 3000);
const yerba3 = new yerbas("Fidel Tradicional", 3700);
const yerba4 = new yerbas("La Dicha", 4200);

let seleccion = parseInt(
  prompt(
    "Indique 1 si desea comprar Verdeada || Indique 2 si desea comprar Picada Vieja || Indique 3 si desea comprar Fidel Tradicional || Indique 4 si desea comprar La Dicha"
  )
);

const carrito = [];

function agregar() {
  switch (seleccion) {
    case 1:
      carrito.push(yerba1)
      
      carrito.forEach(element => {
        console.log(element);
        
      });
      break;
    case 2:
      carrito.push(yerba2)
      carrito.forEach(element => {
        console.log(element);
        
      });
      break;
    case 3:
      carrito.push(yerba3)
      carrito.forEach(element => {
        console.log(element);
        
      });
      break;
    case 4:
      carrito.push(yerba4)
      carrito.forEach(element => {
        console.log(element);
        
      });
      break;
    default:
      break;
  }
}
agregar();




