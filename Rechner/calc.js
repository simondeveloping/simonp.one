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
    if(number === "." && input.value.includes(".")){
        return;
    }
    if(input.value === "0" || input.value === ""){
        if(number ==="." && input.value === ""){    
            input.value = "0.";
        }else if(number === "." && input.value !== ""){
            input.value += ".";
        }
        else{
            input.value = number;
        }
    }else{
    input.value +=number;
    }
}))
document.getElementById("ac").addEventListener("click",function(event){
    input.value = "";
})
document.getElementById("operator").addEventListener("click",function(event){
    event.preventDefault();
    if(input.value === ""){
        return;
    }
    if(input.value < 0){
        input.value = input.value.replace("-","");
    }else{
        input.value = "-" + input.value;
    }
})
document.getElementById("equal").addEventListener("click",function(event){
    event.preventDefault();
    input.value = sum;
})