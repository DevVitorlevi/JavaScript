const Box_1 = document.getElementById('box1')
const Box_2 = document.getElementById('box2')
const Trasferir = document.getElementById('transferir')
const Cursos = [...document.querySelectorAll('.curso')]
//Espalhando os Elementos Tornado eles um Array ao inves de HTMLCollection

Cursos.map((el) =>{
    el.addEventListener('click',(evt)=>{ //quando clicar no curso 
        const curso = evt.target //Target Usado Para demostar o elemento que foi disparado
        curso.classList.toggle('selecionado')//toggle é uma maneira de conferir se a classe esta acionada ou nao 
    })
})

Trasferir.addEventListener('click',()=>{
    const Select = [...document.querySelectorAll('.selecionado')]
    const NotSelect = [...document.querySelectorAll(".curso:not(.selecionado)")]//dentro da classe curso os que n tem a classe selecionado
    Select.map((el)=>{
        Box_2.appendChild(el)//esta Acrescentando os Elementos na Caixa 2
    })
    NotSelect.map((el) =>{
        Box_1.appendChild(el)//Esta fazendo o retorno dos Elemntos para a caixa 1 
    })
})
