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
document.getElementById("suggestionsubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const email = "simon.pham@web.de";
    const subject = "Feedback Website";
    const list = document.getElementsByTagName('li');
    let mailtext = '';
    for (let i = 0; i < list.length; i++) {
        mailtext += list[i].textContent + '\n';
        console.log(mailtext);
    }
    const body = encodeURIComponent(mailtext);
    suggestionsubmit.href = `mailto:${email}?subject=${(subject)}&body=${body}`;
    window.location.href = suggestionsubmit.href;
})
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