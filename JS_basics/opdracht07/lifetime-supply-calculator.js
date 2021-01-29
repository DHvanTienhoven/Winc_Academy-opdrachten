const calculateSupply = function(age, amountInGramPerDay){
    console.log("Wou will need" + Math.round(amountInGramPerDay*age*365*0.001) + "kg to last you until the ripe old age of" + age)
}

calculateSupply(82, 90)
calculateSupply(57, 10)
calculateSupply(104, 104)