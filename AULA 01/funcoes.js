function somar_v1(){
    let n1 = 10;
    let n2 = 5;
    let resultado;
    resultado = n1 + n2;
    console.log('Resultado da soma: ' + resultado);
}
somar_v1();

function somar_v2(n1, n2){
    let resultado;
    resultado = n1 + n2;
    console.log('Resultado da soma: ' + resultado);
}
somar_v2(50, 65)

function somar_v3(n1, n2){
    return n1 + n2;
}
console.log('Resultado da soma: ' + somar_v3(5, 10));