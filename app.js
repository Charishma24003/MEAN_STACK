const slides=document.querySelectorAll(".slide");
let counter=0;
// console.log(slides);
slides.forEach(
    (slide,index)=>{
        slide.style.left=`${index*100}%`;
    }

);

function nextSlide(){
    counter=(counter+1)%slides.length;
    slideImage();
}

function previousSlide(){
    counter=(counter-1+slides.length)%slides.length;
    slideImage();
}

function slideImage(){
    slides.forEach(
        slide=>{
            slide.style.transform=`translateX(-${counter*100}%)`;
        }
    );
}

let autoSlide=setInterval(nextSlide,3000);

document.querySelector(".nav1").addEventListener("mouseenter",()=>{
    clearInterval(autoSlide);
});
document.querySelector(".nav1").addEventListener("mouseleave",()=>{
    autoSlide=setInterval(nextSlide,3000);
});