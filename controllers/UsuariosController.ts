import APIService from "../services/APIService";
import {Register} from "../models/Register"

class UsuariosController{

    private apiService : APIService

    constructor() {
        this.apiService = new APIService
    }

    async getUsuarios(){
        let usuarios = await this.apiService.getUsers()
        const register = new Register({
            metodo: "GET",
            datos: usuarios
        })
        register.save()
        return usuarios
    }

    async getFotoByUsuario(usuario_id : string){
        let albums = await this.apiService.getAlbumsbyUser(usuario_id)
        let fotos : any[] = await Promise.all( 
            albums.map(async (item) => {
                let fotos_album = await this.apiService.getPhotobyAlbum(item.id)
                return fotos_album
            })
        )

        return fotos
    }
}

export default UsuariosController