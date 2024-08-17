let stop = false;
let tmp = true;
function pictoggle(){
    let pic = document.getElementById("picture");
    if(tmp){
        pic.innerHTML = "<img src='yes.png'>";
    }else{
        pic.innerHTML = "<img src='no.png'>";
    }
    tmp = !tmp;
    if(!stop){
        setTimeout(pictoggle,100);
    }
}
pictoggle();

document.getElementById("stop").addEventListener("click",function(){
    if(!stop){
    stop = true;
    }else{
        stop = false;
        pictoggle();
    }
})
