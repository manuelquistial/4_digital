import express from "express";
import PublicacionesController from "../controllers/PublicacionesController";

var router = express.Router();

var publicaciones = new PublicacionesController();

router.get("/", async (req, res) => {    
    const result = await publicaciones.getPublicaciones();
    res.status(result.status).send(result.data);
});

export default router;