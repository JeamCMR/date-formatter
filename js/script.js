/**VARIABLES */

const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

//Se crea un objecto de tipo fecha
const date = new Date();
//Se obtiene el valor del dia  
const day = date.getDate();
//Se obtiene el valor del mes
const month = date.getMonth() + 1 ; // Se agrega +1 ya que el metodo retorna un valor entre 0 y 11
//Se obtiene el valor del año
const year = date.getFullYear();
//se obtiene el valor de la hora
const hours = date.getHours();
//Se obtiene el valor de los minutos
const minutes = date.getMinutes();

//Se variable con la informacion a mostrar en el html 
const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;

/**Agrergar evento a las optiones de select*/

//El evento de change se utiliza para detectar cuándo ha cambiado el valor de un elemento HTML
dateOptionsSelectElement.addEventListener("change", ()=>{
    switch(dateOptionsSelectElement.value){
        case "yyyy-mm-dd":
            currentDateParagraph.textContent = formattedDate
            .split("-") //El metodo explit divide cadena de texto en un array de subCadenas y Basandose en un delimitador especifico
            .reverse() //El metodo .reverse invierte una matriz 
            .join("-") // Une los elementos de una matriz y los convierte en una cadena de texto, se puede separar cada elemento con un delimitador
            break;
   
        case 'mm-dd-yyyy-h-mm':
            currentDateParagraph.textContent=`${month}-${day}-${year}  ${hours} hours : ${minutes} minutes`;
            break;
            default:
                currentDateParagraph.textContent=formattedDate;
    }
});
