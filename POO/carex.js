class Carro{// Classe Pai
    constructor(nome,portas){
        this.nome=nome
        this.portas=portas
        this.ligado = false
        this.cor=undefined
    }
    ligar(){
        this.ligado=true
    }
    desligar(){
        this.ligado=false
    }
    SetCor(cor){
        this.cor=cor
    }
    Info(){
        console.log('=========Populares===========')
        console.log(`Nome: ${this.nome}`)
        console.log(`Portas: ${this.portas}`)
        console.log(`Ligado: ${(this.ligado)?'Sim':'Não'}`)
        console.log(`Cor: ${this.cor}`)
    }
}
class Militar extends Carro{
    constructor(nome,portas,municao){
        super(nome,portas)
        this.blindagem=true
        this.municao=municao
        this.SetCor('Verde')
    }
    atirar(){
        if(this.municao>0){
            this.municao--
        }
    }
    recarregar(){
        this.municao+=50
    }
    Semblindagem(){
        this.blindagem=false
    }
     InfoM(){
         console.log('=========Militares========')
        console.log(`Nome: ${this.nome}`)
        console.log(`Portas: ${this.portas}`)
        console.log(`Ligado: ${(this.ligado)?'Sim':'Não'}`)
        console.log(`Cor: ${this.cor}`)
        console.log(`Blindagem: ${(this.blindagem)?'Sim':'Não'}`)
        console.log(`Munição: ${this.municao}`)
    }
}
class Esportivo extends Carro{
    constructor(nome,portas){
        super(nome,portas)
        this.velo=0
    }
    acelerar(){
        if(this.ligado==true){
       this.velo+=25}
    }
    frear(){
        if(this.ligado==true){
            this.velo-=10
        }
    }
    InfoEsp(){
        
        console.log('=========Esportivos=========')
        console.log(`Nome: ${this.nome}`)
        console.log(`Portas: ${this.portas}`)
        console.log(`Ligado: ${(this.ligado)?'Sim':'Não'}`)
        console.log(`Cor: ${this.cor}`)
        console.log(`Velocidade:${this.velo}`)
    }
}

//Instânciamento

//Carros
const Car1 = new Carro('Palio',2)
const Car2 = new Carro('Corsa',4)
const Car3 = new Carro('Siena',4)
//Militares
const Mili1 = new Militar("Tanque",1,100)
const Mili2 = new Militar("Bom de Guerra",2,30)
const Mili3= new Militar("Lutador",6,200)
//Esportivos
const Esp1 = new Esportivo("Camaro",2)
const Esp2 = new Esportivo("Lamborghini",2)
const Esp3 = new Esportivo("Bugatti",2)
//Chamando Metodos
Car1.ligar()
Car1.SetCor('Amarelo')
Car2.ligar()
Car2.SetCor('Preto')
Car3.desligar()
Car3.SetCor('Azul')
//Militares
Mili1.ligar()
Mili1.atirar()
Mili1.atirar()
Mili1.atirar()
Mili1.recarregar()
//
Mili2.ligar()
Mili2.atirar()
Mili2.atirar()
Mili2.atirar()
Mili2.atirar()
Mili2.recarregar()
//
Mili3.ligar()
Mili3.Semblindagem()
Mili3.atirar()
Mili3.atirar()
Mili3.atirar()
Mili3.atirar()
Mili3.recarregar()
//Esportivos
Esp1.ligar()
Esp1.SetCor('Vermelho')
Esp1.acelerar()
Esp1.acelerar()
Esp1.acelerar()
Esp1.acelerar()
Esp1.frear()
Esp1.frear()
//
Esp2.ligar()
Esp2.SetCor('Laranja')
Esp2.acelerar()
Esp2.acelerar()
Esp2.acelerar()
Esp2.acelerar()
Esp2.acelerar()
Esp2.acelerar()
Esp2.acelerar()
//
Esp3.SetCor('Marrom')

//Chamando os Objetos
Car1.Info()
Car2.Info()
Car3.Info()
//
Mili1.InfoM()
Mili2.InfoM()
Mili3.InfoM()
//
Esp1.InfoEsp()
Esp2.InfoEsp()
Esp3.InfoEsp()