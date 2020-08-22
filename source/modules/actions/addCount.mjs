const addCount = function (box) {
    let totalCount = 0;

    if (Array.isArray(this)) {
        totalCount = this.length;
    }

    box.innerText = totalCount;
}

export default addCount;