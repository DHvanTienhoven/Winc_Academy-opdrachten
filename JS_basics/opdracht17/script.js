const isAdult = age => age >= 18;


const greet = age =>{
    if(isAdult(age)){
        return "hello there"
    } if (isAdult(age) === false){
        return "hey kiddo"
    }
}

console.log(greet(18))
console.log(greet(12))
console.log(greet(25))

const findVatPercentage = (typeOfGoods) =>{
    if(typeOfGoods === 'food'){
        return 9
    } if (typeOfGoods === 'luxury'){
        return 21
    } else{
        return 0
    }
}

const calculateTotal = (basePrice, typeOfGoods) => {
    vatPercentage = findVatPercentage(typeOfGoods);
    return basePrice + basePrice*vatPercentage/100
}

console.log(calculateTotal(100, 'luxury'))
console.log(calculateTotal(100, 'food'))
console.log(calculateTotal(100, 'olifant'))

const findBasepriceAndVat = (totalAmount, typeOfGoods) =>{
    result = []
    vatPercentage = findVatPercentage(typeOfGoods)
    basePrice = Math.round(totalAmount/(vatPercentage/100 +1))
    vatPrice = totalAmount - basePrice
    result.push(basePrice)
    result.push(vatPrice)
    return result
}

console.log(findBasepriceAndVat(121, 'luxury'))
console.log(findBasepriceAndVat(109, 'food'))
console.log(findBasepriceAndVat(100, 'olifant'))