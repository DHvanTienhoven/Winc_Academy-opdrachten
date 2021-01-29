// opdracht A
let words = ["nice", "awesome", "tof"];
const addTheWordCool = function(array){ 
    array.push("cool");
} 
addTheWordCool(words);
console.log(words);
// verwacht resultaat: ["nice", "awesome", "tof", "cool"]

//Opdracht B
const fruit = ['appels', 'peren', 'citroenen']
const amountOfElementsInArray = function(array){
    return array.length
}
console.log(amountOfElementsInArray(fruit)); 
// verwacht resultaat: 3

//Opdracht C
const BeNeLux = ["Belgie", "Nederland", "Luxemburg"]
const selectBelgiumFromBenelux = function(array){
    return array[0]
}
console.log(selectBelgiumFromBenelux(BeNeLux))
// verwacht resultaat: Belgie

//Opdracht D
const dieren = ["Haas", "Cavia", "Kip", "Schildpad"];
const lastElementInArray = function(array){
    return array[array.length-1]
}
console.log(lastElementInArray(dieren))
//verwacht resultaat: Schildpad

// Opdracht E
const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
const impeachTrumpSlice = function(array) {
    return array.slice(1)
}
const impeachTrumpSplice = function(array) {
    return array.splice(1)}
console.log(impeachTrumpSlice(presidents)); 
console.log(impeachTrumpSplice(presidents)); 
// verwacht resultaat bij beiden: ["Obama", "Bush", "Clinton"]