"use strict";

//instanciando
this.name = "Renato";

function SayMyName(){
    console.log(this.name);
}

const user = {
    name: "Diego",
    SayMyName: function(){
        console.log(this.name);
    }
}


SayMyName();

user.SayMyName();