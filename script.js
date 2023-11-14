"use struct"

const headerMenuIcon = document.querySelector(".header-burger-menu-icon");
const asideMenuIcon = document.querySelector(".aside-burger-menu-icon");
if(headerMenuIcon && asideMenuIcon){
    const body = document.querySelector("body");
    const nav = document.querySelector(".content__nav");
    const asideNav = document.querySelector(".aside__aside-nav");

    headerMenuIcon.addEventListener("click", function(event){
        body.classList.toggle("_no-scrol");
        nav.classList.toggle("_header-active");
    });

    asideMenuIcon.addEventListener("click", function(event){
        asideNav.classList.toggle("_aside-active");
    });
}

