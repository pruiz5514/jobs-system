import { HttpClient } from "@/utils/client-http";

export class ApiService {
    private httpClient: HttpClient;

    constructor(){
        this.httpClient = new HttpClient();
    }

    async findAll(){
        try{
            const response = this.httpClient.get()
        }
    }
        
}