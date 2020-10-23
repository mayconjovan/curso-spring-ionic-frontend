import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "../../config/api.config";
import { ClienteDTO } from "../../models/cliente.dto";
import { ImageUtilService } from "../image-util.service";
import { StorageService } from "../storage.services";

@Injectable()
export class ClienteService {
    constructor(
        public http: HttpClient, 
        public storage: StorageService,
        public imageUtilService: ImageUtilService) {

    }

    findByEmail(email: string) {
        return this.http.get(`${API_CONFIG.baseUrl}/clients/email?value=${email}`)
    }

    findById(id: string) {
        return this.http.get(`${API_CONFIG.baseUrl}/clients/${id}`)
    }

    getImageFromBucket(id: string): Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}/cp${id}.jpg`
        return this.http.get(url, { responseType: 'blob' });
    }

    insert(obj: ClienteDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/clients`,
            obj,{
                observe: 'response',
                responseType: 'text'
            }
        )
    }

    uploadPicture(picture) {
        let pictureBlob = this.imageUtilService.dataUriToBlob(picture);
        let formData : FormData = new FormData();
        formData.append('file', pictureBlob, 'file.png');
        return this.http.post(
            `${API_CONFIG.baseUrl}/clients/picture`,
            formData,{
                observe: 'response',
                responseType: 'text'
            }
        )
    }

}