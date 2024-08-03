class Car{
    constructor(cnome,ctipo){
        this.nome=cnome
        if(ctipo==1){
            this.tipo="Esportivo"
            this.vel=300
        }else if(ctipo == 2){
            this.tipo = "Popular"
            this.vel = 160
        }else if (ctipo == 2 ){
            this.tipo="Picapes"
            this.vel = 110
        }else if(ctipo==3){
            this.tipo="SUV"
            this.vel= 180
        }else{
            this.tipo="Militar"
            this.vel =100
        }
    }
    //Metodos
    info(){
        console.log(`Nome:${this.nome}`)
        console.log(`Tipo:${this.tipo}`)
        console.log(`Velocidade:${this.vel} Km/h`)
    }
    setNome(nome){
        this.nome=nome
    }
    setTipo(tipo){
        this.tipo=tipo
    }
    setVelo(velo){
        this.vel = velo
    }
}//O metodo Set como ja diz sua tradução tem a capacidade de alterar a propiedade de um objeto antes dele ser acionado    
var c1 = new Car ("Relâmpago Marquinhos",1)
var c2 = new Car ("Pálio 2 Portas",2)
var c3 = new Car ("BMW",3)
var c4 = new Car ("Tanque",4)

c1.setNome("UNO")
c1.setTipo("Popular")
c1.setVelo(500)
// Nesta ocasião a alteração de propiedade acontece mudando os valores definidos anteriomente
c1.info()
