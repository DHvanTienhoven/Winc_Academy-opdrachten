

const sumOfAll = (...numbers) => numbers.reduce((accumulator, total) => accumulator + total);

    console.log(sumOfAll(1, 9, 0, 100)) //110
    console.log(sumOfAll(1, 5, 10, 100, 3, 34)) //153
    console.log(sumOfAll(1, 9 )) //10
    console.log(sumOfAll(1, 9, -9, 2)) //3

    const sumOfAll2 = (a, b, c) => a+b+c;
    
    const numbers = [34, 2, 19];
    
    console.log(sumOfAll2(...numbers));//55
