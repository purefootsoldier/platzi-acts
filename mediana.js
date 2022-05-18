const listatemp = [];

function onClickButtonShowModa(){
function calcularMediaAritmetica(lista){
     const sumaLista = lista.reduce(
         function (valorAcumulado = 0, nuevoElemento){
             return  valorAcumulado + nuevoElemento;
         }
     );
     const promedioLista = sumaLista / lista.length;
     return promedioLista;
 }

const lista = listatemp;
const mitadLista = Math.floor(lista.length / 2);

function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let mediana;
if (esPar(lista.length)) {
  const elemento1 = lista[mitadLista - 1];
  const elemento2 = lista[mitadLista];

  const promedioElemento1y2 = calcularMediaAritmetica([
    elemento1,
    elemento2,
  ]);
  
  mediana = promedioElemento1y2;
} else {
  mediana = lista[mitadLista];
}
    console.log(mediana);
}
function onClickButtonSaveVars()
{
    const temporalChange = document.getElementById("InputPrice");
    const temporalSave = parseFloat(temporalChange.value);
    if (temporalSave >= 1){
    listatemp.push(temporalSave);
    console.log(listatemp)
    }
    console.log("ejecutando");
}