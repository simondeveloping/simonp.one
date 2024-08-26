document.getElementById("preview").addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector(".overlay").classList.add("hide");
});
if (window.navigator.standalone) {
  document.querySelector(".overlay").classList.add("hide");
}

let sum = null;
let value1 = null;
let value2 = null;
let operator = null;
let reset = false;
let input = document.getElementById("value");
input.value = "0";
function updateClear() {
  if (input.value !== "0") {
    document.getElementById("ac").textContent = "C";
  } else {
    document.getElementById("ac").textContent = "AC";
  }
}
document.getElementById("plus").addEventListener("click", function (event) {
  event.preventDefault();
});
document.querySelectorAll(".gray").forEach((button) =>
  button.addEventListener("click", function (event) {
    event.preventDefault();
    let number = this.textContent.trim();
    if (reset) {
      input.value = "";
      reset = false;
    }
    resetColors();
    if (number === "," && input.value.includes(",")) {
      return;
    }
    if (input.value === "0") {
      if (number === ",") {
        input.value = "0,";
      } else if (number === ",") {
        input.value += ",";
      } else {
        input.value = number;
      }
    } else {
      input.value += number;
    }
    updateClear();
  })
);
document.getElementById("ac").addEventListener("click", function (event) {
  input.value = "0";
  value1 = null;
  value2 = null;
  sum = null;
  resetColors();
  updateClear();
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
  if (sum % 1 === 0) {
    input.value = sum.toString().replace(".", ",");
  } else {
    input.value = sum.toFixed(2).toString().replace(".", ",");
  }
  value1 = sum;
  operator = null;
  reset = true;
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
  document.getElementById("plus").style.color = "white";
  document.getElementById("minus").style.backgroundColor = "orange";
  document.getElementById("minus").style.color = "white";
  document.getElementById("multiply").style.backgroundColor = "orange";
  document.getElementById("multiply").style.color = "white";
  document.getElementById("divide").style.backgroundColor = "orange";
  document.getElementById("divide").style.color = "white";
}

function addOperation(selectedOperator, button) {
  if (operator !== null && !reset) {
    value2 = parseFloat(input.value.replace(",", "."));
    if (operator === "+") {
      value1 += value2;
    } else if (operator === "-") {
      value1 -= value2;
    } else if (operator === "x") {
      value1 *= value2;
    } else if (operator === "/") {
      value1 /= value2;
    }
  } else {
    value1 = parseFloat(input.value.replace(",", "."));
  }
  operator = selectedOperator;
  reset = true;
  resetColors();
  button.style.backgroundColor = "white";
  button.style.color = "orange";
}
document.getElementById("percent").addEventListener("click", function (event) {
  event.preventDefault();
  let tmp = parseFloat(input.value.replace(",", ".")) / 100;
  input.value = tmp.toString().replace(".", ",");
  reset = true;
});
