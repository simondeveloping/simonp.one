/*
document.getElementById("suggestionform").addEventListener("submit", function (event) {
    event.preventDefault();
    addToList();
});

function addToList() {
    var inputValue = document.getElementById("suggestioninput").value;
    if (inputValue.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = inputValue;
        document.getElementById("suggestiontable").appendChild(li);
        document.getElementById("suggestioninput").value = '';
    }
}
*/

document
  .getElementById("arrowleft")
  .addEventListener("click", function (event) {
    event.preventDefault();
    scrollLeft1();
  });
document
  .getElementById("arrowright")
  .addEventListener("click", function (event) {
    event.preventDefault();
    scrollRight1();
  });
function scrollLeft1() {
  document.querySelector(".miniprojectbox").scrollBy({
    left: -200,
    behavior: "smooth",
  });
}
function scrollRight1() {
  document.querySelector(".miniprojectbox").scrollBy({
    left: 200,
    behavior: "smooth",
  });
}
document
  .getElementById("privatearrowleft")
  .addEventListener("click", function (event) {
    event.preventDefault();
    scrollLeft();
  });
document
  .getElementById("privatearrowright")
  .addEventListener("click", function (event) {
    event.preventDefault();
    scrollRight();
  });
function scrollLeft() {
  document.querySelector(".privatestuffbox").scrollBy({
    left: -200,
    behavior: "smooth",
  });
}
function scrollRight() {
  document.querySelector(".privatestuffbox").scrollBy({
    left: 200,
    behavior: "smooth",
  });
}
document
  .getElementById("arrowfbleft")
  .addEventListener("click", function (event) {
    event.preventDefault();
    scrollLeft2();
  });
document
  .getElementById("arrowfbright")
  .addEventListener("click", function (event) {
    event.preventDefault();
    scrollRight2();
  });
function scrollLeft2() {
  document.querySelector(".feedbackoverlay").scrollBy({
    left: -200,
    behavior: "smooth",
  });
}
function scrollRight2() {
  document.querySelector(".feedbackoverlay").scrollBy({
    left: 200,
    behavior: "smooth",
  });
}
ScrollReveal().reveal(".sectiontitle", {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  easing: "ease-in-out",
  delay: 200,
});

ScrollReveal().reveal(".miniprojectbox", {
  origin: "bottom",
  distance: "100px",
  duration: 1000,
  easing: "ease-in-out",
  delay: 400,
});

ScrollReveal().reveal(".privatestuffbox", {
  origin: "bottom",
  distance: "100px",
  duration: 1000,
  easing: "ease-in-out",
  delay: 600,
});

ScrollReveal().reveal(".aboutthispagelayer", {
  origin: "bottom",
  distance: "100px",
  duration: 1000,
  easing: "ease-in-out",
  delay: 600,
});
ScrollReveal().reveal(".feedbackoverlay", {
  origin: "bottom",
  distance: "100px",
  duration: 1000,
  easing: "ease-in-out",
  delay: 600,
});
ScrollReveal().reveal(".aboutmecontainer", {
  origin: "bottom",
  distance: "100px",
  duration: 1000,
  easing: "ease-in-out",
  delay: 600,
});

ScrollReveal().reveal(".watercontainer", {
  origin: "bottom",
  distance: "100px",
  duration: 1000,
  easing: "ease-in-out",
  delay: 600,
});
ScrollReveal().reveal("nav", {
  origin: "top",
  distance: "50px",
  duration: 1000,
  easing: "ease-in-out",
  delay: 1,
  reset: true,
});

let numberDays;
let maxNumberDays;
const year = new Date().getFullYear();
const firstDayInYear = new Date(new Date().getFullYear(), 0, 1);
const currentDay = new Date();

function percent() {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    maxNumberDays = 366;
  } else {
    maxNumberDays = 365;
  }
  numberDays = Math.round(
    Math.abs(firstDayInYear - currentDay) / (1000 * 60 * 60 * 24)
  );
}
function days() {
  let filled = document.getElementById("timefilled");
  let percent = (numberDays / maxNumberDays) * 100;
  filled.style.width = percent + "%";
  document.getElementById("daysOver").innerHTML =
    numberDays + " / " + maxNumberDays + " Days";
  document.getElementById("daysPercent").innerHTML = percent.toFixed(1) + "%";
  document.getElementById("currentYear").innerHTML += year;
}
percent();
days();
document.getElementById("lastYear").innerHTML = year - 1;
document.getElementById("nextYear").innerHTML = year + 1;
if (window.matchMedia("(max-width: 768px)").matches) {
  document.querySelector(".projectbox").classList.add("hidden");
}
document.getElementById("closeProject").addEventListener("click", function () {
  if (!document.querySelector(".projectbox").classList.contains("hidden")) {
    document.querySelector(".projectbox").classList.add("hidden");
  } else {
    document.querySelector(".projectbox").classList.remove("hidden");
  }
});
document.getElementById("bar").addEventListener("click", function (e) {
  e.preventDefault();
  let bar = document.getElementById("menuBar");
  bar.classList.toggle("open");
  this.classList.add("opacity0");
  if (bar.classList.contains("open")) {
    this.classList.add("opacity0");
  } else {
    this.classList.remove("opacity0");
  }
});
document.addEventListener("click", function (e) {
  let bar = document.getElementById("menuBar");
  let barButton = document.getElementById("bar");

  if (!bar.contains(e.target) && !barButton.contains(e.target)) {
    bar.classList.remove("open");
    barButton.classList.remove("opacity0");
  }
});
document.getElementById("extendHome").addEventListener("click", function () {
  window.scrollBy({
    top: window.innerHeight,
    behavior: "smooth",
  });
});
document.getElementById("profile").addEventListener("click", function () {
  document.getElementById("profileBar").classList.toggle("open");
});
document.addEventListener("click", function (e) {
  let profile = document.getElementById("profileBar");
  let profileButton = document.getElementById("profile");
  if (!profile.contains(e.target) && !profileButton.contains(e.target)) {
    profile.classList.remove("open");
  }
});