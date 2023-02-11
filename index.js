
let mainDiv = document.querySelector(".box");
let allDivs = document.querySelectorAll(".box>div.animatable");
let scrollerDiv = document.querySelector('#scrollDiv');
let footer = document.querySelector('.footer');


scrollerDiv.addEventListener('click', () => {

    if (window.scrollY < 400) {
        window.scrollBy(0, 400)
    }
});

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);


gsap.to(mainDiv, {
    left: 0,
    opacity: 1,
    duration: 0.75,
    ease: "power4.in"
});

allDivs.forEach(element => {
    gsap.to(element, {
        scrollTrigger: {
            trigger: element,
            toggleActions: "restart none none reset",
            start: "top 95%"
        },
        opacity: 1,
        top: 0,
        duration: 0.75,
        ease: "power4.in"
    });
});

gsap.to(footer, {
    scrollTrigger: {
        trigger: footer,
        toggleActions: "restart none none reset",
        start: "top 95%"
    },
    filter: "none",
    duration: 0.75,
    ease: "power4.in"
});

gsap.to(".skillList .skillItem:nth-child(1) div:nth-child(2) div", {
    scrollTrigger: {
        trigger: ".skillItem:nth-child(1)",
        toggleActions: "restart none none reset",
        start: "top 95%",
    },
    width: "95%"
});
gsap.to(".skillList .skillItem:nth-child(2) div:nth-child(2) div", {
    scrollTrigger: {
        trigger: ".skillItem:nth-child(2)",
        toggleActions: "restart none none reset",
        start: "top 95%",
    },
    width: "85%"
});
gsap.to(".skillList .skillItem:nth-child(3) div:nth-child(2) div", {
    scrollTrigger: {
        trigger: ".skillItem:nth-child(3)",
        toggleActions: "restart none none reset",
        start: "top 95%",
    },
    width: "75%"
});
gsap.to(".skillList .skillItem:nth-child(4) div:nth-child(2) div", {
    scrollTrigger: {
        trigger: ".skillItem:nth-child(4)",
        toggleActions: "restart none none reset",
        start: "top 95%",
    },
    width: "80%"
});
gsap.to(".skillList .skillItem:nth-child(5) div:nth-child(2) div", {
    scrollTrigger: {
        trigger: ".skillItem:nth-child(5)",
        toggleActions: "restart none none reset",
        start: "top 95%",
    },
    width: "90%"
});
gsap.to(".skillList .skillItem:nth-child(6) div:nth-child(2) div", {
    scrollTrigger: {
        trigger: ".skillItem:nth-child(6)",
        toggleActions: "restart none none reset",
        start: "top 95%"
    },
    width: "93%"
});


let bgLeft = document.querySelector('.bg-left')

window.onscroll = function(){
    if (window.scrollY < 590){
        bgLeft.style.filter = 'saturate(1.5) hue-rotate(0deg)';
    }
    else if(window.scrollY < 990){
        bgLeft.style.filter = 'saturate(1.5) hue-rotate(180deg)';
    }
    else if(window.scrollY < 1240){
        bgLeft.style.filter = 'saturate(1.5) hue-rotate(90deg)';
    }
    else if(window.scrollY < 1570){
        bgLeft.style.filter = 'saturate(1.5) hue-rotate(240deg)';
    }
    else{
        bgLeft.style.filter = 'saturate(1.5) hue-rotate(45deg)';
    }
}

