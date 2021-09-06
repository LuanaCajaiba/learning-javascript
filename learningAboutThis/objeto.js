//  Exemplo de objeto

let carro = {
    marca: "Fiat",
    preco: "50.000",

    andar: function(){
        return console.log('andou');
    }
}

console.log(carro.andar);



//  códifo em jquery

function $(nome){
    return{
        hide(){
            console.log('Esonder o ' + nome);
        }
    }
}

$('Luana').hide();