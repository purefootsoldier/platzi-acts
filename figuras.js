//codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    //console.log("el perimetro del cuadrado es " + perimetroCuadrado + "cm");
    return lado * 4;
}



function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

//codigo del triangulo
console.group("triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log(
//"las medidas de los lados del triangulo miden: "
//+ ladoTriangulo1 + "cm, "
//+ ladoTriangulo2 + "cm, "
//+ baseTriangulo  + "cm"
//);

//const alturaTriangulo = 5.5;
//console.log("la altura del triangulo es: " + alturaTriangulo + " cm");

function perimetroTriangulo(lado1, lado2, base){
 return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
   }
console.groupEnd();


console.group("Circulos");
// Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm");


// Diametro
function diametroCirculo(radio){
    return radio * 2;
}


// PI
const PI = Math.PI;


//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI
}

function areaCirculo(radio){
   return (radio * radio) * PI;
}

console.groupEnd();

function calcularPerimetroCuadrado(){
 const input = document.getElementById("InputCuadrado");
 const value = input.value;

 const perimetro = perimetroCuadrado(value);
 alert(perimetro);
}

function calcularAreaCuadrado(){ 
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}
function calcularAlturaTriangulo()
{
     const a = document.getElementById("medidaDeLados");
     const b = document.getElementById("medidaDeBase");

     const aValue = a.value;
     const bValue = b.value; 
     if (aValue <= 0 || bValue <= 0 )
     {
     alert("USA UN VALOR MAYOR A 0!");
     }
     else{
        var bMitad = bValue / 2;
        var resultado = Math.sqrt((aValue * aValue) - (bMitad * bMitad));
        alert(resultado);
     }
}