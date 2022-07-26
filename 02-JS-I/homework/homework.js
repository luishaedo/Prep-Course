// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "palabra";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 9;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return str
}


function suma(x, y) {
  var suma = x + y;
 return suma;
}


function resta(x, y) {
 var resta = x - y;
 return resta;
}
 

function multiplica(x, y) {
 var multiplica = x * y;
 return multiplica;
}



function divide(x, y) {
var divide = x / y; 
 return divide;
}


function sonIguales(x, y) {
 if (x === y) {
    return true;}
 else return false;
}


function tienenMismaLongitud(str1, str2) {
 if (str1.length === str2.length){
  return true;}
 else return false;
}


function menosQueNoventa(num) {
 if (num < 90) {
  return true; }
 else return false;
}


function mayorQueCincuenta(num) {
 if (num > 50){
  return true; } 
 else return false
}


function obtenerResto(x, y) {
 var obtenerResto = x % y;
 return obtenerResto;
}


function esPar(num) {
  if (num % 2 === 0) {
    return true}
  else return false;
}


function esImpar(num) {
  if (num %2 === 1) { 
    return true}
  else return false;  
}


function elevarAlCuadrado(num) {
 return Math.pow (num,2);
}


function elevarAlCubo(num) {
 return Math.pow(num,3)
}


function elevar(num, exponent) {
 return Math.pow(num, exponent) 
}


function redondearNumero(num) {
 return Math.round (num)
}


function redondearHaciaArriba(num) {
 return Math.ceil(num)  
}


function numeroRandom() {
 return Math.random()
};

function esPositivo(numero) {
 while (numero == 0) {
   return false;}
 if (numero > 0) {
   return "Es positivo"; } 
 else {return  "Es negativo";} 
}


function agregarSimboloExclamacion(str) {
 var agregarSimboloExclamacion = (str + "!");
 return (agregarSimboloExclamacion);
}


function combinarNombres(nombre, apellido) {
 var combinarNombres = (nombre + " " + apellido)
 return(combinarNombres);
}


function obtenerSaludo(nombre) {
 var obtenerSaludo= ("Hola " + nombre +"!");
 return (obtenerSaludo);
}


function obtenerAreaRectangulo(alto, ancho) {
 var obtenerAreaRectangulo= alto * ancho;
 return obtenerAreaRectangulo;
}


function retornarPerimetro(lado) {
 var perimetro = (lado * 4)
 return (perimetro);  
}


function areaDelTriangulo(base, altura) {
  var area = (base * altura)/2;
  return (area);
}


function deEuroAdolar(euro) {
  var dolar = (1.2 * euro);
  return (dolar); 
}


function esVocal(letra) {
if (letra.length >1) {return ("Dato incorrecto");}
if (letra === "a") {return ("Es vocal")};
if (letra === "e") {return ("Es vocal")};
if (letra === "i") {return ("Es vocal")};
if (letra === "o") {return ("Es vocal")};
if (letra === "u") {return ("Es vocal")};
return ("Dato incorrecto");
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
