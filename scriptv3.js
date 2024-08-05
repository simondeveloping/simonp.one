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
document.getElementById("login-form").addEventListener("submit", async function (event) {
    event.preventDefault();
    let password = document.getElementById('passwordforprivat').value;
    let encrypt = await decrypt(password);
    if (encrypt === "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08") {
        document.getElementById("privatebox1").href = "/pinguin/pinguin";
        document.getElementById("privatebox1").style.e;

        document.getElementById("privatebox2").href = "/pinguin/pinguin";
        document.getElementById("privatebox3").href = "/pinguin/pinguin";
        document.getElementById("privateboxout1").style.backgroundColor = "white";
        document.getElementById("privateboxout2").style.backgroundColor = "white";
        document.getElementById("privateboxout3").style.backgroundColor = "white";
    } else {
        alert("Wrong password");
    }
})
async function decrypt(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
}