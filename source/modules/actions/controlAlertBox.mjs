const controlAlertBox = function (
    isInputValid = true,
    message,
    currentBox = null,
    parentBox
  ) {
    if (!isInputValid) {
        if (currentBox) {
            currentBox.textContent = message;
        } else {
            const newAlertBox = document.createElement("div");
  
            newAlertBox.className = "alert-message";
  
            parentBox.append(newAlertBox);
  
            newAlertBox.textContent = message;
        }
    } else {
        if (currentBox) {
            currentBox.remove();
        }
    }
};
  
export default controlAlertBox;
  