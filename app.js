let resp = document.querySelector('strong');
//resp.innerHTML = elemento;

/** Forma 1 */
const elementoHTML = document.querySelector('#contenido');
/**Usando operador ternario */
console.log(elementoHTML);
(elementoHTML) ? console.log('Existe el elemento') : console.log('No existe el Elemento');
console.log(' - - - - - - - Fin forma 1 - - - - - - - - - - \n\n');


/** Forma 2 */
const elementoX = document.getElementsByTagName('section');
console.log(elementoX);
if (elementoX.length > 0) {
  console.log('Existe la etiqueta ', elementoX);
} else {
  console.log('No existe la etiqueta');
}
console.log(' - - - - - - - Fin forma 2 - - - - - - - - - - \n\n');


/** Forma 3 */
const element = document.getElementsByClassName('center');
console.log(element);
if (element.length > 0) {
  console.log(`Si existe la clase`);
} else {
  console.log('No existe elemento');
}
console.log(' - - - - - - - Fin forma 3 - - - - - - - - - - \n\n');


/** Forma 4 */
const elemt = document.getElementById("#contenido");
//const elemt = document.querySelector("#contenido");

if ( elemt !== null) {
 console.log('El elemento HTML existe');
}else {
 console.log('El elemento no existe en el DOM');
}
console.log(' - - - - - - - Fin forma 4 - - - - - - - - - - \n\n');


/** Forma 5 */
const elem = document.querySelector('.center');
(elem.length) ? console.log('Si existe el elemento HTML') : console.log('No existe :)');;
console.log(' - - - - - - - Fin forma 5 - - - - - - - - - - \n\n');



/** Forma 6, verificar si un Elemento HTML tiene una clase 
 * El método contains() dentro de un classList devuelve un valor booleano: 
 * verdadero si en la lista de clases contiene contiene la case que se busca;
 *  de lo contrario, falso.
*/
const fontBold = document.querySelector(".fontBold");
  if (fontBold.classList.contains("hide")) {
    console.log('El elemento tiene la clase "hide".');
    fontBold.classList.remove("hide");
  } else {
    console.log('El elemento no tiene la clase "hide".');
  }