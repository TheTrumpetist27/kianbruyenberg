<body>
    <?php
    include("includes/loader.html");
    include("includes/nav.html"); 
    ?>
    <section class="home-section" id="home">
        <div class="container">
            <div class="row">
                <div class="col info">
                    <div class="home-page-intro">
                        <h1 class="text">Hi. I'm Kian.</h1>
                        <h3 class="text">A <span class="text-accent accent-font">Student</span> in <br /><span class="text-accent accent-font">Software Engineering.</span></h3>
                    </div>
                </div>
                <div class="explore">
                    <div class="circle"></div>
                </div>
            </div>
        </div>
        <div class="button-links-container">
            <ul class="button-links">
                <li class="social-link"><a href="https://www.linkedin.com/in/kian-bruyenberg/" class="linkedin" target="_blank" rel="noreferrer noopener"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                <li class="social-link"><a href="https://github.com/TheTrumpetist27" class="github" target="_blank" rel="noreferrer noopener"><ion-icon name="logo-github"></ion-icon></a></li>
            </ul>
        </div>
    </section>
    <section class="about-section" id="about">
        <div class="container">
            <div class="row">
                <div class="col-sm introduction" data-aos="fade-up">
                    <h1 class="about-h1 secondary-font">Who am I?</h1>
                    <p class="description">My name is Kian Bruyenberg, I am a 20 years old ICT student based in the Netherlands.</p>
                    <p class="description">I am currently studying ICT & Software at <a href="https://fontys.edu/Bachelors-masters/Bachelors/Information-Communication-Technology-Eindhoven.htm" class="description-link" target="_blank" rel="noreferrer noopener">Fontys University of Applied Sciences</a> in Eindhoven. I am a 1st year student here. Before I came to Fontys I've studied Application- and Mediadesign at <a href="https://vistacollege.nl/opleiding/applicatie-en-media-ontwikkelaar" class="description-link" target="_blank" rel="noreferrer noopener">Vista College.</a> This was a 3 year long eduction in Sittard and Maastricht. Here I have learned to program in numerous different languages. PHP and C# were the main languages I've come in contact with then. But I also know my way around HTML, CSS, JavaScript (Although still learning) and SQL.</p>
                </div>
                <div class="col-sm intro-picture" data-aos="fade-up">
                    <div class="picture">
                        <img src="assets/images/SelfieAchtergrondWeg.png" alt="Selfie from me!" class="img">
                        <div class="line-horizontal"></div>
                        <div class="line-vertical"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <?php 
    include("includes/footer.html"); 
    include("includes/scripts.html");
    ?>
</body>