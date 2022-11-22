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