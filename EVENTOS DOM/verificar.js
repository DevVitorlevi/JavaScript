const Box = document.getElementById('box1')
const cursos = document.querySelectorAll('.curso')

console.log(cursos[0].children.length > 0 ? 'Possui Filhos' : 'Não Possui Filhos')

Box.firstElementChild.innerHTML ='Teste'