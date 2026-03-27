"use strict";
// array of images
const images = ["images/image1.jpg", 
                "images/image2.jpg",
                "images/image3.jpg",
                "images/image4.jpg",
                "images/image5.jpg",
                "images/image6.jpg",
                "images/image7.jpg",
                "images/image8.jpg"];
let count = 0;
const slide = document.getElementById("slide");

// cycles through images every 3 seconds
function showSlide () {
    slide.src = images[count];
    count = (count + 1) % images.length;

    setTimeout(showSlide, 3000);
}

showSlide();
