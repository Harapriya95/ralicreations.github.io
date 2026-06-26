// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Theme Toggle
const themeBtn = document.getElementById("theme-btn");

if(themeBtn){

    // Load saved theme
    if(localStorage.getItem("theme") === "dark"){
        document.body.classList.add("dark-mode");
        themeBtn.textContent = "☀️";
    }

    // Toggle theme
    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){
            localStorage.setItem("theme", "dark");
            themeBtn.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeBtn.textContent = "🌙";
        }

    });

}

// Skills Animation on Scroll

const skillBars = document.querySelectorAll('.skill-progress');

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            skillBars.forEach(bar => {

                if(bar.classList.contains('java')){
                    bar.style.width = '90%';
                }

                if(bar.classList.contains('html')){
                    bar.style.width = '85%';
                }

                if(bar.classList.contains('js')){
                    bar.style.width = '75%';
                }

                if(bar.classList.contains('mysql')){
                    bar.style.width = '80%';
                }

                if(bar.classList.contains('support')){
                    bar.style.width = '95%';
                }

            });

        }

    });

});

observer.observe(document.querySelector('#skills'));