/*
console.log('Somador de Números');
let somaTotal = 0;
let quantidade = prompt('Digite quantos números deseja escrever');
for (let i = 0; i < quantidade; i++) {  
    let numero = parseFloat(prompt(`Digite o número ${i + 1}:`));  
    somaTotal += numero; 
}  
console.log(somaTotal);
*/
/*
console.log('Contagem regresiva');
let contagem = 10; 

const contagemRegressiva = setInterval (() =>{
    if(contagem >0){
        console.log(contagem);
        contagem--;
    }else{
        clearInterval(contagemRegressiva);
        console.log('Lançamento');
    }

}, 1000);
*/
console.log('Balço financeiro Anual');

function balancofinanceiro(){
    let ganhosBrutos = prompt('Digite o ganho bruto anual da empresa:');
  
    for(let i=1; mes<=12;mes++){
        let gastos = prompt('Digite os gastos do mês:');

    }
    let saldoFinal = ganhosBrutos + gastos;

    console.log('Total de ganhos');
    console.log(ganhosBrutos);
    console.log('Total de gastos');
    console.log(gastos);
    console.log('Saldo Final');
    console.log(saldoFinal);

    if (saldoFinal > 0) {  
        console.log("A empresa teve lucro no ano.");  
    } else if (saldoFinal < 0) {  
        console.log("A empresa teve prejuízo no ano.");  
    } else {  
        console.log("A empresa não teve lucro nem prejuízo.");  
    }  
}


