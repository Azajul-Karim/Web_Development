const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || isNaN(height) || height <= 0) {
    result.innerHTML = `Please enter valid height ${height} cm"`;
  } else if (weight === "" || isNaN(weight) || weight <= 0) {
    result.innerHTML = `Please enter valid weight ${weight}kg`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `Your BMI is ${bmi}`;
  }
});
