import APIService from "../services/APIService";

class PublicacionesController{

    private apiService : APIService

    constructor() {
        this.apiService = new APIService
    }

    async getPublicaciones(){
        let publicaciones = await this.apiService.getPosts()
        return publicaciones
    }
}

export default PublicacionesController