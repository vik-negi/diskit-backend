import express from "express";
import videoController from "../controllers/videoController.js";

const router = express.Router();

router.post("/showdiskit", videoController.showDiscussion);
router.post("/newdiskit", videoController.makeNewDiskit);
router.get("/get-diskits", videoController.getDiskit);

export default router;
