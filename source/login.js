"use strict"

import { User, validInputs } from "./modules/models/userModel.mjs";

import userKey from "./modules/constants/userKey.mjs";

import getUser from "./modules/local-storage/getUser.mjs";

import canEnter from "./modules/validation/canEnter.mjs";

import limitText from "./modules/validation/limitText.mjs";

import hasAnySpaces from "./modules/validation/hasAnySpaces.mjs"

import containsLetter from "./modules/validation/containsLetter.mjs";

import containsNumber from "./modules/validation/containsNumber.mjs"

import controlAlertBox from "./modules/actions/controlAlertBox.mjs";

import setUser from "./modules/local-storage/setUser.mjs";

const loginNameBox = document.querySelector(".form-group__login");

const loginPassBox = document.querySelector(".form-group__pass");

const inputName = document.querySelector("input[name='name']");

const inputPassword = document.querySelector("input[name='password']");

const submitBtn = document.querySelector("input[type='submit']");

const user = getUser(userKey);

const userIn = canEnter(user);

if (userIn) {
    window.location.replace("./index.html");
}

inputName.addEventListener("input", () => {
    limitText(inputName, 30);

    const enteredData = inputName.value;

    const alertBox = loginNameBox.querySelector(".alert-message");

    let isValid = true;

    let message = "";

    if (hasAnySpaces(enteredData)) {
        isValid = false;

        message = "Whitespace is not allowed!";
    } else if (enteredData.length < 5) {
        isValid = false;

        message = "Minimum 5 characters.";
    } else if (!containsLetter(enteredData)) {
        isValid = false;

        message = "There are no letters!";
    }

    controlAlertBox(isValid, message, alertBox, loginNameBox);

    validInputs.name = isValid;
});

inputPassword.addEventListener("input", () => {
    limitText(inputPassword, 30);

    const enteredData = inputPassword.value;

    const alertBox = loginPassBox.querySelector(".alert-message");

    let isValid = true;

    let message = "";

    if (hasAnySpaces(enteredData)) {
        isValid = false;

        message = "Whitespace is not allowed!";
    } else if (!containsNumber(enteredData)) {
        isValid = false;

        message = "The password must contain at least one digit.";
        
    } else if (enteredData.length < 8) {
        isValid = false;

        message = "Minimum 8 characters.";
    }

    controlAlertBox(isValid, message, alertBox, loginPassBox);

    validInputs.password = isValid;
});

submitBtn.addEventListener("click", (btnEvent) => {
    btnEvent.preventDefault();

    for (const value of Object.values(validInputs)) {
        if (value !== true) {
            return;
        }
    }

    const newUser = new User(inputName.value, inputPassword.value, true);

    setUser(userKey, newUser);

    window.location.replace("./index.html");
});