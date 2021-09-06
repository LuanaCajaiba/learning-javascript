//  global scope

this.name = "Luana"

console.log(this.name) //   Luana
console.log(this) //    {name:'Luana'}


function SayMyName(){
    console.log(this.name); //isso dará undefined, pois estamos no LOcalScope
}

SayMyName();