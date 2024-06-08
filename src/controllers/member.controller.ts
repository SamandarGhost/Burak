import { Request, Response} from "express";
import { T } from "../libs/types/common";

const memberController: T = {};
memberController.goHome = (req: Request, res: Response) => {
    try{
        res.send("Home Page");
    } catch (err) {
        console.log("ERROR on Home Page:", err);
    }
};

memberController.getLogin = (req: Request, res: Response) => {
    try{
        res.send("Login Page");
    } catch (err) {
        console.log("ERROR on Login Page:", err);
    }
};

memberController.getSignup = (req: Request, res: Response) => {
    try{
        res.send("SignUp Page");
    } catch (err) {
        console.log("ERROR on SignUp Page:", err);
    }
};

export default memberController;