//carregando campos do html na tela para o js
//inputs
var inPrimeiro = document.getElementById("inPrimeiro"); 
var inMeio = document.getElementById("inMeio"); 
var inUltimo = document.getElementById("inUltimo"); 
var inPeso = document.getElementById("inPeso"); 
var inAltura = document.getElementById("inAltura"); 
//out
var pCompleto = document.getElementById("pCompleto"); 
//---botões
var btAdicionaNoVetor = document.getElementById("btAdicionaNoVetor"); 
var btExibirTodos = document.getElementById("btExibirTodos"); 
//--vetores de informação 
var vetorPessoas = [];

//adciona o evento de click no botão adcionar nos vetores
btAdicionaNoVetor.addEventListener("click",function(){
    adcionaPessoasNoVet();
    //limpa campos de enrtrada
    limpaCampos();
});
//adciona o evento de click no botão exibir todas
btExibirTodos.addEventListener("click",function(){
    exibeTodas();
});

//adciona um nome nos vetores
//Exemplo sem parametros
function adcionaPessoasNoVet(){
    //adcionando os valores 
    var primeiroNome = inPrimeiro.value; 
    var meioNome = inMeio.value;
    var ultimoNome = inUltimo.value; 
    var peso = inPeso.value;
    var altura = inAltura.value;

    //criando uma nova pessoa tipo --custom data type--
    var novaPessoa = {
    primeiroNome: primeiroNome,
    meioNome: meioNome,
    ultimoNome: ultimoNome,
    peso: peso,
    altura: altura

    };
    vetorPessoas.push(novaPessoa);

console.log(vetorPessoas);
}

//function Limpa campos
function limpaCampos(){
    inPrimeiro.value = "";
    inMeio.value = "";
    inUltimo.value = "";
}

function calculaIMC(peso, altura){
    if (peso =="" || altura ==""){
        alert('Há campos em branco');

    }else if (isNaN(peso) || isNaN(altura)){
        alert('Digitar números');
    }else{
        return((peso/(Math.pow(altura,2))).toFixed(2))
    }
}

function exibeTodas(){
   ulTodos.textContent= '';
   //limpando 

    for (var i = 0; i < vetorPessoas.length; i++){
        //criando novo item de lista (tag li vazia)
        var li = document.createElement('li');

        var linha = (
             'nome: ' + vetorPessoas[i].primeiroNome + ', '
            +'nome do meio: ' + vetorPessoas[i].meioNome + ', '
            +'altura: ' + vetorPessoas[i].altura + ', '
            +'peso: ' + vetorPessoas[i].peso + ', '
            +'IMC: '
            + calculaIMC (vetorPessoas[i].peso,
                vetorPessoas[i].altura));

        li.textContent = linha;
        //Adcionando item na lista
        ulTodos.appendChild(li);
        var br = document.createElement('br');
        ulTodos.appendChild(br);

    }
   
};

        
