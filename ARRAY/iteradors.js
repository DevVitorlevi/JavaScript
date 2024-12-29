const Linguagens = ['HTML','CSS','JS','NODE','REACT','MYSQL']

Linguagens.pop()// Remove o ultimo elemento do array no Caso o Mysql

Linguagens.push('C#')//adiciona na ultima posição um elemento

Linguagens.shift()//remove o primeiro elemento no caso HTML

Linguagens.unshift('PYTHON')//adiciona na primeira posição um elemento

Linguagens.splice(2,0,'GO','JAVA')//ADICIONA NO INDEX 2 GO E JAVA MAS NAO  REMOVEU NENHUM ELEMENTO 
Linguagens.splice(3,1)// removeu o elemento no indice 3


const AlgumasLinguagens = Linguagens.slice(2)// começa um array novo apartir do indice informado
const AlgumasLinguagens2 = Linguagens.slice(2,4) // começa um array novo apartir do indice informado e vai ate o index informado, mas nao considera ele
console.log(AlgumasLinguagens2)