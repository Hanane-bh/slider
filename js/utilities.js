'use strict';  

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/

function random(min, max){
    return Math.floor(min + Math.random()*(max - min + 1));
}

function askForInt(message){

    var reponse = null;
    do{
        reponse = parseInt(window.prompt(message));
    }while (isNaN(reponse));

    return reponse;
}


function setEventOnElement(id, type, listener){
    var element = document.getElementById(id);
    element.addEventListener(type, listener);
}