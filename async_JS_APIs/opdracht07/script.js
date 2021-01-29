console.log(randomPersonData)

//opdracht 1



const countriesSorted = randomPersonData.map(person => person.region).sort();
const uniqueCountriesSorted = new Set(countriesSorted)

console.log(`#########`)
console.log(countriesSorted)
console.log(`#########`)
console.log(uniqueCountriesSorted)

//opdracht 2

const zodiacSigns = randomPersonData.map(person =>{
    const day = parseInt(person.birthday.dmy.split(`/`)[0])
    const month = parseInt(person.birthday.dmy.split(`/`)[1])
    if (month === 3 && day >= 21 || month === 4 && day <= 19) return `Aries`; 
    if (month === 4 && day >= 20 || month === 5 && day <= 20) return `Taurus`;
    if (month === 5 && day >= 21 || month === 6 && day <= 20) return `Gemini`;
    if (month === 6 && day >= 21 || month === 7 && day <= 22) return `Cancer`;
    if (month === 7 && day >= 23 || month === 8 && day <= 22) return `Leo`;
    if (month === 8 && day >= 23 || month === 9 && day <= 22) return `Virgo`;
    if (month === 9 && day >= 23 || month === 10 && day<= 22) return `Libra`;
    if (month === 10 && day >= 23 || month === 11 && day <= 21) return `Scorpio`;
    if (month === 11 && day >= 22 || month === 12 && day <= 21) return `Sagittarius`;
    if (month === 12 && day >= 22 || month === 1 && day <= 19) return `Capricorn`;
    if (month === 1 && day >= 20 || month === 2 && day <= 18) return `Aquarius`;
    if (month === 2 && day >= 19 || month === 3 && day<= 20) return `Pisces`;
}
)

console.log(`#########`)
console.log(zodiacSigns)

const allFemales = randomPersonData.filter(person => person.gender === "female")
const femalesOverThirty = allFemales.filter(person => person.age > 30)

console.log(`#########`)
console.log(femalesOverThirty)
// const capricornFemalesOverThirty = femalesOverThirty.filter (person => {
//     zodiacSign(person) = `Capricorn`
// })

// // console.log(capricornFemalesOverThirty)
// console.log(femalesOverThirty)