let hero = {
    name:   "Sparhawk",
    age:    32,
    tipo:   ["guerreiro", "mago", "monge", "ninja"],
    ataque: ["usou espada", "usou magia", "usou artes marciais", "usou shuriken"]
}

let classe = hero.tipo[1]
let ataque = ""

function criarClasse(tipo) {
    if (tipo === hero.tipo[0]){
        ataque = hero.ataque[0]
    }
    else if (tipo === hero.tipo[1]){
        ataque = hero.ataque[1]
    }
    else if (tipo === hero.tipo[2]){
        ataque = hero.ataque[2]
    }
    else if (tipo === hero.tipo[3]){
        ataque = hero.ataque[3]
    }
    else {
        ataque = "não usou ataque pois não tem classe válida"
    }
return ataque
}

criarClasse(classe)

console.log(`O ${classe} atacou usando ${ataque}`)