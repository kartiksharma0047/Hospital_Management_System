import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./Routers/messageRouter.js";
import { errorMiddleware } from "./Middlewares/errorMiddleware.js";
import userRouter from './Routers/userRouter.js'
import appointmentRouter from './Routers/appointmentRouter.js'

const app = express();
configDotenv();

// Middlewares
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/"
}))


// Routers Connection
app.use("/api/v1/message",messageRouter);
app.use("/api/v1/user",userRouter);
app.use("/api/v1/appointment",appointmentRouter)


dbConnection();

// Use in Last to handle all the errors
app.use(errorMiddleware)
export default app;