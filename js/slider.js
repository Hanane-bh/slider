'use strict';  

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

var images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg"
];

var legends = [
    'Street Art',
    'Fast Lane',
    'Colorful Building',
    'Skyscrapers',
    'City by night',
    'Tour Eiffel la nuit'
];

var currentIndex = 0;
var timer = null;


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function onToolbarToggle (){

    var icon = document.querySelector('#toolbar-toogle i');
    
    if(icon){
        icon.classList.toggle('fa-arrow-down');
        icon.classList.toggle('fa-arrow-right');
    }
    document.querySelector('.toolbar ul').classList.toggle('hide');
}

function slideNext(){
    currentIndex++;
    if (currentIndex >= images.length)
        currentIndex=0;
    showPicture(currentIndex);
}

function slidePrevious(){
    currentIndex--;
    if (currentIndex < 0)
        currentIndex=images.length-1;
    showPicture(currentIndex);
}

function slideToggle(){
    if (timer==null){
        timer = setInterval(slideNext, 2000);
    }
    else{
        clearInterval(timer);
        timer=null;
    }

    var icon = document.querySelector('#slider-toggle i');
    if(icon){
        icon.classList.toggle('fa-play');
        icon.classList.toggle('fa-pause');
    }   
}

function slideRandom(){
    var newIndex = 0;
    do {
        newIndex = random (0, images.length-1);
    }while (newIndex == currentIndex);
    currentIndex = newIndex;
    showPicture(currentIndex);
}

function showPicture(index){
    if (index <0 || index >= images.length)
        return;

    var image = document.getElementById('slider-picture');
    image.src = images[index];
    image.alt = 'Photo '+ legends[index];

    var legend = document.getElementById('slider-caption');
    legend.textContent = legends[index];
}


function initSlider(){
    setEventOnElement('toolbar-toogle','click',onToolbarToggle);
    setEventOnElement('slider-next', 'click', slideNext);
    setEventOnElement('slider-previous', 'click', slidePrevious);
    setEventOnElement('slider-toggle', 'click', slideToggle);
    setEventOnElement('slider-random', 'click', slideRandom);
    showPicture(0);
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/


document.addEventListener('DOMContentLoaded', initSlider);

