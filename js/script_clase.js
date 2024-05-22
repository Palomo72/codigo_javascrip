let nombre = "Simulador de prestamo";
console.log(nombre);

let esMayorDeEdad = prompt("ingrese su edad:") ;

if(esMayorDeEdad >= 18 ){
 alert("su edad es de:" + esMayorDeEdad + "Años,entonces es mayor de edad")   
} else if(esMayorDeEdad > 0 && esMayorDeEdad < 18)  {
    alert("Su edad es de: " + esMayorDeEdad + "Años,para solicitar el prestamo debe ser mayor de edad")
} else if (esMayorDeEdad<= 0) {
alert("La edad ingresada debe ser Mayor a 0!!!")
}
else {
    alert("La edad ingresada es Incorrecta")
}

let ingreseSuNombre = prompt("Ingrese su Nombre:");
let ingreseSuApellido = prompt("Ingrese su Apellido:");
const VACIO = ""; 

if(ingreseSuNombre != VACIO && ingreseSuApellido != VACIO);

    { 
      alert("Su nombre es: " + ingreseSuNombre + " "
      + ingreseSuApellido);
      }


//else {
//alert("Falta ingresar Informacion"); }

 const PRESTAMO = 90000


let ingreseLasCuotasDeseadas =prompt("Ingrese las cuotas de 1 a 3:");

if(ingreseLasCuotasDeseadas)
    {alert("A pagar: "  + ingreseLasCuotasDeseadas); }

const tasaInteresMensual  = x => x * 0.10 a;
if(tasaInteresMensual){
    alert("cuota a pagar:" + tasaInteresMensual(90000) );
}
