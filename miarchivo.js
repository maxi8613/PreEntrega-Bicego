//Simulador del monto a pagar por el usuario en cuotas
let carrito = parseInt(prompt("Ingrese el monto total a pagar"));
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
  resultado = carrito / 3;
  mensaje();
} else if (cuotas == 6) {
  resultado = carrito / 6;
  mensaje();
} else if (cuotas == 12) {
  resultado = carrito / 12;
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
