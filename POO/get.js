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
    getInfo(){
        return [this.nome,this.tipo,this.vel]
    }//O metodo Get serve para retornar as propiedades  do objetos
}
var c1 = new Car ("Relâmpago Marquinhos",1)
var c2 = new Car ("Pálio 2 Portas",2)
var c3 = new Car ("BMW",3)
var c4 = new Car ("Tanque",4)
console.log(c1.getInfo())
//posso escolher qual propiedade usar ex: [0] esse se refere ao nome