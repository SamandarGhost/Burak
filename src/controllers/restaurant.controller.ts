import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import { LoginInput } from "../libs/types/member";

// BSSR: EJS Project

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try{
        console.log("goHome");
        res.send("Home Page");
        // send | json | redirect | end | render
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

restaurantController.processLogin = async (req: Request, res: Response) => {
    try{
        console.log("processLogin");
        console.log("body:", req.body);
        const input: LoginInput = req.body;

    
        const memberService = new MemberService();
        const result = await memberService.processLogin(input);


        res.send(result);
    } catch (err) {
        console.log("Error on Login Page:", err);
        res.send(err);
    }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
    try{
        console.log("processSignup");

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;

        const memberService = new MemberService();
        const result = await memberService.processSignup(newMember);
        res.send(result);
    } catch (err) {
        console.log("Error on Signup Page:", err);
        res.send(err);
    }
};
export default restaurantController;