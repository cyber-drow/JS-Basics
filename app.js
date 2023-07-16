const positionLat = 10, positionLong = 34, addressLat = 3, addressLong = 10;
const distance2 =  Math.sqrt(Math.pow((positionLong - positionLat), 2) + Math.pow((addressLong - addressLat), 2));

console.log(`Расстояние между двумя точками равно ${distance2}`);