document.getElementById("savebutton").addEventListener("click", function (event) {
    event.preventDefault();
    addToList();
});
let list = ["rgb(253, 95, 95)", "rgb(2, 104, 110)", "rgb(253, 219, 69)", "rgb(123, 237, 110)"];
function addToList() {
    let inputValue = document.getElementById("wheelinput").value;
    if (document.getElementById("elements").children.length > 3) {
        alert("Maximum 4 elements...");
        return;
    }
    if (inputValue.trim() !== "") {
        let li = document.createElement("li");
        let button = document.createElement("button");
        li.textContent = inputValue;
        let color = list.pop();
        li.style.color = color;
        li.dataset.color = color;
        button.textContent = "X"
        button.onclick = function () { removeFromList(li, button); };
        document.getElementById("buttons").appendChild(button);
        document.getElementById("elements").appendChild(li);
        document.getElementById("wheelinput").value = '';
    }
}
function removeFromList(li, button) {
    document.getElementById("elements").removeChild(li);
    document.getElementById("buttons").removeChild(button);
    let color = li.dataset.color;
    list.push(color);
}

document.getElementById("spinbutton").addEventListener("click", function (event) {
    event.preventDefault();
    spinWheel();
});

function spinWheel() {
    var wheel = document.querySelector('.wheel');

    // Remove any existing transform transition
    wheel.style.transition = 'none';
    wheel.style.transform = 'rotate(0deg)';

    // Force a reflow to apply the reset transformation
    wheel.offsetHeight; // This line is necessary to reset the transformation

    // Calculate a random rotation between 0 and 360 degrees plus extra rotations for effect
    var randomDegree = Math.floor(Math.random() * 360) + 360 * 5; // 5 rotations + random degree
    wheel.style.transition = 'transform 4s ease-out'; // Animation effect
    wheel.style.transform = `rotate(${randomDegree}deg)`;
}
document.getElementById("standardbutton").addEventListener("click", function (event) {
    event.preventDefault();
    if(document.getElementById("elements").children.length >0){
        alert("There are already elements...");
        return;
    }
    let list = ["Döner","Shawarma","Mensa","Anderes"]
    for(let i = 0; i<4;i++){
        document.getElementById("wheelinput").value = list[i];
        document.getElementById("savebutton").click();
    }
    
})