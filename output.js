function calculatePercentage() {
  const cgpa = parseFloat(document.getElementById("cgpa").value);
  const gradingScale = parseFloat(
    document.getElementById("gradingScale").value
  );
  const resultElement = document.getElementById("result");

  if (isNaN(cgpa) || isNaN(gradingScale)) {
    resultElement.textContent = "Please enter valid numeric values.";
    return;
  }

  if (gradingScale === 0) {
    resultElement.textContent = "Grading scale cannot be zero!";
    return;
  }

  const percentage = (cgpa / gradingScale) * 100;
  resultElement.textContent = `Equivalent Percentage: ${percentage.toFixed(
    2
  )}%`;
}
