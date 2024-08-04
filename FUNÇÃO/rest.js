function fat(...valores){
    let res =1
    for ( v of valores){
        res*=v
    }
    return res
}console.log(fat(5,4,3,2,1))
//rest posibilita voce passar quantos parametros voce desejar em uma função