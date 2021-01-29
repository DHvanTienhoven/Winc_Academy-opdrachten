//Opdracht A
const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}];
const findSpiderMan = superheroes.find((superhero)=>superhero.name==="Spiderman");
console.log(findSpiderMan);
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

//Opdracht B
const numbers = [1,2,3];
const doubleArrayValues = numbers.map(x=> x*2)
console.log(doubleArrayValues)
// result should be [2, 4, 6]

//Opdracht C
const numbers2 = [1, 4, 3, 6, 9, 7, 11];
const numbers3 = [1,2,1,2,1,2]
const containsNumberBiggerThanTen2 = numbers2.some(x=>x>10)
const containsNumberBiggerThanTen3 = numbers3.some(x=>x>10)
console.log(containsNumberBiggerThanTen2)
console.log(containsNumberBiggerThanTen3)
//result 1 should be true result 2 should be false 

//Opdracht D
const greatSeven = ['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'];
const isItalyInTheGreatSeven = greatSeven.includes('Italy')
console.log(isItalyInTheGreatSeven)
// result should be true

//Opdracht E
const numbers4 = [1, 4, 3, 6, 9, 7, 11];
const tenfold = numbers4.forEach (number => console.log(number*10));
// result should be [10, 40, 30, 60, 90, 70, 110]

//Opdracht F
const numbers5 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ];
const isBelow100 = numbers5.every(x=>x<100);
console.log(isBelow100)
//result should be false

//Opdracht G
const numbers6 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]
const bigSum = numbers6.reduce((accumulator, value) => accumulator+value)
console.log(bigSum) 
// result should be 1118