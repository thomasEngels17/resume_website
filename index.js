
const slides = document.getElementsByClassName("carousel-item")
let next_button = document.getElementsByClassName("carousel-button-next")
let previous_button = document.getElementsByClassName("carousel-button-prev")
console.log(next_button)
let slide_position = 1;
const totalSlides = slides.length;

function moveToNextSlide(){
    for(let i = 0; i < slides.length; i++){
        slides[i].classList.remove("carousel-item-visible")
    }
    if(slide_position == totalSlides - 1){
        slide_position = 0;
    }
    else { 
        slide_position += 1;
    }
    slides[slide_position].classList.add("carousel-item-visible")
}

function moveToPreviousSlide(){
    if(slide_position == 0){
        slide_position = 2;
    }
    else {
        slide_position -= 1;
    }
    for(let i = 0; i < slides.length; i++){
        slides[i].classList.remove("carousel-item-visible")
    }
    slides[slide_position].classList.add("carousel-item-visible")
}

next_button[0].addEventListener("click", moveToNextSlide);
previous_button[0].addEventListener("click", moveToPreviousSlide);

