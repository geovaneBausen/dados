function calculaIMC(peso, altura){
    if (peso =="" || altura ==""){
        alert('Há campos em branco');

    }else if (isNaN(peso) || isNaN(altura)){
        alert('Digitar números');
    }else{
        return((peso/(Math.pow(altura,2))).toFixed(2))
    }
}

let resultadoIMC = calculaIMC(84, 1.89);
console.log("Seu IMC é:", resultadoIMC);
