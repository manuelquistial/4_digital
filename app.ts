//app.ts

import express from "express";
import mongoose from "mongoose";
import routes from "./routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://test:ozt4s3449L9MnR76@cluster0.h0sb4.mongodb.net/test", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true } )
.then(
    () => {console.log("connected")},
).catch(err => {
    console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
});

routes(app);

export default app;