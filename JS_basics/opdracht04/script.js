const age = 20;
const driverStatus="bob";
const isFemale = "true";
const name = "Sarah"
const totalAmount=30;

if (age >= 18){
    console.log("Welkom! :)")
} 
else{
console.log("ACCESS DENIED!")
}

if(isFemale=="true"){
    console.log("wil je een kaartje kopen?")
}
else{
    console.log("kom maar terug op een andere avond")
}

if(driverStatus=="bob"){
    console.log("Fijne avond nog!")
}
else{
    console.log("je kan beter niet rijden, zal ik een taxi voor je bellen?")
}

if (age >= 18 && age <= 25){
    console.log("je krijgt 50%korting")
}

if (name == "Sarah" || name == "Bram"){
    console.log("we bestaan 50 jaar! je krijgt een biertje van ons :)")
}

if (totalAmount>=100){
    console.log("Hey, big spender! je krijgt een fles champagne van het huis!")
}

else if(totalAmount>=50){
    console.log("enjoy your nachos!")
}

else if(totalAmount>=25){
    console.log("Hier is een portie vegan bitterballen. Eet smakelijk!")
}