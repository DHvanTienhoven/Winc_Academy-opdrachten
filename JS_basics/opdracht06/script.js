// make cheese sandwich:
// -take a slice of bread
//- put a slice of cheese on
//-  put on a few slices of tomato
//- put on some pepper and salt
// - put a slice of bread on top


function makeCheeseSandwich(){
    console.log("take a slice of bread");
    console.log("put a slice of cheese on"); 
    console.log("put on a few slices of tomato");
    console.log("put on some pepper and salt");
    console.log("put a slice of bread on top");
}

//makeCheeseSandwich()

function makeSandwich(topping){
    console.log("here you go, a sandwich with", topping);
}

makeSandwich('humus')

//function declaration: function makeSandwich(topping){
//    console.log("here you go, a sandwich with", topping);
//}

//function call: makeSandwich('humus')

makeSandwich('goats cheese')

function calculateDiscountedPrice(totalAmount, discount){
    return Math.round(totalAmount-discount) 
}

//console.log(calculateDiscountedPrice(25, 6.80))

function calculatePrice(totalAmount, discount){
    if (totalAmount>25) {
    return Math.round(totalAmount-discount) }
    else{
    return totalAmount
    }
}

console.log(calculatePrice(25, 6.80));
console.log(calculatePrice(30, 9.30));
console.log(calculatePrice(5, 1.20))