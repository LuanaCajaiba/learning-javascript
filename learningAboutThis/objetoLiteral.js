const Carro={
    marca:"VW",
    modelo: "Golf",
    info:function(){
        console.log("Marca: " + this.marca);
    }
}

const c2=Object.create(Carro)

console.log(Carro.marca);
console.log(Carro.modelo);

// mudando valores

Carro.marca="Honda"
Carro.modelo="HRV"

// Outra maneira de redefinir valores

Carro["marca"]="GM"
Carro["modelo"]="Camaro"