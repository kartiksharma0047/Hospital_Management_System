import express from "express";
import {
  addNewAdmin,
  addNewDoctor,
  getAllDoctors,
  getUserDetails,
  login,
  logoutAdmin,
  logoutPatient,
  patientRegister,
} from "../Controllers/userController.js";
import {isAdminAuthenticated,isPatientAuthenticated} from "../Middlewares/auth.js"

const router = express.Router();

router.post("/patient/register",patientRegister);
router.post("/login", login);
router.post("/admin/addnew", isAdminAuthenticated,addNewAdmin);
router.get("/doctors", getAllDoctors);
router.get("/admin/me", isAdminAuthenticated ,getUserDetails);
router.get("/patient/me", isPatientAuthenticated ,getUserDetails);
router.get("/admin/logout", isAdminAuthenticated ,logoutAdmin);
router.get("/patient/logout", isPatientAuthenticated ,logoutPatient);
router.post("/doctor/addnew", isAdminAuthenticated ,addNewDoctor);

export default router;

// <Day-1> Video Paused :- 1:34:11
// <Day-2> Video Paused :- 2:37:48
// <Day-3> Video Paused :- 3:34:19