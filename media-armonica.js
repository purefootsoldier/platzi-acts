const  movement = [
    {
        distanceKm: 100,
        velocity: 120,
    },
    {
        distance: 100,
        velocity: 20,
    },
    {
        distanceKm: 100,
        velocity: 100,
    },
    {
        distanceKm: 100,
        velocity: 130,
    },
];

 const velocityInvert = movement.map(function (movementObject) {
     return (1 / movementObject.velocity);
 });

 const velocityprom = velocityInvert.reduce (
     function ( sum = 0, newVal) {
         return sum + newVal;
     }
 );

 const mediaArmonica = (velocityInvert.length / velocityprom);

function calcularMediaArmonica (dataObject) {
    const velocityInvert = dataObject.map(function (dataObject) {
        return (1 / dataObject.velocity);
    });

    const velocityprom = velocityInvert.reduce (
        function ( sum = 0, newVal) {
            return sum + newVal;
        }
    );

    const mediaArmonica = (velocityInvert.length / velocityprom);

    return mediaArmonica;
}