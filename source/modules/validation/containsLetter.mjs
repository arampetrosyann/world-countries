const containsLetter = function (str) {
    const regLetters = /[a-zA-Z]/;

    return regLetters.test(str);
}

export default containsLetter;