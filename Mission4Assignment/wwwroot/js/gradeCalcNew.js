$("#btnCalc").click(function () {
    //values from form
    let assignment = parseFloat($("#assignmentPercent").val());
    let quiz = parseFloat($("#quizzesPercent").val());
    let group = parseFloat($("#groupPercent").val());
    let intex = parseFloat($("#intexPercent").val());
    let finalExam = parseFloat($("#finalExamPercent").val());
    let midtermExam = parseFloat($("#midtermExamPercent").val());
    let grade = "";

    let finalCalc = (assignment * 0.5) + (quiz * 0.1) + (group * 0.1) + (intex * 0.1) + (finalExam * 0.1) + (midtermExam * 0.1);

    //letter grade calculation
    if (finalCalc >= 94) {
        grade = "A"
        gradeShow(grade)
    }
    else if (finalCalc >= 90) {
        grade = "A-"
        gradeShow(grade)
    }
    else if (finalCalc >= 87) {
        grade = "B+"
        gradeShow(grade)
    }
    else if (finalCalc >= 84) {
        grade = "B"
        gradeShow(grade)
    }
    else if (finalCalc >= 80) {
        grade = "B-"
        gradeShow(grade)
    }
    else if (finalCalc >= 77) {
        grade = "C+"
        gradeShow(grade)
    }
    else if (finalCalc >= 74) {
        grade = "C"
        gradeShow(grade)
    }
    else if (finalCalc >= 70) {
        grade = "C-"
        gradeShow(grade)
    }
    else if (finalCalc >= 67) {
        grade = "D+"
        gradeShow(grade)
    }
    else if (finalCalc >= 64) {
        grade = "D"
        gradeShow(grade)
    }
    else if (finalCalc >= 60) {
        grade = "D-"
        gradeShow(grade)
    }
    else {
        grade = "F"
        gradeShow(grade)
    }
});

$("#formCalc").submit(function (e) {
    e.preventDefault();
});

function gradeShow(grade) {
    $("#gradeHide").text("Grade: " + grade).show();
}