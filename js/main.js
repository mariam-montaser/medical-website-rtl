// Strict mode
'use strict';

// set variables
// slider variables
var sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.getElementById('arrowLeft'),
    arrowRight = document.getElementById('arrowRight'),
    current = 0,
    time = 3000,
    // navbar vars
    toggler = document.querySelector('.toggler'),
    navLinks = document.querySelector('.links'),
    // top button vars
    toTop = document.querySelector('.top'),
    html = document.getElementsByTagName('html'),
    body = document.getElementsByTagName('body');

let showMenu = false;

//=========================================
// Slider
// clear the slider
function reset(){
    for(var i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}

//start slide images
function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
}

//show previous image
function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

// click on left arrow
arrowLeft.addEventListener('click', function(){
    if (current === 0){
        current = sliderImages.length;
    }
    slideLeft();
});

//show next image
function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

// click on right arrow
arrowRight.addEventListener('click', function(){
    if (current === sliderImages.length - 1){
        current = -1;
    }
    slideRight();
});

startSlide();

// auto slider
function autoSlider(){
    reset();
    sliderImages[current].style.display = 'block';
    if(current < sliderImages.length - 1){
        current ++;
    } else {
        current = 0;
    }
    setTimeout('autoSlider()', time);
}
// end slider
//=========================================
//start navbar menu button
toggler.addEventListener('click', function() {
    if (showMenu == false){
        navLinks.style.display = 'block';
        showMenu = true;
    } else if (showMenu == true){
        navLinks.style.display = 'none';
        showMenu = false;
    }
    
});
//end navbar menu button
//========================================
//start top button
toTop.addEventListener('click', function() {
    document.body.scrollTop = 0;
    if(document.body.scrollTop <= 800) {
        toTop.classList.add('hidden');
    } else {
        toTop.classList.remove('hidden');
    }
});
//end top button

//trigger the slider
window.onload = autoSlider;

//loading page