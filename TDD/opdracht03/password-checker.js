

const isShorterThanNineCharacters = password => password.length < 9;

const isNotNull = password => password.length > 0;

const hasOneOrMoreUpperCaseCharacters = password => (/[A-Z+]/).test(password);

const hasOneOrMoreLowerCaseCharacters = password => (/[a-z+]/).test(password);

const hasOneOrMoreNumbers = password => (/[0-9+]/).test(password);

const passwordVerifier = password =>{
    if(hasOneOrMoreLowerCaseCharacters(password)){
        const fourConditionsChecked = [isShorterThanNineCharacters(password), isNotNull(password), hasOneOrMoreUpperCaseCharacters(password), hasOneOrMoreNumbers(password)];
        const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
        const numberOfTrueConditions = countOccurrences(fourConditionsChecked, true)
        return numberOfTrueConditions >=2
    }
    else{
        return false
    } 
}


// console.log(passwordVerifier(`jdfgkdfsjghkj`))
// console.log(passwordVerifier(`RJEE#`))
// console.log(passwordVerifier(`5324sFF`))
// console.log(passwordVerifier(`c`))
// console.log(passwordVerifier(`DFSDFG45345`))


module.exports = {
    isShorterThanNineCharacters: isShorterThanNineCharacters,
    isNotNull: isNotNull,
    hasOneOrMoreUpperCaseCharacters: hasOneOrMoreUpperCaseCharacters,
    hasOneOrMoreLowerCaseCharacters: hasOneOrMoreLowerCaseCharacters,
    hasOneOrMoreNumbers: hasOneOrMoreNumbers,
    passwordVerifier: passwordVerifier
};
