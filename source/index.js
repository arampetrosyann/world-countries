"use strict"

import {
    BASE_ALL_URL,
    SEARCH_NAME_URL,
} from "./modules/constants/urls.mjs";

import userKey from "./modules/constants/userKey.mjs"

import getUser from "./modules/local-storage/getUser.mjs";

import canEnter from "./modules/validation/canEnter.mjs";

import createCountryBox from "./modules/actions/createCountryBox.mjs";

import addSpinner from "./modules/actions/addSpinner.mjs";

import addCount from "./modules/actions/addCount.mjs";

import normalizeInput from "./modules/normalizeInput.mjs";

const countriesBox = document.querySelector(".countries");

const countriesTotal = document.querySelector(".total__count");

const searchItem = document.querySelector(".nav-bar__search");

let timeoutForSearch = undefined;

const user = getUser(userKey);

const userIn = canEnter(user);

if (!userIn) {
    window.location.replace("./login.html");
}
    
searchItem.addEventListener("input", () => {
    const inputVal = searchItem.value;

    const trimmedVal = inputVal.trim()

    if (inputVal.length !== trimmedVal.length) {
        return;
    }

    clearTimeout(timeoutForSearch);

    timeoutForSearch = setTimeout(function () {
        const normVal = normalizeInput(inputVal);

        render(normVal);
    }, 700);
});

const onSpace = function () {
    const inputVal = normalizeInput(searchItem.value);

    if (event.keyCode === 32 && inputVal.length === 0) {
        searchItem.blur();

        searchItem.value = null;

        event.preventDefault();
    }
}

searchItem.addEventListener("keydown", onSpace);

searchItem.addEventListener("keyup", onSpace);

const render = function (input = "") {
    let url = "";

    if (input.length === 0) {
        url = BASE_ALL_URL;
    } else {
        url = `${SEARCH_NAME_URL}${input}`;
    }

    countriesBox.innerHTML = "";

    const loader = addSpinner("loader", countriesBox);

    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        loader.remove();

        addCount.call(data, countriesTotal);

        data.forEach(({ name, flag, alpha3Code, region, population, capital }) => {
            createCountryBox({ name, flag, alpha3Code, region, population, capital }, userKey, countriesBox);
        });
    })
    .catch((error) => {  
        loader.remove();

        countriesBox.innerHTML = "No results.";
    });
}

render("");