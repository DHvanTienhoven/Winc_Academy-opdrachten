
/*
Exercise 1:
Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10. Log the result to the console.
*/

const testNum = new Promise((resolve, reject) =>{
    let number = 9;    
    if (number >= 10){
            resolve(`${number} is groter dan of gelijk aan 10`)
        } else{
            reject(`${number} is kleiner dan 10`)
        }
})

testNum.then((message) => {
    console.log(`hoera! ${message}`)
}).catch((message)=>{
    console.log(`oh jee! ${message}`)
})


/*
Exercise 2:
Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/


const makeAllCaps = ((remakeAllWords) => {
    return new Promise ((resolve, reject) => {
        if (remakeAllWords.every(remakeEachWord => {
            return typeof remakeEachWord === `string`;
        }))
            resolve(sortWords(remakeAllWords.map(remakeEachWord => {
                return remakeEachWord.toUpperCase();
            })));
        else {
            reject(`not all items are strings`);
        };
    });
});

const sortWords = (sortAlphabeticalWords) => {
    return new Promise((resolve, reject) => {
        if (sortAlphabeticalWords) {
            resolve(sortAlphabeticalWords.sort());
        } else {
            reject(`not all items are strings`);
        };
    });
};

const practiceArray = ["eclectisch", "desalniettemin", "ijskast", "schadenfreude", 4];

makeAllCaps(practiceArray)
    .then(sortWords(practiceArray))
    .then(result => console.log(result))
    .catch(error => console.log(error));



