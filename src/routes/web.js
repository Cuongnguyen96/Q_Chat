import express from "express";
//import authController from "./../controllers/authController";
//import homeController from "./../controllers/homeController";
import {home, auth} from "./../controllers/index";

let router = express.Router();

/**
 * Init all routes
 * @param app from exactly module
 */

let initRoutes = (app) => {

    router.get("/",  home.getHome);
    
    router.get("/login-register",  auth.getloginRegister);
    router.get("/logout",  auth.getLogout);

    return app.use("/", router);
}

module.exports = initRoutes;

