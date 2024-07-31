let n = 0
let max =100
let pares = 0
let impar = 0
for(let i=n;i<max;i++){
    console.log(`cc${i}`)
    if(i%2==0){
        pares++
    }else{
        impar++
    }
}console.log(`pares${pares}`)
console.log(`Impares${impar}`)
//continue é usado para continua uma execução quando ela atender uma certa condição