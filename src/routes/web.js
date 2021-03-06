import express from "express";
//import authController from "./../controllers/authController";
//import homeController from "./../controllers/homeController";
import {home, auth} from "./../controllers/index";
import {authValid} from "./../validation/index";

let router = express.Router();

/**
 * Init all routes
 * @param app from exactly module
 */

let initRoutes = (app) => {

    router.get("/",  home.getHome);
    
    router.get("/login-register",  auth.getloginRegister);
    //router.get("/logout",  auth.getLogout);
    router.post("/register", authValid.register, auth.postRegister);
    router.get("/verify/:token", auth.verifyAccount);

    return app.use("/", router);
}

module.exports = initRoutes;



