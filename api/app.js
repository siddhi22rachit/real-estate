import express from "express";
import authRoute from"./routes/auth.route.js";
import cookieParser from "cookie-parser";
import postRoute from"./routes/post.route.js";
import testRoute from"./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import 'dotenv/config';
import cors from "cors";




const app= express();
app.use(cors({origin: process.env.CLIENT_URL, credentials:true}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use("/api/test", testRoute);

app.listen(8800,() => {
  console.log("server is running")
});