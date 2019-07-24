let getloginRegister = (req, res) => {
    return res.render("auth/loginRegister");
};

let getLogout = (req, res) => {
    // do something
};

module.exports = {
    getloginRegister: getloginRegister,
    getLogout: getLogout,
};
