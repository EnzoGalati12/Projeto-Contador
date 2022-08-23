const incre = document.getElementById("incremento");
const zero = document.getElementById("zerar");
const decre = document.getElementById("decremento");

let  p = document.getElementById("contar")

let cont = 0;

p.innerHTML = cont;

incre.addEventListener('click' , function(){
    cont++;
    p.innerHTML = cont;
})

decre.addEventListener('click' , function(){
    cont--;
    p.innerHTML = cont;
})

zero.addEventListener('click' , function(){
    cont = 0;
    p.innerHTML = cont;
})


