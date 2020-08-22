const containsNumber = function (str) {
    const regNumbers = /\d/;

    return regNumbers.test(str);
}

export default containsNumber;