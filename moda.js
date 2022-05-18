
function listaInputs(lista){
const listaCount = {};

lista.map(
    function (elemento) {
        if (listaCount[elemento]){
            //es algo como = "1" : 2 =+ 1 = "1" : 3
            listaCount[elemento] += 1;
        } else {
            //cuando todavia no existe el elemento lo crea 
        listaCount[elemento] = 1;  
        }
    }
);

const listaArray = Object.entries(listaCount).sort(
    function (elementoA, elementoB){
        // [] es la posicion del array en este caso seria las veces que se repitio el numero
        return elementoA[1] - elementoB[1];
    }
)
//esta buscando la posicion final en este caso como son 5 elementos le esta restando para que la posicion sea 4 ya que esa es la ultima (0,1,2,3,4)
const moda = listaArray[listaArray.length - 1];
console.log(moda);
}