
// cart button
let navcart = document.getElementById("navcart");
let cartpopup = document.getElementById("cartpopup");



navcart.addEventListener("click", function () {
    cartpopup.style.visibility = "visible";
 

});

let colse3= document.getElementById("colse3");



close3.addEventListener("click", function () {
    cartpopup.style.visibility = "hidden";
 

});

var nav = document.querySelector("nav")

nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline()

    tl.to("#nav-bottom", {
        height: "16vw",
        duration: 0.5
    })
    tl.to(".nav-part2 h5", {
        display: "block",
        duration: 0.1

    })
    tl.to(".nav-part2 h5 span", {
        y: 0,
        // duration:0.3,
        stagger: {
            amount: 0.5
        }
    })
})
nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline()
    tl.to(".nav-part2 h5 span", {
        y: 25,
        stagger: {
            amount: 0.2
        }
    })
    tl.to(".nav-part2 h5", {
        display: "none",
        duration: 0.1
    })
    tl.to("#nav-bottom", {
        height: 0,
        duration: 0.2
    })
})
let t2 = gsap.timeline()
t2.from(".shop-product h2",{
    scale:0,
    duration:0.5
})

t2.from(".shop-product p",{
    scale:0,
    duration:0.5
})

// comment section started
let sign = document.getElementById("sign-up");
let coms = document.getElementById("comment");



sign.addEventListener("click", function () {
    coms.style.visibility = "visible";
 

});


let reply = document.getElementById("reply");
let thank = document.getElementsByClassName("thank")[0];
reply.addEventListener("click", function () {
    let c = prompt("ENTER YOUR EMAIL-ID")
    reply.innerHTML = c;
    thank.style.visibility = "visible";


});

let close = document.getElementById("close")
close.addEventListener("click", function () {
    coms.style.visibility = "hidden";
    thank.style.visibility = "hidden";
 

});
// comment section ended

// account section for ranjit started
let ranjit = document.getElementsByClassName("ranjit")[0];
let high1 = document.getElementById("high1");


high1.addEventListener("mouseenter", function () {
    ranjit.style.visibility = "visible";

});
high1.addEventListener("mouseleave", function () {
    ranjit.style.visibility = "hidden";

});
// account section for ranjit finished

// account section for aryan started
let aryan = document.getElementsByClassName("aryan")[0];
let high2 = document.getElementById("high2");


high2.addEventListener("mouseenter", function () {
    aryan.style.visibility = "visible";

});
high2.addEventListener("mouseleave", function () {
    aryan.style.visibility = "hidden";

});
// account section for aryan ended

// account section for payal started
let payal = document.getElementsByClassName("payal")[0];
let high3 = document.getElementById("high3");


high3.addEventListener("mouseenter", function () {
    payal.style.visibility = "visible";

});
high3.addEventListener("mouseleave", function () {
    payal.style.visibility = "hidden";

});

// submit button
let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}


// high1.addEventListener("mouseleave", function () {
//     ranjit.style.visibility = "hidden";

// });
