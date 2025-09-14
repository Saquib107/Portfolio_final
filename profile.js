AOS.init({
    duration: 1200,
    once: true
});

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    function setupHover(btnId, textId, hoverText, defaultText) {
        const btn = document.getElementById(btnId);
        const text = document.getElementById(textId);

        let tappedOnce = false;

        // Desktop hover
        btn.addEventListener("mouseenter", () => {
            text.style.opacity = 0;
            setTimeout(() => {
                text.textContent = hoverText;
                text.style.opacity = 1;
            }, 200);
        });

        btn.addEventListener("mouseleave", () => {
            text.style.opacity = 0;
            setTimeout(() => {
                text.textContent = defaultText;
                text.style.opacity = 1;
            }, 200);
        });

        // Mobile tap-to-hover (Option B)
        btn.addEventListener("touchend", (e) => {
            if (!tappedOnce) {
                e.preventDefault(); // stop link first tap
                text.style.opacity = 0;
                setTimeout(() => {
                    text.textContent = hoverText;
                    text.style.opacity = 1;
                }, 200);
                tappedOnce = true;

                // reset after 2s if no second tap
                setTimeout(() => {
                    text.textContent = defaultText;
                    tappedOnce = false;
                }, 2000);
            } else {
                tappedOnce = false; // second tap follows link
            }
        });
    }

    setupHover("email-btn", "email-text", "rayeessaquib@gmail.com", "Email");
    setupHover("linkedin-btn", "linkedin-text", "Saquib Rayees", "LinkedIn");
    setupHover("instagram-btn", "instagram-text", "saquibsr7", "Instagram");
    setupHover("resume-btn", "resume-text", "resume.pdf", "Resume");
});
