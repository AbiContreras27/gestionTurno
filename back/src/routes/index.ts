import { Router } from "express";
import userRouter from "./userRoutes";
import appointmentRouter from "./appointmentsRoutes";

const router: Router = Router();

router.use("/users", userRouter);
router.use("/appointments", appointmentRouter);


export default router;
