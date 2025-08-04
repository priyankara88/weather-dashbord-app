import { Router } from "express";
import * as widgetController from "../controllers/widgetController";

const router = Router();

router.get("/", widgetController.getAllWidgets);
router.post("/weather", widgetController.getWidgets);
router.post("/", widgetController.createWidget);
router.delete("/:id", widgetController.deleteWidget);

export default router;
