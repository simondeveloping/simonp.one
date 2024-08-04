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