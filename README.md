# Rick & Morty -> Characters

# Step 1

Definimos nuestra estructura básica en nuestro HTML.

# Step 2

Enlazar fichero CSS y JS.

# Step 3

Crear función de carga usando window.
window -> clases con métodos ya creados y usaremos onload.

Esto se lanza cuando carga la ventana
Es una función que se lanza cuando se abre el navegador -> ejecuta una función disparadora

window.onload = () => {Code}

# Step 4

Inicializar los personajes y mappearlos

Función inicilizadora -> Inicial -> Disparadora
llama dos funciones -> 1 recuperar personajes | 2 mappear info -> necesita los personajes
Async | await -> espera para guardar la info de los personajes -> en la variable
mappedCharacters por params -> la lista de personajes

const init = async ()=> {Code}

# Step 5

Crear función getCharacters - petición

fetch -> Método nativo de JS para recuperar info.

Función recuperar datos
Async | await -> fetch -> url [que devuelve los datos]
await -> tranformar datos recibidos a formato JSON
Cuando ya tenermos los datos lo devuelve -> Return

const getCharacter = async () => {

- Hacer el fetch
- Convertir en Json
- Retornar el valor

}

# Step 6

Mappear la información -> quedarme con los datos que quiero.

Función para recoger lo que queremos.
Ejecutar una función de pintado por cada elemento iterado.
Función jecutada es printCharacter-> {name + img}.

const mappedCharacters = (characters) => {
characters.result.map((character)=> {
return ...Llamar al pintado
})

}

# Step 7

Pintar los datos en el HTML
Funcion de pintado
Recibe por param -> {un nombre y una img}
Recupearar el ul sobre el que queremos añadir datos - querySelector
con innerHTML -> añadimos los li por cada personaje -> porque va a ser llamada por cada iteración del mapped

const printCharacter = (character) => {Code}

# Bonus - Next List

Crear variable - let urlNextPage = '';

Después del mappped - urlNextPage = characters.info.next;

Function nextPage -> const nextPage = async () => {
if (urlNextPage !== null) {
let characterContainer = document.querySelector('#characters');
// characterContainer.innerHTML = '';
const result = await fetch(urlNextPage);
const resultToJson = await result.json();
mappedCharacters(resultToJson);
} else {
console.log('No hay scroll')
}
}

// Crear Botón asociado al evento.