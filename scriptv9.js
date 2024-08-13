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

document.getElementById("arrowleft").addEventListener("click",function(event){
    event.preventDefault();
    scrollLeft1();
})
document.getElementById("arrowright").addEventListener("click",function(event){
    event.preventDefault();
    scrollRight1();
})
function scrollLeft1(){
    document.querySelector(".projectbox").scrollBy({
        left:-200,
        behavior:"smooth"
    })
}
function scrollRight1(){
    document.querySelector(".projectbox").scrollBy({
        left:200,
        behavior:"smooth"
    })
}
document.getElementById("privatearrowleft").addEventListener("click",function(event){
    event.preventDefault();
    scrollLeft();
})
document.getElementById("privatearrowright").addEventListener("click",function(event){
    event.preventDefault();
    scrollRight();
})
function scrollLeft(){
    document.querySelector(".privatestuffbox").scrollBy({
        left:-200,
        behavior:"smooth"
    })
}
function scrollRight(){
    document.querySelector(".privatestuffbox").scrollBy({
        left:200,
        behavior:"smooth"
    })
}
document.getElementById("arrowfbleft").addEventListener("click",function(event){
    event.preventDefault();
    scrollLeft();
})
document.getElementById("arrowfbright").addEventListener("click",function(event){
    event.preventDefault();
    scrollRight();
})
function scrollLeft(){
    document.querySelector(".feedbackoverlay").scrollBy({
        left:-200,
        behavior:"smooth"
    })
}
function scrollRight(){
    document.querySelector(".feedbackoverlay").scrollBy({
        left:200,
        behavior:"smooth"
    })
}

