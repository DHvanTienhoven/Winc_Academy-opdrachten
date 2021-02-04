function squareGaloreDeclaration(a, b){
    return (a**2 + b**2)**2
}

const squareGaloreExpression = function(a, b){
    return (a**2 + b**2)**2
}

const squareGaloreArrow = (a, b) =>{
    return (a**2 + b**2)**2
}

console.log(squareGaloreArrow(3, 10))
console.log(squareGaloreExpression(3, 10))
console.log(squareGaloreDeclaration(3, 10))