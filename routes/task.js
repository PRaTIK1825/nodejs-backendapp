import express from "express";    
import { DeleteTask, getMyTask, newTask, updateTask } from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/Auth.js";


 const router = express.Router()

 router.post("/new",isAuthenticated, newTask)
 
 router.get("/alltask",isAuthenticated, getMyTask)


router.route("/:id").put(isAuthenticated, updateTask).delete(isAuthenticated ,DeleteTask)


 export default router;
 