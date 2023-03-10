let altura;
let peso;
let idade;
let taxa;

taxa = peso / (altura * altura)


 document.getElementById("button").onclick = function(){
    peso = document.getElementById("weight").value;
    peso = Number(peso);

    altura = document.getElementById("height").value;
    altura = Number(altura);

    idade = document.getElementById("age").value;
    idade = Number(idade);

    document.getElementById("answer").innerHTML = "Seu metabolismo basal é  " + taxa    
    console.log(Math.round(taxa))


    taxa = 665 + (13.7 * peso) + (5.0 * altura) - (6.8 * idade)


 }