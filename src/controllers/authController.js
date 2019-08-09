import {validationResult} from "express-validator/check";
import {auth} from "./../services/index";

let getloginRegister = (req, res) => {
    return res.render("auth/master", {
        errors: req.flash("errors"),
        success: req.flash("success")
    });
};

let postRegister = async(req, res) => {
    //console.log(req.body);
    //console.log(validationResult(req));
    //console.log(validationResult(req).isEmpty());
    //console.log("-----------------------------");
    //console.log(validationResult(req).mapped());
    let errorArr = [];
    let successArr = [];

    let validationErrors = validationResult(req);
    if(!validationErrors.isEmpty()){
        let errors = Object.values(validationErrors.mapped());
        //console.log(errors)
        errors.forEach(item => {
            errorArr.push(item.msg);
        });
        //console.log(errorArr);

        req.flash("errors", errorArr);
        return res.redirect("/login-register");
    }
    //console.log(req.body);
    try {
        let createUserSuccess = await auth.register(req.body.email, req.body.gender, req.body.password, req.protocol, req.get("host"));
        successArr.push(createUserSuccess);
        req.flash("success", successArr);
        return res.redirect("/login-register");
    } catch (error) {
        errorArr.push(error);
        req.flash("errors", errorArr);
        return res.redirect("/login-register");
    }

};

let verifyAccount = async (req, res) => {
    let errorArr = [];
    let successArr = [];
    // connect service
    try {
        let verifySuccess = await auth.verifyAccount(req.params.token);
        successArr.push(verifySuccess);
        req.flash("success", successArr);
        return res.redirect("/login-register");
    } catch (error) {
        errorArr.push(error);
        req.flash("errors", errorArr);
        return res.redirect("/login-register");
    }
}

module.exports = {
    getloginRegister: getloginRegister,
    postRegister: postRegister,
    verifyAccount: verifyAccount
};
