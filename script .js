
console.log("Welcome to Akilesh's Portfolio!");

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

