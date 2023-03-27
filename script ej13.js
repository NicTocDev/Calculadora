

let respuesta
let num1 
let num2
let op
let res

const cuenta=() =>{
    if( op == "-"){
        res = num1 - num2
    }else if(op == "+"){
        res = Number(num1) + Number(num2)
    }else if(op == "*"){
        res = num1 * num2
    }else if(op == "/"){
        res = num1 / num2
    }else if(op == "^"){
        res = num1 ^ num2
    }else{
        alert("Ha ingresado un operador incorrecto")
    }
}

const resul=() =>{
    if( isNaN(res)){
        alert("Algo salio mal, intente nuevamente")
    }else{
        resultado.innerHTML = `<div>
    <h2> El resultado es : ${res}</h2>
    </div>`
    }

}

const calcHTML = document.getElementById("calc")
calcHTML.addEventListener("submit", (event) =>[
    event.preventDefault(),
    num1= calcHTML.num1.value,
    op= calcHTML.op.value,
    num2= calcHTML.num2.value,
    cuenta(), 
    resul()
    
])


//hola

