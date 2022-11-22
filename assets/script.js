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
    let scroll = this.scrollY;
    console.log(scroll);
    // The about section: 888, 1824
    // 655, 1379

    if (window.matchMedia("(min-width: 1366px)").matches) {
        if (scroll >= 655 && scroll <= 1379) {
            const nav = document.querySelector(":root");
            nav.style.setProperty("--dynamic-text-color", "black");
        } else {
            const nav = document.querySelector(":root");
            nav.style.setProperty("--dynamic-text-color", "white");
        }
    }

    if (scroll >= 888 && scroll <= 1824) {
        const nav = document.querySelector(":root");
        nav.style.setProperty("--dynamic-text-color", "black");
    } else {
        const nav = document.querySelector(":root");
        nav.style.setProperty("--dynamic-text-color", "white");
    }
});