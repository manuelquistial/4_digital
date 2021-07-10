import express from "express";
import UsuariosController from "../controllers/UsuariosController";

var router = express.Router();

var usuarios = new UsuariosController();

router.get("/", async (req, res) => {    
    const result = await usuarios.getUsuarios();
    res.send(result);
});


router.get("/fotos", async (req, res) => {   
    const result : any = await usuarios.getFotoByUsuario(req.query.usuario_id);
    res.send(result);
});

export default router;