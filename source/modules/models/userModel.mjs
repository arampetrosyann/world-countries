const User = function (name = null, password = null, auth = false) {
    this.name = name;
    this.password = password;
    this.saves = { countries: [] };
    this.isVerified = auth;
};

const validInputs = {
    name: false,
    password: false,
};

export { User, validInputs }