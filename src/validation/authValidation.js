import {check} from "express-validator/check";
import {transValidation} from "./../../lang/vi"

let register = [
    check("email", transValidation.email_incorect)
        .isEmail()
        .trim(),
    check("gender", transValidation.gender_incorect)
        .isIn(["male", "female"]),
    check("password", transValidation.passwork_incorect)
        .isLength({min: 8})
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/),
    check("password_confirmation", transValidation.passwork_incorect)
        .custom((value, {req}) => {
            return value === req.body.passwork;
        }),
];

module.exports = {
    register: register
}
