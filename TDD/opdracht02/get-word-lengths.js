const getWordLengths = function(someWords) {
    return someWords.map( word => word.length)
};

console.log(getWordLengths(["dfbsadijfdf", "g", "zon"]))

module.exports = getWordLengths;