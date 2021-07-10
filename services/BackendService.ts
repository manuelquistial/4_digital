import axios from 'axios';

class BackendService {

    private externalApi : String

    constructor() { 
        this.externalApi = "https://jsonplaceholder.typicode.com"
    }

    async getUsers(): Promise<any> {
        return await axios.get(
            this.externalApi + `/users`
        );
    }

    async getPosts(): Promise<any> {
        return await axios.get(
            this.externalApi + `/posts`
        );
    }

    async getAlbumsbyUser(user_id: string): Promise<any> {
        return await axios.get(
            this.externalApi + `/users/${user_id}/albums`
        );
    }

    async getPhotobyAlbum(album_id: string): Promise<any> {
        return await axios.get(
            this.externalApi + `/albums/${album_id}/photos`
        );
    }
}

export default BackendService;