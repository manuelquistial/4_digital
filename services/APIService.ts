import BackendService from "./BackendService";

class APIService {

    private backendService: BackendService

    constructor() { 
        this.backendService = new BackendService();
    }

    async getUsers(): Promise<any> {
        let user = await this.backendService.getUsers()
        return user.data
    }

    async getPosts(): Promise<any> {
        let posts = await this.backendService.getPosts()
        return posts.data
    }

    async getAlbumsbyUser(user_id: string): Promise<any> {
        let albumsbyuser = await this.backendService.getAlbumsbyUser(user_id)
        return albumsbyuser.data
    }

    async getPhotobyAlbum(album_id: string): Promise<any> {
        let photosbyalbum = await this.backendService.getPhotobyAlbum(album_id)
        return photosbyalbum.data
    }
}

export default APIService;