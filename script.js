// Hero-Nav animation
gsap.from(".navbar", {
    xPercent: 500,
    opacity: 0,
    duration: 0.3,
    delay: 0.5,
    stagger: 0.2
})
gsap.from("#spidermanimg", {
    y: -1100,
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

//Header and Cursor
var Header = document.querySelector("#header");
Header.addEventListener("mousemove", function () {
    Cursor.style.display = "none";
})
Header.addEventListener("mouseleave", function () {
    Cursor.style.display = "initial";
})

//SVG Line animation 
var InitialPath = `M 10 100 Q 500 100 990 100`;
var FinalPath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector("#svg-anime");
var SVG = document.querySelector("#svg");

string.addEventListener("mousemove", function (e) {

    let x = e.offsetX;
    let y = e.offsetY;

    InitialPath = `M 10 100 Q ${x} ${y} 990 100`;

    gsap.to("#svg path", {
        attr: { d: InitialPath },
        duration: 0.3
    })
});
SVG.addEventListener("mouseleave", function () {
    gsap.to("#svg path", {
        attr: { d: FinalPath },
        duration: 2,
        ease: "elastic.out(2,0.1)"
    });
});

//cursor Animation
var Cursor = document.querySelector("#cursor");
var CursorAnime = document.querySelector("#cursor-anime");
var Overlay = document.querySelector("#overlay");

window.addEventListener("mousemove", function (dets) {

    gsap.to(Cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.2,
        ease: "bounce.out",
    });
});
Overlay.addEventListener("mouseenter", function () {
    Cursor.style.boxShadow = "0 0 0 transparent";
    Cursor.innerHTML = `<a href="https://www.google.com">View More</a>`
    gsap.to(Cursor, {
        scale: 3,
        backgroundColor: "rgba(255, 255, 255, 0.393)"
    });
});
Overlay.addEventListener("mouseleave", function () {
    Cursor.innerHTML = ""
    Cursor.style.boxShadow = "0 0 20px 10px pink";
    // box-shadow: 0px 0px 20px 10px pink;
    gsap.to(Cursor, {
        scale: 1,
        backgroundColor: "rgb(255, 255, 255)"
    });
});

// right<-left animated sidebar
var Main = document.querySelector("#main")
var Full = document.querySelector("#full")
var Icon = document.querySelector("#icon")
var Cross = document.querySelector("#full i")

var tl = gsap.timeline()
tl.to(Full, {
    right: 0,
    duration: 0.9,
    opacity: 1
})
tl.pause()

Icon.addEventListener("mousemove", function () {
    Overlay.style.display = "none";
})
Icon.addEventListener("click", function () {
    tl.play();
    Icon.style.display = "none";

    gsap.to("#full img", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out"
    });
});

Cross.addEventListener("click", function () {
    tl.reverse()
    Icon.style.display = "initial";
    gsap.from(Icon, {
        opacity: 0,
        duration: 2
    })
})

//text animation
function TextAnimation() {
    var Text = document.querySelector(".sub-main h1")
    var Extracttext = Text.textContent.split("");
    let clutter = "";
    Extracttext.forEach(function (amit) {
        clutter += `<span>${amit}</span>`;
    })
    Text.innerHTML = clutter;
    console.log(clutter);
}
TextAnimation()
gsap.from(".sub-main span", {
    y: 150,
    opacity: 0,
    duration: 0.9,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".sub-main",
        start: "top 30%",
        end: "top 0%",
        scrub: true,
    }
});