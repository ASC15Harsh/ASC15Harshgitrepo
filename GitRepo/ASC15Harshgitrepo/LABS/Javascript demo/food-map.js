const nameFoodMap = new Map([
    ['Jalaj', 'Pizza'],
    ['Ayush', 'Burger'],
    ['Bodha', 'Pasta'],
    ['Nitish', 'Sushi'],
    ['Rajat', 'Tacos']
]);

// Display the Map
console.log(nameFoodMap);

nameFoodMap.forEach((food, name) => {
    console.log(`${name}'s favorite food is ${food}.`);
});

//convert it into array
const nameArray = [...nameFoodMap];
console.log(nameArray);


// destructure
const[fw , ff] = nameArray[0];
console.log(`word:  ${fw}, fav food: ${ff}`);

//for of loop
for(const [key , value] of nameFoodMap){
    console.log(`FOR.. OF Key: ${key}, Value: ${value}`);
}