document.addEventListener("DOMContentLoaded", () => {
    const navs = document.querySelectorAll(".nav");

    navs.forEach((nav) => {
        const toggle = nav.querySelector(".menu-toggle");
        if (!toggle) {
            return;
        }

        toggle.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("menu-open");
            toggle.setAttribute("aria-expanded", String(isOpen));
        });
    });

    document.addEventListener("click", (event) => {
        navs.forEach((nav) => {
            const toggle = nav.querySelector(".menu-toggle");
            if (!toggle || nav.contains(event.target)) {
                return;
            }

            nav.classList.remove("menu-open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") {
            return;
        }

        navs.forEach((nav) => {
            const toggle = nav.querySelector(".menu-toggle");
            if (!toggle) {
                return;
            }

            nav.classList.remove("menu-open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });
});
