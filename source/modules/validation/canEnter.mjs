const canEnter = function (user) {
    let bool = false;

    try {
        if (user.isVerified) {
            bool = true;
        }
    } catch (error) {
        bool = false;
    }

    return bool;
}

export default canEnter;