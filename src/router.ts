 import express from "express";
 const router = express.Router();
 import memberController from "./controllers/member.controller";
 import makeUploader from "./libs/utils/uploader";

/* Member */ 
router.post("/member/signup", memberController.signup);
router.post("/member/login", memberController.login);
router.post(
    "/member/logout", 
    memberController.verifyAuth, 
    memberController.logout
);
router.get(
    "/member/detail",
    memberController.verifyAuth, 
    memberController.getMemberDetail
);

router.post(
    "/member/update", 
    memberController.verifyAuth,
    makeUploader("members").single("memberImage"),
    memberController.updateMember
);

router.get("/member/top-users", memberController.getTopUsers);



/* Product */ 



/* Order */ 



 export default router;