// students score, total possible score 
// goal is to generate % and letter grade 
// 15/20 -> You got a C (75%). <---return this string 
// A 90-100 B 80-89 C 70-79 D 60-69 F 0-59 

let studentScore
let maxScore 

const gradeCalculator = function (studentScore,maxScore){

const grade = studentScore / maxScore
const percent = grade * 100
let letterGrade = ''

    if (percent >= 90 && percent <= 100) {
        letterGrade = 'A'
    }
    else if (percent >= 80 && percent <= 89){
        letterGrade = 'B'
    }
    else if (percent >= 70 && percent <= 79){
        letterGrade = 'C'
    }
    else if (percent >= 60 && percent <= 69){
        letterGrade = 'D'
    }
    else {
        letterGrade = 'F'
    }

return(`You got a ${percent}% which is a ${letterGrade}`)

}
const finalGrade = gradeCalculator(20,20)
console.log(finalGrade)
