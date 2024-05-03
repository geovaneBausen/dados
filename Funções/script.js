let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let bt = document.getElementById('bt');

//clique no botão 
bt.addEventListener('click', function(){
out.textContent = dividir(Number(n1.value),Number( n2.value));
});//para alterar a função bastaria trocar o nome

function somar(numero1, numero2) {
    return numero1 + numero2;
}

//
function dividir (numerador, denominador){
    if(denominador==0){
        alert('não pode dividir por zero arrombado')
    }else{
        return (numerador)/(denominador);
    }
}