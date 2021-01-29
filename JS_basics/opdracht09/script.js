const colors = ["yellow", "blue", "red", "orange"]
let i = 0

while (i<colors.length){
    console.log(colors[i]);
    i++
}

for (i=0;i<colors.length;i++){
    console.log(colors[i])
}

colors.forEach(element=>console.log(element))

// mijn while loop neemt vier regels in beslag, mijn for loop neemt drie regels in beslag en de forEach method één regel
// de array method is ook simpeler om te schrijven dan een for of een while loop.
// je kunt de properties van een object console loggen door console.log('${key}:${value}') toe te passen

const field = {
    unitNumber: 532,
    use: "olive grove",
    vegetation: "light",
    numberOfFinds: 7,
    hasImpasto: false
}

for (x in field){
    console.log(field[x])
}