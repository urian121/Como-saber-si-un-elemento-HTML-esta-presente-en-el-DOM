
/** Forma 1; Usando un selector de etiqueta ya sea una clase o id */
const elementoHTML = document.querySelector('#contenido');
/**Usando operador ternario */
console.log(elementoHTML);
(elementoHTML) ? console.log('Existe el elemento') : console.log('No existe el Elemento');
console.log(' - - - - - - - Fin forma 1 - - - - - - - - - - \n\n');


/** Forma 2; Usando el nombre de un etiqueta HTML */
const elementoX = document.getElementsByTagName('section');
console.log(elementoX);
if (elementoX.length > 0) {
  console.log('Existe la etiqueta ');
} else {
  console.log('No existe la etiqueta');
}
console.log(' - - - - - - - Fin forma 2 - - - - - - - - - - \n\n');


/** Forma 3; Usando un selector como clase */
const element = document.getElementsByClassName('center');
console.log(element);
if (element.length > 0) {
  console.log('Si existe la clase');
} else {
  console.log('No existe elemento');
}
console.log(' - - - - - - - Fin forma 3 - - - - - - - - - - \n\n');


/** Forma 4  */
const elem = document.querySelectorAll('.center');
console.log(elem);
(elem.length) ? console.log('Si existe el elemento HTML****') : console.log('No existe :)');;
console.log(' - - - - - - - Fin forma 4  - - - - - - - - - - \n\n');



/** Forma 5, verificar si un Elemento HTML tiene una clase 
 * El método contains() dentro de un classList devuelve un valor booleano: 
 * verdadero (true) si en la lista de clases contiene contiene la case que se busca;
 *  de lo contrario, falso (false).
*/
const fontBold = document.querySelector(".fontBold");
console.log(fontBold);
if(fontBold){
  if (fontBold.classList.contains("hide")) {
    console.log('El elemento tiene la clase "hide".');
    fontBold.classList.remove("hide");
  } else {
    console.log('El elemento no tiene la clase "hide".');
  }
}else{
  console.log('No existe la Clase**');
}
  