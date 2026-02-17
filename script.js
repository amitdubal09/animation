gsap.from(".navbar", {
    xPercent: 500,
    opacity: 0,
    duration: 0.3,
    delay: 0.5,
    stagger: 0.2
})
gsap.from("#spidermanimg", {
    y: -900,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});
document.querySelectorAll(".navbar").forEach(item => {
    item.addEventListener("click", function (e) {

        e.preventDefault();

        let link = this.getAttribute("href");

        gsap.to(this, {
            x: -500,
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                if (link) {
                    window.location.href = link;
                }
            }
        });
    });
});
gsap.from(".p", {
    yPercent: 400,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.1
})
gsap.from(".suitimg", {
    yPercent: 500,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    stagger: 0.2
})