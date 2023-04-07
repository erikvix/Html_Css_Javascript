let increase = 0
let decrease;
let reset;
let pontos


document.getElementById("increase").onclick = function(){
    increase += 1
    document.getElementById("h1").innerHTML = increase

}

document.getElementById("reset").onclick = function(){
    increase = 0
    reset = 0
    document.getElementById("h1").innerHTML = reset

}

document.getElementById("decrease").onclick = function(){
    increase -= 1
    
    document.getElementById("h1").innerHTML = increase
    

}


document.getElementById("pontos").e