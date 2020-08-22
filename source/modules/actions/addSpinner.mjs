const addSpinner = function (classStyles, box) {
    const spinner = document.createElement("div");

    spinner.innerHTML = "Loading..."

    spinner.className = classStyles;

    box.append(spinner);

    return spinner;
}

export default addSpinner;