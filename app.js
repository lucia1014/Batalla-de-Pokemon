
//1. Escribir la palabra reservada class seguida del nombre de la clase
class Pokemon {
    // 2. Definir los atributos, esto se hace dentro del constructir
    constructor(nombre, nivelAtaque, nivelDeVida) {
        this.nombre = nombre;
        this.nivelAtaque = nivelAtaque;
        this.nivelDeVida = nivelDeVida;
    }

    // 3. Definir los metodos de la clase.
    // Cuando yo defini un metodo necesito pensar en las siguientes cosas:
    // - La accion a realizar
    // - Que info necesito para realizar esa accion.
    atacar(pokemon) {
        console.log('------Comenzando ataque-------');
        console.log(`El ${this.nombre} esta atacando a ${pokemon.nombre}`);
        console.log(`El nivel de vida de ${pokemon.nombre} ANTES del ataque es : ${pokemon.nivelDeVida}`);
        console.log(`Atacando con nivel de ataque ${this.nivelAtaque}...`);
        pokemon.nivelDeVida -= this.nivelAtaque;
        console.log(`El nivel de vida de ${pokemon.nombre} DESPUES del ataque es : ${pokemon.nivelDeVida}`);
    }
}

// Para crear una clase hija necesitamos conocer la clase padre y crear una relacion entre ellas
// Esta relacion se crea con la palabras reservada 'extends'.
class PokemonFuego extends Pokemon {
    constructor(nombre, nivelAtaque, nivelDeVida, colorDeFlama) {
        // La clase hija debe mandar a llamar al constructor de la clase padre.
        // Esto se hace con el metodo super() que debe recibir los parametros del costructor de la clase padre.
        super(nombre, nivelAtaque, nivelDeVida);
        this.colorDeFlama = colorDeFlama;
    }

    lanzarFuego(pokemon) {
        console.log('------Comenzando ataque-------');
        console.log(`El ${this.nombre} esta atacando a ${pokemon.nombre}`);
        console.log(`El nivel de vida de ${pokemon.nombre} ANTES del ataque es: ${pokemon.nivelDeVida}`);
        console.log(`Quemando con nivel de ataque ${this.nivelAtaque}...`);
        pokemon.nivelDeVida -= this.nivelAtaque;
        console.log(`El nivel de vida de ${pokemon.nombre} DESPUES del ataque de fuego ${this.colorDeFlama} es: ${pokemon.nivelDeVida}`);
    }
/* //Sobreescritura -> 
    atacar(pokemon){
        this.
    } */
}

class PokemonAgua extends Pokemon {
    constructor(nombre, nivelAtaque, nivelDeVida, presion) {
        super(nombre, nivelAtaque, nivelDeVida);
        this.presion = presion;

    }

    lanzarAgua(pokemon) {
        console.log('------Comenzando ataque-------');
        console.log(`El ${this.nombre} esta atacando a ${pokemon.nombre}`);
        console.log(`El nivel de vida de ${pokemon.nombre} ANTES del ataque es : ${pokemon.nivelDeVida}`);
        console.log(`Atacando con nivel de ataque ${this.nivelAtaque}...`);
        pokemon.nivelDeVida -= this.nivelAtaque;
        console.log(`El nivel de vida de ${pokemon.nombre} DESPUES del ataque de agua nivel ${this.presion} es: ${pokemon.nivelDeVida}`);
    }
}

class PokemonPlanta extends Pokemon {
    constructor(nombre, nivelAtaque, nivelDeVida, tormentaHojas) {
        super(nombre, nivelAtaque, nivelDeVida);
        this.tormentaHojas = tormentaHojas;

    }

    lanzarHojas(pokemon) {
        console.log('------Comenzando ataque-------');
        console.log(`El ${this.nombre} esta atacando a ${pokemon.nombre}`);
        console.log(`El nivel de vida de ${pokemon.nombre} ANTES del ataque es : ${pokemon.nivelDeVida}`);
        console.log(`Atacando con nivel de ataque ${this.nivelAtaque}...`);
        pokemon.nivelDeVida -= this.nivelAtaque;
        console.log(`El nivel de vida de ${pokemon.nombre} DESPUES de la tormenta de hojas nivel ${this.tormentaHojas} es: ${pokemon.nivelDeVida}`);
    }
}

class PokemonElectrico extends Pokemon {
    constructor(nombre, nivelAtaque, nivelDeVida, voltaje) {
        super(nombre, nivelAtaque, nivelDeVida);
        this.voltaje = voltaje;

    }

    lanzarRayo(pokemon) {
        console.log('------Comenzando ataque-------');
        console.log(`El ${this.nombre} esta atacando a ${pokemon.nombre}`);
        console.log(`El nivel de vida de ${pokemon.nombre} ANTES del ataque es : ${pokemon.nivelDeVida}`);
        console.log(`Electrocutando con nivel de ataque ${this.nivelAtaque}...`);
        pokemon.nivelDeVida -= this.nivelAtaque;
        console.log(`El nivel de vida de ${pokemon.nombre} DESPUES del ataque de voltaje nivel ${this.voltaje} es: ${pokemon.nivelDeVida}`);
    }
}

function batalla(pokemon1, pokemon2) {
    const pelear = (atacante, oponente) => {
        //instanceof -> <objeto> instanceof <la clase a revisar>
      if (atacante instanceof PokemonFuego) { //instanceof se utiliza cuando necesite confirmar el tipo de un objeto en tiempo de ejecución.
        atacante.lanzarFuego(oponente);
      } else if (atacante instanceof PokemonAgua) {
        atacante.lanzarAgua(oponente);
      } else if (atacante instanceof PokemonPlanta) {
        atacante.lanzarHojas(oponente);
      } else if (atacante instanceof PokemonElectrico) {
        atacante.lanzarRayo(oponente);
      }
    };
  
    pelear(pokemon1, pokemon2);
    pelear(pokemon2, pokemon1);
  }


const pokemon1 = new PokemonFuego('Charmander', 10, 300, 'Azul');
const pokemon2 = new PokemonAgua('Squirtle', 13, 250, 7);
const pokemon3 = new PokemonPlanta('Bulbasaur', 15, 200, 'alta');
const pokemon4 = new PokemonElectrico('Raichu', 20, 350, 6);

/* pokemon1.atacar(pokemon2);
pokemon2.atacar(pokemon1);

pokemon1.atacar(pokemon2);
pokemon2.lanzarFuego(pokemon1);

pokemon3.lanzarAgua(pokemon4);
pokemon4.lanzarRayos(pokemon3); */

batalla(pokemon1, pokemon2);
batalla(pokemon3, pokemon4);



// Ejercicio
// 1. Crear otros dos tipos de Pokemon
// 2. Agregar un atributo y un metodo especifico a cada tipo de Pokemon creado.
// 3. Van a crear una funcion que reciba como parametros a 2 Pokemones.
//      Esta funcion debe detectar automaticamente el tipo de Pokemon que recibe como parametro y atacar con su ataque especial
//      Pista: Investigar la palabra reservada typeof de js 
//      Pista alternativa: instanceofc 