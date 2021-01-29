function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

for(score=60; score<=100; score++){
    if (score>90){console.log("voor"+score+"krijg je een A")}
    else if(score>80){console.log("voor"+score+"krijg je een B")}
    else if(score>70){console.log("voor"+score+"krijg je een C")}
    else if(score>65){console.log("voor"+score+"krijg je een D")}
    else{console.log("voor"+score+"krijg je een F")}
}