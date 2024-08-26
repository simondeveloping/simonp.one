let sum = null;
let value1 = null;
let value2 = null;
let operator = null;

let input = document.getElementById("value");
input.value = "0";
document.getElementById("plus").addEventListener("click", function (event) {
  event.preventDefault();
});
document.querySelectorAll(".gray").forEach((button) =>
  button.addEventListener("click", function (event) {
    event.preventDefault();
    input.value = "";
    let number = this.textContent.trim();
    resetColors();
    if (number === "," && input.value.includes(",")) {
      return;
    }
    if (input.value === "0") {
      if (number === "," && input.value === "0") {
        input.value = "0,";
      } else if (number === ",") {
        input.value += ",";
      } else {
        input.value = number;
      }
    } else {
      input.value += number;
    }
  })
);
document.getElementById("ac").addEventListener("click", function (event) {
  input.value = "0";
  value1 = null;
  value2 = null;
  sum = null;
  resetColors();
});
document.getElementById("sign").addEventListener("click", function (event) {
  event.preventDefault();
  if (input.value === "0") {
    return;
  }
  if (input.value < 0) {
    input.value = input.value.replace("-", "");
  } else {
    input.value = "-" + input.value;
  }
});
document.getElementById("equal").addEventListener("click", function (event) {
  event.preventDefault();
  value2 = parseFloat(input.value.replace(",", "."));
  if (operator === "+") {
    sum = value1 + value2;
  } else if (operator === "-") {
    sum = value1 - value2;
  } else if (operator === "x") {
    sum = value1 * value2;
  } else if (operator === "/") {
    sum = value1 / value2;
  }
  input.value = sum.toString().replace(".", ",");
  value1 = sum;
  operator = null;
  resetColors();
});
document.getElementById("plus").addEventListener("click", function (event) {
  event.preventDefault();
  addOperation("+", this);
});
document.getElementById("minus").addEventListener("click", function (event) {
  event.preventDefault();
  addOperation("-", this);
});
document.getElementById("multiply").addEventListener("click", function (event) {
  event.preventDefault();
  addOperation("x", this);
});
document.getElementById("divide").addEventListener("click", function (event) {
  event.preventDefault();
  addOperation("/", this);
});
function resetColors() {
  document.getElementById("plus").style.backgroundColor = "orange";
  document.getElementById("minus").style.backgroundColor = "orange";
  document.getElementById("multiply").style.backgroundColor = "orange";
  document.getElementById("divide").style.backgroundColor = "orange";
}
function addOperation(selectedOperator, button) {
  if (operator !== null) {
    value2 = parseFloat(input.value.replace(",", "."));
    if (selectedOperator === "+") {
      value1 += parseFloat(value2);
    } else if (selectedOperator === "-") {
      value1 -= parseFloat(value2);
    } else if (selectedOperator === "x") {
      value1 *= parseFloat(value2);
    } else if (selectedOperator === "/") {
      value1 /= parseFloat(value2);
    }
  } else {
    value1 = parseFloat(input.value.replace(",", "."));
  }
  operator = selectedOperator;
  resetColors();
  button.style.backgroundColor = "rgb(245, 204, 91)";
}
