const Box =document.querySelector('.box')
const Carros = ['Opala','Fiesta','Chevette','Palio','Corsa','Ford KA','Siena']
const CarrosSelect =document.getElementById('btnCursoSelecionado')
const RemoveElement =document.getElementById('btnRemoverCurso')
const AddElementBefore =document.getElementById('btnAdicionarNovoCursoa')
const AddElementAfter =document.getElementById('btnAdicionarNovoCursod')
const NameCarro = document.getElementById('nomeCurso')

const Tirarclasse=()=>{
    const CarrosSelect = [...document.querySelectorAll('.selecionado')]
    CarrosSelect.map((el)=>{
        el.classList.remove('selecionado')
        //Esta Função percorre os elementos selecionados e remove
    })

}
//Criando Uma Função Para Economizar codigo,pois irei chamar ela varias vezes
const CriarElemento=(carro)=>{
    const NovoElemento = document.createElement('div')
    NovoElemento.setAttribute("class","curso")
    NovoElemento.innerHTML =carro
    NovoElemento.addEventListener('click',(evt)=>{
        Tirarclasse()//Chamando a Função antes de Clicar no elemento
        evt.target.classList.toggle('selecionado')
    })
    return NovoElemento
}
Carros.map((el)=>{
    //Map ira percorrer todos os elemntos dentro do array e chamar a função de Criar elemnto para passar as configurações de elementos e atributos após isso adicionando eles a caixa de carros
    const NovoElemento = CriarElemento(el)
    Box.appendChild(NovoElemento)
})
const CarroSelect=()=>{//transformando em função para poder ser chamada varias ezes 
        const CarroSe =[...document.querySelectorAll('.selecionado')]
        return CarroSe[0]// Esta Retornando diretamente o carro selecionado
    }
    CarrosSelect.addEventListener('click',()=>{
        try{
        alert(` Carro selecionado: ${CarroSelect().innerHTML}`)//Chamando a função e passado oq esta escrito nela
    }catch(ex){
        alert('Selecione Um Curso')
    }
})
RemoveElement.addEventListener('click',()=>{
    try{
        CarroSelect().remove() // removendo a classe curso
    }catch(ex){
        alert('Selecione Um Curso')
    }
})
AddElementBefore.addEventListener('click',()=>{
    try{
        if(NameCarro.value != ""){//verificando se o input esta vazio{
            const CarroS = CarroSelect()
            const NewCarro=CriarElemento(NameCarro.value) //chamando a função para criar o elemento de acordo com o valor do input 
            Box.insertBefore(NewCarro,CarroS)//insert Before serve para adicionar antes, levando dois parâmetros que são o Elemento e após aonde vai ser adicionado ex:(NewCarro,Carro)
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
            const CarroS = CarroSelect()//Chamando a Função CarroSelect()
            const NewCarro=CriarElemento(NameCarro.value)
            Box.insertBefore(NewCarro,CarroS.nextSibling)//desta Vez para que ele adicione depois ira pegar o elemento e tornar ele como proximo irmão
        }else{
        alert('Digite Algo')
        }
        }catch(ex){
        alert('Selecione Um Curso')
        }
})