const hasAnySpaces = function (str) {
    const regAnySpaces = /\s/;

    return regAnySpaces.test(str);
}

export default hasAnySpaces;