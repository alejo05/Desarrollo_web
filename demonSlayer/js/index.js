const sectionAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonPersonaje = document.getElementById('boton-personaje')
const botonReiniciar = document.getElementById('reiniciar')
const sectionSeleccionarPersonaje = document.getElementById('seleccionar-personaje')
const spanPersonajeJugador = document.getElementById('personaje-jugador')
const spanPersonajeRival = document.getElementById('personaje-rival')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasRival = document.getElementById('vidas-rival')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelRival = document.getElementById('ataques-del-rival')
const mensajes = document.getElementById('resultado')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let personajes = []
let ataqueJugador
let ataqueRival
let opcionDePersonaje
let inputTanjiro
let inputZenitsu
let inputInosuke
let personajeJugador
let ataquesPersonaje
let botonPiedra
let botonPapel
let botonTijera
let vidasJugador = 3 
let vidasRival = 3

class Personaje{
  constructor(nombre, imagen, vida){
    this.nombre = nombre
    this.imagen = imagen
    this.vida = vida
    this.ataques = []
  }
}

let tanjiro = new Personaje('Tanjiro', './assets/tanjiro.png', 3)
let zenitsu = new Personaje('Zenitsu', './assets/zenitsu.png', 3)
let inosuke = new Personaje('Inosuke', './assets/inosuke.png', 3)

tanjiro.ataques.push(
  {nombre: '✊🏽', id: 'boton-piedra'},
  {nombre: '✋🏽', id: 'boton-papel'},
  {nombre: '✌🏽', id: 'boton-tijera'}
)
zenitsu.ataques.push(
  {nombre: '✊🏽', id: 'boton-piedra'},
  {nombre: '✋🏽', id: 'boton-papel'},
  {nombre: '✌🏽', id: 'boton-tijera'}
)
inosuke.ataques.push(
  {nombre: '✊🏽', id: 'boton-piedra'},
  {nombre: '✋🏽', id: 'boton-papel'},
  {nombre: '✌🏽', id: 'boton-tijera'}
)

personajes.push(tanjiro, zenitsu, inosuke)


function iniciarJuego(){  
  sectionAtaque.style.display = 'none'  
  personajes.forEach((personaje) => {
    opcionDePersonaje = `
    <input type="radio" name="personajes" id=${personaje.nombre}>
    <label class="tarjeta-personaje" for=${personaje.nombre}>
      <p>${personaje.nombre}</p>
      <img src=${personaje.imagen} alt=${personaje.nombre}>
    </label>
    `
    contenedorTarjetas.innerHTML += opcionDePersonaje
    inputTanjiro = document.getElementById('Tanjiro')
    inputZenitsu = document.getElementById('Zenitsu')
    inputInosuke = document.getElementById('Inosuke')
  })

  sectionReiniciar.style.display = 'none'  
  botonPersonaje.addEventListener('click', seleccionarPersonajeJugador)      
  botonReiniciar.addEventListener('click', reiniciarJuego) 
}

function seleccionarPersonajeJugador(){  
  sectionSeleccionarPersonaje.style.display = 'none'  
  sectionAtaque.style.display = 'flex'   
  
  if(inputTanjiro.checked){
    spanPersonajeJugador.innerHTML = inputTanjiro.id
    personajeJugador = inputTanjiro.id
  }else if(inputZenitsu.checked){
    spanPersonajeJugador.innerHTML = inputZenitsu.id
    personajeJugador = inputZenitsu.id
  }else if(inputInosuke.checked){
    spanPersonajeJugador.innerHTML = inputInosuke.id
    personajeJugador = inputInosuke.id
  }else{
    alert('Selecciona un personaje')
  } 

  extraerAtaques(personajeJugador)
  seleccionarPersonajeRival()
}

function extraerAtaques(personajeJugador){
  let ataques
  for (let i = 0; i < personajes.length; i++) {
    if(personajeJugador === personajes[i].nombre)
      ataques = personajes[i].ataques
  }
  mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
  ataques.forEach((ataque) =>{
    ataquesPersonaje = `
    <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
    `
    contenedorAtaques.innerHTML += ataquesPersonaje       
  })

  botonPiedra = document.getElementById('boton-piedra')
  botonPapel = document.getElementById('boton-papel')
  botonTijera = document.getElementById('boton-tijera')
  
  botonPiedra.addEventListener('click', ataquePiedra)  
  botonPapel.addEventListener('click', ataquePapel)   
  botonTijera.addEventListener('click', ataqueTijera)
}

function seleccionarPersonajeRival(){  
  let personajeAleatoria = aleatorio(0, personajes.length - 1)
  spanPersonajeRival.innerHTML = personajes[personajeAleatoria].nombre
}

function ataquePiedra(){
  ataqueJugador = 'PIEDRA'  
  ataqueAleatorioRival()
}

function ataquePapel(){
  ataqueJugador = 'PAPEL'  
  ataqueAleatorioRival() 
}

function ataqueTijera(){
  ataqueJugador = 'TIJERA'  
  ataqueAleatorioRival()
}

function ataqueAleatorioRival(){  
  let ataqueAleatorio = aleatorio(1, 3)
  if(ataqueAleatorio == 1){
    ataqueRival = 'PIEDRA'   
  }else if(ataqueAleatorio == 2){
    ataqueRival = 'PAPEL'    
  }else{
    ataqueRival = 'TIJERA'    
  }
  combate()
}

function combate(){  
  if(ataqueJugador == ataqueRival){
    crearMensaje("Empate")
    
  }else if(ataqueJugador == 'PIEDRA' && ataqueRival == 'TIJERA'){
    crearMensaje("Ganaste")  
    vidasRival--
    spanVidasRival.innerHTML = vidasRival  
  }else if(ataqueJugador == 'PAPEL' && ataqueRival == 'PIEDRA'){
    crearMensaje("Ganaste") 
    vidasRival--
    spanVidasRival.innerHTML = vidasRival   
  }else if(ataqueJugador == 'TIJERA' && ataqueRival == 'PAPEL'){
    crearMensaje("Ganaste") 
    vidasRival--
    spanVidasRival.innerHTML = vidasRival   
  }else{
    crearMensaje("Rival gana")  
    vidasJugador--
    spanVidasJugador.innerHTML = vidasJugador  
  }
  // Revisar las vidas
  revisarVidas()
}

function revisarVidas(){
  if(vidasRival == 0){
    crearMensajeFinal('FELICITACIONES¡¡ GANAMOS 🥳')
  }else if(vidasJugador == 0){
    crearMensajeFinal('LO SIENTO¡¡ PERDIMOS 😑')
  }
}

function crearMensaje(resultado){  
  mensajes.innerHTML =  resultado
  ataquesDelJugador.innerHTML = ataqueJugador
  ataquesDelRival.innerHTML = ataqueRival 
}

function crearMensajeFinal(resultadoFinal){   
  mensajes.innerHTML = resultadoFinal

  botonPiedra.disabled = true  
  botonPapel.disabled = true  
  botonTijera.disabled = true
  
  sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
  location.reload()
}

function aleatorio(min, max){
  return Math.floor(Math.random() * (max - min + 1))
}

window.addEventListener('load', iniciarJuego)