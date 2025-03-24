function calculateGrade() {
    const score = document.getElementById("score").value;
    const gradeElement = document.getElementById("grade");
    if (score === "" || isNaN(score) || score < 0) {
      gradeElement.textContent = "Please enter a valid score!";
      gradeElement.style.color = "red";
      return;
    }
    let grade = "";
    if (score >= 80) {
      grade = "A";
    } else if (score >= 60) {
      grade = "B";
    } else if (score >= 40) {
      grade = "C";
    } else {
      grade = "F";
    }
    gradeElement.textContent = grade;
    if (grade === "A") {
      gradeElement.style.color = "green";
    } else if (grade === "B") {
      gradeElement.style.color = "blue";
    } else if (grade === "C") {
      gradeElement.style.color = "orange";
    } else {
      gradeElement.style.color = "red";
    }
  }