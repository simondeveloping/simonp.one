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

ScrollReveal().reveal(".projectbox", {
  origin: "top",
  distance: "50px",
  duration: 1000,
  easing: "ease-in-out",
  delay: 1,
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
document
  .getElementById("projectArrowLeft")
  .addEventListener("click", function () {
    const projectBox = document.querySelector(".projectbox");
    if (projectBox.scrollLeft === 0) {
      projectBox.scrollTo({
        left: projectBox.scrollWidth,
        behavior: "smooth",
      });
    } else {
      projectBox.scrollBy({
        left: -1000,
        behavior: "smooth",
      });
    }
    toggleSquare1();
  });
document
  .getElementById("projectArrowRight")
  .addEventListener("click", function () {
    const projectBox = document.querySelector(".projectbox");
    const maxScrollLeft = projectBox.scrollWidth - projectBox.clientWidth;
    if (projectBox.scrollLeft >= maxScrollLeft) {
      projectBox.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      projectBox.scrollBy({
        left: 1000,
        behavior: "smooth",
      });
    }
    toggleSquare1();
  });
function toggleSquare1() {
  let square1 = document.getElementById("square1");
  let square2 = document.getElementById("square2");
  if (square1.classList.contains("squareOn")) {
    square1.classList.remove("squareOn");
    square2.classList.add("squareOn");
  } else {
    square1.classList.add("squareOn");
    square2.classList.remove("squareOn");
  }
}
let squareCount = 0;
document
  .getElementById("miniprojectArrowLeft")
  .addEventListener("click", function () {
    document.querySelector(".miniprojectbox").scrollBy({
      left: -630,
      behavior: "smooth",
    });
    squareCount--;
    resetCount();

    toggleSquare2();
  });
document
  .getElementById("miniprojectArrowRight")
  .addEventListener("click", function () {
    document.querySelector(".miniprojectbox").scrollBy({
      left: 630,
      behavior: "smooth",
    });
    squareCount++;
    resetCount();

    toggleSquare2();
  });
function toggleSquare2() {
  let square1 = document.getElementById("miniSquare1");
  let square2 = document.getElementById("miniSquare2");
  let square3 = document.getElementById("miniSquare3");
  if (squareCount === 0) {
    square1.classList.add("squareOn");
    square2.classList.remove("squareOn");
    square3.classList.remove("squareOn");
  }
  if (squareCount === 1) {
    square1.classList.remove("squareOn");
    square2.classList.add("squareOn");
    square3.classList.remove("squareOn");
  }
  if (squareCount === 2) {
    square1.classList.remove("squareOn");
    square2.classList.remove("squareOn");
    square3.classList.add("squareOn");
  }
}
function resetCount() {
  if (squareCount < 0) {
    squareCount = 0;
  }
  if (squareCount > 2) {
    squareCount = 2;
  }
}
document.getElementById("feedbackUp").addEventListener("click", function () {
  scrollUp();
});
document.getElementById("feedbackDown").addEventListener("click", function () {
  scrollDown();
});
function scrollUp() {
  document.querySelector(".feedbackoverlay").scrollBy({
    top: -200,
    behavior: "smooth",
  });
}
function scrollDown() {
  document.querySelector(".feedbackoverlay").scrollBy({
    top: 200,
    behavior: "smooth",
  });
}
window.addEventListener('scroll', function() {
  const header = document.getElementById('stickyHeader');
  const scrollY = window.scrollY;

  if (scrollY === 0) {
    // Ganz oben - Header unsichtbar
    header.style.opacity = '0';
  } else {
    // Header sichtbar
    header.style.opacity = '1';
    
    // Prüfe die Positionen und ändere die Farbe
    const sections = document.querySelectorAll('.bg-statsOverlay, .bg-7, .bg-aboutme');
    let foundMatch = false;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= 0) {
        header.style.backgroundColor = 'white';
        header.style.color = 'black';
        foundMatch = true;
      }
    });

    // Wenn keine der obigen Sektionen sichtbar ist, setze die Standardfarbe
    if (!foundMatch) {
      header.style.backgroundColor = '#101314'; // Standardhintergrundfarbe
      header.style.color = 'white'; // Standardtextfarbe
    }
  }
});

document.getElementById("switch").addEventListener("change", function () {
  if(this.checked){
    switchBackground();
  }
});
function switchBackground() {
  const element = document.getElementById("home");


  setInterval(function() {
    element.style.backgroundColor = getRandomColor();
    
  }, 500); 
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}