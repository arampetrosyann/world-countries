"use strict"

import userKey from "./modules/constants/userKey.mjs"

const pageHead = document.querySelector(".page-head");

const logOutBtn = document.querySelector(".nav-bar__button");

logOutBtn.addEventListener("click", () => {
    localStorage.removeItem(userKey);

    window.location.replace("./login.html");
});

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop < 60) {
        pageHead.style.backgroundColor = "rgb(250, 250, 250)";
    } else {
        pageHead.style.backgroundColor = "rgba(250, 250, 250, 0.9)";
    }
});