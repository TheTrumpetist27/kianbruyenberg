// Typing animation
const typed = new Typed(".typing",{
    strings:["", "Student", "Software Engineer", "Software Developer", "Web Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true,
    smartBackspace:true
});

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

    if (scrollPercentRounded >= 92 && scrollPercentRounded <= 192) {
        const nav = document.querySelector(":root");
        nav.style.setProperty("--dynamic-text-color", "black");
    } else {
        const nav = document.querySelector(":root");
        nav.style.setProperty("--dynamic-text-color", "white");
    }
});

// "Come on in" animation
// delay function for waiting.
const delay = milliseconds => new Promise(res => setTimeout(res, milliseconds));

let clicked = false;
const comeOnInButton = document.querySelector(".come-in-button");
const circle = document.querySelector(".circle");

comeOnInButton.addEventListener("click", async () => {
    $(".circle").css({
        "transition-duration": "2s",
        "width": "200vw",
        "height": "150vh",
        "left": "-50vw",
        "transform": "translateY(-30%)"
    });

    await delay(1000);
    location.href = "#about";
    await delay(300);
    $(".circle").css({
        "transition-duration": "2s",
        "width": "50px",
        "height": "50px",
        "left": "53vw",
        "transform": "translateY(0)"
    });
    await delay(100);
    $(".circle").css({"transition-duration": ".2s"});
});

$(".come-in-button").hover(function(){
    $(".circle").css({"scale": "2"})
},function(){
    $(".circle").css({"scale": "1"})
});