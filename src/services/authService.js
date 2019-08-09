import UserModel from "./../model/userModel"
import bcrypt from "bcrypt";
import uuidV4 from "uuid/v4";
import {transErrors, transSuccess, transMail} from "./../../lang/vi";
import { resolve } from "path";
import sendMail from "./../config/mailer";

let saltRounds = 7;

let register = (email, gender, password, protocol, host) => {
    return new Promise(async(resolve,rejects)=>{

        let userByEmail = await UserModel.findbyEmail(email);
        if(userByEmail){
            if(userByEmail.deleteAt != null){
                return rejects(transErrors.account_removed);
            }
            if(!userByEmail.local.isActive){
                return rejects(transErrors.account_not_active);
            }
            return rejects(transErrors.account_in_use);
        }
    
        let salt = bcrypt.genSaltSync(saltRounds);
    
        let userItem = {
            userName: email.split("@")[0],
            gender: gender,
            local: {
                email: email,
                password: bcrypt.hashSync(password, salt),
                verifyToken: uuidV4()
            }
        };
    
        let user = await UserModel.createNew(userItem);
        let linkVerify = `${protocol}://${host}/verify/${user.local.verifyToken}`;
        //send email
        sendMail(email, transMail.subject, transMail.template(linkVerify))
            .then(success => {
                resolve(transSuccess.userCreated(user.local.email));
            })
            .catch(async (error) => {
                // remove user
                await UserModel.removeById(use._id);
                console.log(error);
                rejects(transMail.send_failed);
            });

    });
};

let  verifyAccount = (token) => {
    return new Promise(async (resolve, rejects) => {
        let userByToken = await UserModel.findByToken(token);
        if(!userByToken){
            return rejects(transErrors.token_undefine);
        }
        
        await UserModel.verify(token);
        resolve(transSuccess.account_actived);
    });
}

module.exports = {
    register: register,
    verifyAccount: verifyAccount,
}
