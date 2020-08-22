"use strict"

import userKey from "./modules/constants/userKey.mjs";

import getUser from "./modules/local-storage/getUser.mjs";

import canEnter from "./modules/validation/canEnter.mjs";

import { SEARCH_CODE_URL } from "./modules/constants/urls.mjs";

import createCountryBox from "./modules/actions/createCountryBox.mjs";

const countriesBox = document.querySelector(".countries");

const user = getUser(userKey);

const userIn = canEnter(user);

if (!userIn) {
    window.location.replace("./login.html");
}

const userSaves = user.saves.countries;

const render = function (url, ctry) {
    fetch(`${url}${ctry}`)
    .then((response) => {
        return response.json();
    })
    .then(({ name, flag, alpha3Code, region, population, capital }) => {
        createCountryBox({ name, flag, alpha3Code, region, population, capital }, userKey, countriesBox);
    })
}

userSaves.forEach((country) => {
    render(SEARCH_CODE_URL, country);
});