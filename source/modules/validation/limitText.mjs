const limitText = function (field, limitNum = 25)  {
    if (field.value.length > limitNum) {
        field.value = field.value.substring(0, limitNum);
    }
}

export default limitText;