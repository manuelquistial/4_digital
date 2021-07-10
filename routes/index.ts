import express from "express";
import usuarios from "./usuarios"
import publicaciones from "./publicaciones";
var router = express.Router();


export default function (app) {
  router.use("/usuarios", usuarios)
  router.use("/publicaciones", publicaciones)
  app.use("/", router);
}
