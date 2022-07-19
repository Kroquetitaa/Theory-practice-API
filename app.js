// Tener el endpoint o URL de la API

const URL = 'https://rickandmortyapi.com/api/character';
let previousCharacter = '';

window.onload = () => {
    //Funcion disparadora
    init(); 
}

const init = async() => {
    // lanzar la funcion que obtiene los datos de la API
    const characters = await getCharacters();
    // lanzar la funcion que formatea los datos de la API
    console.log('Peticion: ', characters );
    mappedCharacters( characters );
}

const getCharacters = async() => {
    try{
        // Lanzar la peticion a la API
        const result = await fetch(URL);
        // Cambiar formato
        const resultToJson = await result.json();
        // Retornar resultado
        return resultToJson;
    }catch( error ){
        printError( error );
    }
}

const mappedCharacters = async(character) => {
    // Asignar la siguiente peticion
    previousCharacter = character.info.next;
    // Mapear los datos de la API
    character.results.map( character => {
        // Funcion de pintado
        return printCharacter( {
            name: character.name,
            image: character.image,
            origin: character.origin.name,
            species: character.species,
        } );
    })
}

const printCharacter = async(character) => {
    const container = document.querySelector('#characters');
    container.innerHTML += `
    <li>
        <h2>${character.name}</h2>
        <img src="${character.image}" alt="${character.name}">
        <p>${character.origin}</p>
        <p>${character.species}</p>
    </li>
    `;
    console.log('Transformado', character);
    // Selector query - id
    // Crear un elemento HTML o insertarlo en el DOM
}

const nextCharacters = async() => {
    if( previousCharacter ){
        const result = await fetch(previousCharacter);
        const resultToJson = await result.json();
        mappedCharacters( resultToJson );
    }
}

const printError = err => {
    const error = document.querySelector('#error');
    error.innerHTML += `
    <h1>${err.message}</h1>
    `;
}