const Box =document.querySelector('.box')
const Carros = ['Opala','Fiesta','Chevette','Palio','Corsa','Ford KA','Siena']
const CarrosSelect =document.getElementById('btnCursoSelecionado')
const RemoveElement =document.getElementById('btnRemoverCurso')
const AddElementBefore =document.getElementById('btnAdicionarNovoCursoa')
const AddElementAfter =document.getElementById('btnAdicionarNovoCursod')
const NameCarro = document.getElementById('nomeCurso')

//Criando Uma Função Para Economizar codigo,pois irei chamar ela varias vezes
const CriarElemento=(carro)=>{
    const NovoElemento = document.createElement('div')
    NovoElemento.setAttribute("class","curso")
    NovoElemento.innerHTML =carro

    const comandos = document.createElement('div')
    comandos.setAttribute('class','comandos')

     const radio = document.createElement('input')
    radio.setAttribute('type','radio')
    radio.setAttribute('name','rb_curso')

    
    NovoElemento.appendChild(comandos)
    return NovoElemento
}
Carros.map((el)=>{
    //Map ira percorrer todos os elemntos dentro do array e chamar a função de Criar elemnto para passar as configurações de elementos e atributos após isso adicionando eles a caixa de carros
    const NovoElemento = CriarElemento(el)
    Box.appendChild(NovoElemento)
})
const RadioSelect=()=>{//transformando em função para poder ser chamada varias ezes 
        const radios =[...document.querySelectorAll('input[type=radio')]//pegando todos os inputs do tipo radio
        const radioSelect=radios.filter((ele)=>{// Esta fazendo a filtragem dos radios 
            return ele.checked // retornando somente se o elemento estiver selecionado
        })
        return radioSelect[0]// Esta deixando de ser um array e passando apenas a ser um elemento retornando o radio selecionado 
    }
    CarrosSelect.addEventListener('click',()=>{
        try{//Radio Selecionado Ira chamar a funçao radioSelect() para retornar o radio selecionado
        const RadioS = RadioSelect()
        const Carro = RadioS.parentNode.previousSibling.textContent// ira pegar e pai do radio select = class comados q ira pegar o irmão anterior = class curso  que ira pegar seu conteudo
        alert(`Carro Selecionado:$ {Carro}`)
        
    }catch(ex){
        alert('Selecione Um Curso')
    }
})
RemoveElement.addEventListener('click',()=>{
    try{
        const RadioS = RadioSelect()//Radio Selecionado Ira chamar a funçao radioSelect() para retornar o radio selecionado
        const Carro = RadioS.parentNode.parentNode// Esta pegando o pai do Radio selciondo que no caso é a class comandos e pegando o pai desta classe que seria a classe curso
        Carro.remove() // removendo a classe curso
    }catch(ex){
        alert('Selecione Um Curso')
    }
})
AddElementBefore.addEventListener('click',()=>{
    try{
        if(NameCarro.value != ""){//verificando se o input esta vazio{
            const RadioS = RadioSelect()
            const Carro = RadioS.parentNode.parentNode//peagndo a classe curso
            const NewCarro=CriarElemento(NameCarro.value) //chamando a função para criar o elemento de acordo com o valor do input 
            Box.insertBefore(NewCarro,Carro)//insert Before serve para adicionar antes, levando dois parâmetros que são o Elemento e após aonde vai ser adicionado ex:(NewCarro,Carro)
        }else{
            alert('Digite Algo')
        }
        }catch(ex){
        alert('Selecione Um Curso')
    }
})
AddElementAfter.addEventListener('click',()=>{
    try{
        if(NameCarro.value!=""){ //verificando se o input esta vazio
            const RadioS = RadioSelect()
            const Carro = RadioS.parentNode.parentNode
            const NewCarro=CriarElemento(NameCarro.value)
            Box.insertBefore(NewCarro,Carro.nextSibling)//desta Vez para que ele adicione depois ira pegar o elemento e tornar ele como proximo irmão
        }else{
        alert('Digite Algo')
        }
        }catch(ex){
        alert('Selecione Um Curso')
        }
})