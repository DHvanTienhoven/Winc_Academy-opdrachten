const isBiggerThanHundred = number => {return number > 100}

const brenda = (maxNum, curNum, age) =>{
    if(age < 18){
        return "this club is for adults"
    } else if(curNum < maxNum){
        return "come in"
    } else{
        return "it's too busy now, come back later"
    }
}

const findAverage = (a, b, c, d, e) =>{
    return Math.round((a + b + c + d + e)/5)
}

console.log(findAverage(1, 8, 70, 5, 3))
console.log(findAverage(1, 2, 3, 4, 5))