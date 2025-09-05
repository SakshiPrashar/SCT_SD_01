gsap.from(".converter-box", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
function convertTemp() {
  const temp = parseFloat(document.getElementById("inputTemp").value);
  const unit = document.getElementById("inputUnit").value;
  const resultDiv = document.getElementById("result");
  let result = "";

  if (isNaN(temp)) {
    result = "⚠ Please enter a valid number!";
    resultDiv.classList.add("error");
  } else {
    resultDiv.classList.remove("error");
    if (unit === "C") {
      result = `${temp} °C = ${(temp * 9/5 + 32).toFixed(2)} °F | ${(temp + 273.15).toFixed(2)} K`;
    } else if (unit === "F") {
      result = `${temp} °F = ${((temp - 32) * 5/9).toFixed(2)} °C | ${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K`;
    } else if (unit === "K") {
      result = `${temp} K = ${(temp - 273.15).toFixed(2)} °C | ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F`;
    }
  }

  resultDiv.innerHTML = result;

 
  gsap.killTweensOf("#result");
  gsap.from("#result", { duration: 0.6, opacity: 0, y: 20 });
}


document.getElementById("convertBtn").addEventListener("click", convertTemp);

document.getElementById("inputTemp").addEventListener("keypress", function(e) {
  if (e.key === "Enter") convertTemp();
});
