class Car{
    constructor(cnome,ctipo,){
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
    info(){
        console.log("-------------------")
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocidade: ${this.vel} Km/h`)
    }
}
    var c1 = new Car ("Relâmpago Marquinhos",1)
    var c2 = new Car ("Pálio 2 Portas",2)
    var c3 = new Car ("BMW",3)
    var c4 = new Car ("Tanque",4)
    c1.info()
    c2.info()
    c3.info()
    c4.info()