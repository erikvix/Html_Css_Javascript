

document.getElementById("button").onclick = function(){
    const x = document.getElementById("x");
    const hot = document.getElementById("radio1");
    const warm = document.getElementById("radio2");
    const cold = document.getElementById("radio3");
    
    if(x.checked){
        if(hot.checked){
            document.getElementById("answer").innerHTML = "Hot coffee bought!"
        }
        else if(warm.checked){
            document.getElementById("answer").innerHTML = "Warm coffee bought!"      
        }
        else if(cold.checked){
            document.getElementById("answer").innerHTML = "Cold coffee bought!"
        }
        else
            document.getElementById("answer").innerHTML = "you need to choose your coffee."
    
    }
    else{
        document.getElementById("answer").innerHTML = "you must buy the coffee."
    }
    
}
document.getElementById("radio1").onclick = function(){
    const hot = document.getElementById("radio1");

    if(hot.checked){
        document.getElementById("answer2").innerHTML = "you choose hot coffee"
}
}
document.getElementById("radio2").onclick = function(){
    const warm = document.getElementById("radio2");
    if(warm.checked){
        document.getElementById("answer2").innerHTML = "you choose warm coffee"
    }
}
document.getElementById("radio3").onclick = function(){
    const cold = document.getElementById("radio3");

    if(cold.click){
        document.getElementById("answer2").innerHTML = "You choose cold coffee"
    }
}
