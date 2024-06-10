import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";

// BSSR: EJS Project

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try{
        console.log("goHome");
        res.send("Home Page");
    } catch (err) {
        console.log("Error on Home Page:", err);
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try{
        console.log("getLogin");
        res.send("Login Page");
    } catch (err) {
        console.log("Error on Login Page:", err);
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try{
        console.log("getSignup");
        res.send("SignUp Page");
    } catch (err) {
        console.log("Error on Signup Page:", err);
    }
};

export default restaurantController;