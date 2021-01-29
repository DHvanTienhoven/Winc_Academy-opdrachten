const {isShorterThanNineCharacters, isNotNull, hasOneOrMoreUpperCaseCharacters, hasOneOrMoreLowerCaseCharacters, hasOneOrMoreNumbers, passwordVerifier, } = require("./password-checker.js");

// Tests for individual conditions:

test ("is henkie1 shorter than nine characters", () =>{
    expect(isShorterThanNineCharacters(`henkie1`)).toEqual(true)
})

test ("is henkie1234 shorter than nine characters", () =>{
    expect(isShorterThanNineCharacters(`henkie1234`)).toEqual(false)
})

test ("is `` not null", () =>{
    expect(isNotNull(``)).toEqual(false)
})

test ("is `henkiehenkie` not null", () =>{
    expect(isNotNull(`henkiehenkie`)).toEqual(true)
})

test ("does the `HENKhenk` have one or more uppercase characters", () =>{
    expect(hasOneOrMoreUpperCaseCharacters(`HENKhenk`)).toEqual(true)
})

test ("does the `1234a` have one or more uppercase characters", () =>{
    expect(hasOneOrMoreUpperCaseCharacters(`1234a`)).toEqual(false)
})

test ("does `z` have one or more lowercase characters", () =>{
    expect(hasOneOrMoreLowerCaseCharacters(`z`)).toEqual(true)
})

test ("does `HENK33$` have one or more lowercase characters", () =>{
    expect(hasOneOrMoreLowerCaseCharacters(`HENK33$`)).toEqual(false)
})

test ("does `1234` have one or more numbers", () => {
    expect(hasOneOrMoreNumbers(`1234`)).toEqual(true)
})

test ("does `henkiehenkie` have one or more numbers", () => {
    expect(hasOneOrMoreNumbers(`henkiehenkie`)).toEqual(false)
})

// Test voor Password verifier

test ("is `henkie1` a valid password", () => {
    expect(passwordVerifier(`henkie1`)).toEqual(true)
})

test ("is `1234a` a valid password", () => {
    expect(passwordVerifier(`1234a`)).toEqual(true)
})

test ("is `z` a valid password", () => {
    expect(passwordVerifier(`z`)).toEqual(true)
})

test ("is `henkie1234` a valid password", () => {
    expect(passwordVerifier(`henkie1234`)).toEqual(true)
})

test ("is `HENKhenk` a valid password", () => {
    expect(passwordVerifier(`HENKhenk`)).toEqual(true)
})

test ("is `HENK33$` a valid password", () => {
    expect(passwordVerifier(`HENK33$`)).toEqual(false)
})

test ("is `1234` a valid password", () => {
    expect(passwordVerifier(`1234`)).toEqual(false)
})

test ("is `` a valid password", () => {
    expect(passwordVerifier(``)).toEqual(false)
})

test ("is `henkiehenkie` a valid password", () => {
    expect(passwordVerifier(`henkiehenkie`)).toEqual(false)
})