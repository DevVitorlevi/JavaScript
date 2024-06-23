function calcular(){
    let altura = document.getElementById('alt').value
    let peso = document.getElementById("pes").value
    let res = document.getElementById('res')
    if(altura.value.length == 0 || peso.value.length==0){
        window.alert("vazia")
    }
}