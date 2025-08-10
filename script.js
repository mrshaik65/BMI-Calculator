const formEl = document
  .getElementById("form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const inputEl = document.getElementById("weight").value;
    const inputE2 = document.getElementById("height").value;

    if (inputEl == "" || inputE2 === "") {
      alert("Enter details");
      return;
    }

    const heightValue = ((inputE2 / 100) * inputE2) / 100;
    const bmiOutput = inputEl / heightValue;
    let output = String(bmiOutput);
    let str = output.slice(0, 5);

    let value1 = "";
    let value2 = "";
    let value3 = "";
    let value4 = "";

    if (str < 18.5) {
      value1 += "Under Weight";
    } else if (str >= 18.5 && str <= 24.9) {
      value2 += "Normal Weight";
    } else if (str >= 25 && str <= 29.9) {
      value3 += "Over Weight";
    } else {
      value4 += "Obese";
    }

    const rootEl = document.getElementById("root");
    rootEl.innerHTML = `<b>Your BMI: </b>${str}<br><p class="text-success"><u>${value1}</u></p><p class="position-relative" style="top:-1rem; color:yellow;"><u>${value2}</u></p><p class="position-relative" style="color:Orange; top:-1.25rem;"><u>${value3}</u></p> <p class="text-danger position-relative" style="top:-1.5rem;"><u>${value4}</u></p>`;
    e.target.reset();
  });
