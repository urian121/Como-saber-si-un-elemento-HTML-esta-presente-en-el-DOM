let resp = document.querySelector('strong');
resp.innerHTML = 'Web Developer';

/** Forma 1 */
let elemento = document.getElementById('#contenido');
if (isInViewport(elemento)) {
    console.log('Existe');
}


/** Forma 2 */
const element1 = document.querySelector('#idDelElemento');
/**Usando operador ternario */
(element1) ? console.log('Existe el elemento') : console.log('No es¿xiste el Elemento');


/** Forma 3 */
const elementoX = document.getElementsByTagName('section');
if (elementoX.length > 0) {
  console.log('Existe la etiqueta ', elementoX);
} else {
  console.log('No existe la etiqueta Section');
}

/** Forma 4 */
const element = document.getElementsByClassName('nombreDeLaClase');
if (element.length > 0) {
  console.log(`Existe el elemento ${element}`);
} else {
  console.log('No existe elemento');
}


/** Forma 5 */
const elemt = document.getElementById("#contenido");
//const elemt = document.querySelector("#contenido");

if ( elemt !== null) {
 console.log('El elemento HTML existe');
}else {
 console.log('El elemento no existe en el DOM');
}

/** Forma 6 */
const elem = document.querySelector('.center');
(elem.length) ? console.log('Si existe el elemento HTML') : console.log('No existe :)');;




