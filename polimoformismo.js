class animal{
     constructor(color,tipo,raza){
        this.color=color
        this.tipo=tipo
        this.raza=raza
     }

     mascota(){
        return console.log(`el color de la mascota es ${this.color}`)
     }
}

class ani extends animal{
    mascota(){
        return console.log(`la mascota es de tipo ${this.tipo} `)
     }
}

class mal extends animal{
    mascota(){
        return console.log(`la mascota es de raza ${this.raza}`)
    }
}

let a1 = new ani("","Perro")
let a2 = new mal("","","Pitbul")
a1.mascota()
a2.mascota()
