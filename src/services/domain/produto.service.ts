import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { ProdutoDTO } from "../../models/produto.dto";

@Injectable()
export class ProdutoService {
    constructor(public http: HttpClient){

    }

    findById(produto_id: string) {
        return this.http.get<ProdutoDTO>(`${API_CONFIG.baseUrl}/products/${produto_id}`);
    }

    findByCategoria(categoria_id: string, page: number = 0, linesPage : number = 24) {
        return this.http.get(`${API_CONFIG.baseUrl}/products/?categories=${categoria_id}&page=${page}&linesPage=${linesPage}`);
    }

    getSmallImageFromBucket(id:string) : Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}/prod${id}-small.jpg`;
        return this.http.get(url, {responseType : 'blob'});
    }

    getImageFromBucket(id:string) : Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}/prod${id}.jpg`;
        return this.http.get(url, {responseType : 'blob'});
    }
}