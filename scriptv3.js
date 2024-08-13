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
    scrollLeft2();
})
document.getElementById("arrowfbright").addEventListener("click",function(event){
    event.preventDefault();
    scrollRight2();
})
function scrollLeft2(){
    document.querySelector(".feedbackoverlay").scrollBy({
        left:-200,
        behavior:"smooth"
    })
}
function scrollRight2(){
    document.querySelector(".feedbackoverlay").scrollBy({
        left:200,
        behavior:"smooth"
    })
}

ScrollReveal().reveal('.sectiontitle', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    delay: 200,
    reset:true
});

ScrollReveal().reveal('.projectbox', {
    origin: 'bottom',
    distance: '100px',
    duration: 1000,
    easing: 'ease-in-out',
    delay: 400,
    reset:true
});

ScrollReveal().reveal('.privatestuffbox', {
    origin: 'bottom',
    distance: '100px',
    duration: 1000,
    easing: 'ease-in-out',
    delay: 600,
    reset:true
});

ScrollReveal().reveal('.aboutthispagelayer', {
    origin: 'bottom',
    distance: '100px',
    duration: 1000,
    easing: 'ease-in-out',
    delay: 600,
    reset:true
});
ScrollReveal().reveal('.feedbackoverlay', {
    origin: 'bottom',
    distance: '100px',
    duration: 1000,
    easing: 'ease-in-out',
    delay: 600,
    reset:true
});