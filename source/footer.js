"use strict"

const copyYear = document.querySelector(".copy-year");

const currentYear = new Date().getFullYear();

copyYear.textContent = currentYear;   