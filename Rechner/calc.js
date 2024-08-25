let sum;
let value1;
let value2;
let input = document.getElementById("value");
document.getElementById("plus").addEventListener("click", function(event){
    event.preventDefault();
    
})
document.querySelectorAll(".gray").forEach(button => button.addEventListener("click",function(event){
    event.preventDefault();
    let number = this.textContent.trim();
    if(input.value === "0" || input.value === ""){
        if(number === "." && input.value.includes(".")){
            return;
        }
        if(number ==="."){
            input.value += "0.";
        }else{
        input.value = number;
        }
    }else{
    input.value +=number;
    }
}))
document.getElementById("ac").addEventListener("click",function(event){
    input.value = "";
})
