//helpers
function esPar(numerito){
    return (numerito % 2 === 0)
}

function calcularMediaAritmetica(pais){
    const sumaPaises = pais.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return  valorAcumulado + nuevoElemento;
        }
    );
    const promedioPais = sumaPaises / pais.length;
    return promedioPais;
}

//calculadora de mediana
function medianaSalarios(pais){
    const mitad = parseInt(pais.length / 2);

    if (esPar(pais.length)){
     const personitaMitad1 = pais[mitad -1];
     const personitaMitad2 = pais[mitad];

     const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
     return mediana;
    }else{
        const personitaMitad = pais[mitad];
        return personitaMitad;
    }
}

//Mediana General
const salariosMX = mexico.map(
    function (personita) {
     return personita.salary;
    }
);

const salariosMXSorted = salariosMX.sort(
    function(salaryA, salaryB){
    return salaryA - salaryB;
    }
);

const medianaGeneralMX = medianaSalarios(salariosMXSorted);
//mediana del top 10%

const spliceStart = (salariosMXSorted.length * 90) / 100;
const spliceCount = salariosMXSorted.length - spliceStart;

const salariosMXTop10 = salariosMXSorted.splice(
    spliceStart,
    spliceCount,
    );

const medianaTop10MX = medianaSalarios(salariosMXTop10);


console.log({
medianaGeneralMX,
medianaTop10MX,
});