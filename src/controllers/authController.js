let getloginRegister = (req, res) => {
    return res.render("auth/master");
};

let getLogout = (req, res) => {
    // do something
};

module.exports = {
    getloginRegister: getloginRegister,
    getLogout: getLogout,
};
