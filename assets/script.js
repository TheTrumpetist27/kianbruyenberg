"use strict";
// delay function for waiting.
const delay = milliseconds => new Promise(res => setTimeout(res, milliseconds));

const loader = document.getElementById("loader");
const loaderContent = document.getElementById("loader-content");

// Loader
window.onload = async () => {
    await delay(1000);
    $(".loader").css({
        "transition-duration": "2.2s",
        "transform": "translateX(200%)",
        "width": "50vw"
    });

    // Typing animation
    const typed = new Typed(".typing",{
        strings:["Student", "Software Engineer", "Software Developer", "Web Developer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true,
        smartBackspace:true
    });

    await delay(2000);
    loader.classList.toggle("is-hidden");
    loaderContent.classList.toggle("is-hidden");
}




// change navbar color
window.addEventListener('scroll', () => {
    //let scroll = this.scrollY;
    // The about section: 888, 1824
    // 655, 1379
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    // let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / docHeight;
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    console.log("rounded" + scrollPercentRounded);

    if (scrollPercentRounded >= 95 && scrollPercentRounded <= 192) {
        const nav = document.querySelector(":root");
        nav.style.setProperty("--dynamic-text-color", "black");
    } else {
        const nav = document.querySelector(":root");
        nav.style.setProperty("--dynamic-text-color", "white");
    }
});

// "Come on in" animation

// Set variabels
const comeOnInButton = document.querySelector(".come-in-button");
const circle = document.querySelector(".circle");

// Look for the button press
comeOnInButton.addEventListener("click", async () => {
    // enlarge the circle
    $(".circle").css({
        "transition-duration": "2s",
        "width": "200vw",
        "height": "250vh",
        "left": "-50vw",
        "transform": "translateY(-30%)"
    });

    // wait 1000 ms and then go to the about section.
    await delay(1000);
    location.href = "#about";
    await delay(500);
    // change everything back.
    $(".circle").css({
        "transition-duration": "1.5s",
        "width": "50px",
        "height": "50px",
        "left": "55vw",
        "transform": "translateY(0)"
    });
    await delay(100);
    $(".circle").css({"transition-duration": ".2s"});
});

// For hovering over the button to enlarge the circle
$(".come-in-button").hover(function(){
    $(".circle").css({"scale": "2"})
},function(){
    $(".circle").css({"scale": "1"})
});