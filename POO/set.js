class Car{
    constructor(cnome,ctipo){
        this.nome=cnome
        if(ctipo==1){
            this.tipo="Esportivo"
            this.vel=300
        }else if(ctipo == 2){
            this.tipo = "Popular"
            this.vel = 160
        }else if (ctipo == 3 ){
            this.tipo="Picapes"
            this.vel = 110
        }else if(ctipo==4){
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

