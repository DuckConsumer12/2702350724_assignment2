document.addEventListener("DOMContentLoaded", function () {
   
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    
    document.querySelectorAll(".rating").forEach(ratingElement => {
        const ratingValue = parseInt(ratingElement.getAttribute("data-rating"));
        ratingElement.innerHTML = createStars(ratingValue);
        
        ratingElement.addEventListener("click", function (e) {
            if (e.target.classList.contains("star")) {
                const newRating = Array.from(e.target.parentNode.children).indexOf(e.target) + 1;
                ratingElement.setAttribute("data-rating", newRating);
                ratingElement.innerHTML = createStars(newRating);
            }
        });
    });

    function createStars(rating) {
        let stars = "";
        for (let i = 1; i <= 5; i++) {
            stars += `<span class="star ${i <= rating ? 'active' : ''}">&#9733;</span>`;
        }
        return stars;
    }
});
