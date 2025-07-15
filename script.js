'use strict';

// NAVBAR TOGGLE

const overlay = document.querySelector("[data-overlay]");
const navOpenbtn = document.querySelector("[data-nav-open-btn]");
const navbar= document.querySelector("[data-navbar]");
const navClosebtn=document.querySelector("[data-nav-close-btn]");
const navLinks=document.querySelectorAll("[data-nav-link]");
const navElemArr = [navOpenbtn,navClosebtn,overlay];

const navToggleEvent = function(elem){
    for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener("click",function(){
            navbar.classList.toggle("active");
            overlay.classList.toggle("active")
        });
        
    }
}
navToggleEvent(navElemArr);
navToggleEvent(navLinks);
//  HEADER STICKY AND GO TO TOP
const header = document.querySelector("[data-header]");
const gototop = document.querySelector("[data-go-top]");

window.addEventListener("scroll",function(){
    if (window.scrollY >= 200) {
        header.classList.add("active");
        gototop.classList.add("active");
    } else {
       header.classList.remove("active") ;
       gototop.classList.remove("active");
    }
})