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
document.getElementById("suggestionsubmit").addEventListener("click",function(event){
    event.preventDefault();
    const email = "simon.pham@web.de";
    const subject = "Feedback Website";
    const list = document.getElementsByTagName('li');
    let mailtext = '';
    for(let i = 0; i<list.length;i++){
        mailtext += list[i].textContent + '%0A';
        console.log(mailtext);
    }
    const body = encodeURIComponent(mailtext);
    suggestionsubmit.href = `mailto:${email}?subject=${(subject)}&body=${body}`;
    window.location.href = suggestionsubmit.href;
})