// SLIDERS CODE //
//create the sliders-pointers based on the slide quantity
document.querySelectorAll(".sliders").forEach(item => {
    if(item.parentElement.classList.contains("section-team")) {

        item.querySelectorAll(".slide").forEach((itemSlide, index) => {
            if(index == 0) return;
            
            let dot = item.parentElement.parentElement.querySelector(".sliders-pointers").firstElementChild.cloneNode(true);
            dot.classList.remove("active");

            item.parentElement.parentElement.querySelector(".sliders-pointers").appendChild(dot);
        });

    } else {
        

        item.querySelectorAll(".slide").forEach((itemSlide, index) => {
            if(index == 0) return;
            
            let dot = item.parentElement.querySelector(".sliders-pointers").firstElementChild.cloneNode(true);
            dot.classList.remove("active");

            item.parentElement.querySelector(".sliders-pointers").appendChild(dot);
        });
    }
  
});

//add a click event for all the pointers
document.querySelectorAll(".sliders-pointers").forEach(item => {
    item.querySelectorAll(".pointer").forEach(itemDot => itemDot.addEventListener("click", changeSlide));
});

//change pointer class
function changeSlide(e) {

    const sectionContainer = e.currentTarget.parentElement.parentElement;
    e.currentTarget.parentElement.querySelectorAll(".pointer").forEach(item => item.classList.remove("active"));
    e.currentTarget.classList.add("active");

    changeSlideItem(sectionContainer);
    
}

//change slide item based on the active class on the pointer element
function changeSlideItem(sectionContainer) {

    sectionContainer.querySelectorAll(".sliders-pointers .pointer").forEach((item, index) => {
        if(item.classList.contains("active")) {

            if(sectionContainer.classList.contains("section-body")) {
                sectionContainer.querySelector(".sliders").style.transform = `translateX(-${(sectionContainer.querySelector(".sliders .slide").clientWidth + 20) * index}px)`
            } else {
                sectionContainer.querySelector(".sliders").style.transform = `translateX(-${sectionContainer.querySelector(".sliders .slide").clientWidth * index}px)`
            }
            
        }
    });
}

//resise fix sliders width
window.addEventListener("resize", ()=> {
    document.querySelectorAll(".sliders-pointers").forEach(item => {
        changeSlideItem(item.parentElement);
    });
});


// NAV CODE //
let navOpen = false;

document.querySelector(".menu-opener").addEventListener("click", () => {
    navOpen = !navOpen;

    document.querySelector("nav").style.transform = `${navOpen ? "translateX(0)" : "translateX(100%)"}`;

});

//resize fix nav
window.addEventListener("resize", () => {
    if(window.innerWidth > 800) {
        document.querySelector("nav").style.transform  =  "translateX(0)";
    }
});


// SCROLL ANIMATION CODE //
window.addEventListener("scroll", reveal);

function reveal() {
    const reveals = document.querySelectorAll(".section-fact.reveal");

    reveals.forEach(item => {

        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;
        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint) {
            item.classList.add("active");

            startCounting(item);
        } else {
            // item.classList.remove("active");
        }

    });
}

//counting number function
function startCounting(item) {
    let valueDisplay = item.querySelector("h3");
    let interval = 5000;

    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));

    let duration = Math.floor(interval / endValue);

    if(valueDisplay.innerText === "000") {

        let counter = setInterval(function () {
            startValue += 1;
            valueDisplay.innerHTML = startValue;
    
            if(startValue == endValue) {
                clearInterval(counter);   
            } 
        }, duration);

    }
    
}

// const bannerSliderContainer = document.querySelectorAll(".sliders-pointers")[0];
// bannerSliderContainer.querySelectorAll(".pointer").forEach(item => item.addEventListener("click", changeSlide));

// //change dot class
// function changeSlide(e) {
//     if(e.currentTarget) {
//         bannerSliderContainer.querySelectorAll(".pointer").forEach(item => item.classList.remove("active"));
//         e.currentTarget.classList.add("active");

//         changeSlideItem();
//     } 
// }

// //change slide item based on the active class
// function changeSlideItem() {
//     bannerSliderContainer.querySelectorAll(".pointer").forEach((item, index) => {
//         if(item.classList.contains("active")) {
//             document.querySelector(".banner .sliders").style.transform = `translateX(-${document.querySelector(".banner .sliders .slide").clientWidth * index}px)`
//         }
//     });
// }

