import { ICompany } from "@/models/company.model";
import { IVacancy } from "@/models/vacancy.model";
import { HttpClient } from "@/utils/client-http";

export class ApiService {
    private httpClient: HttpClient;

    constructor(){
        this.httpClient = new HttpClient();
    }

    async findAll(url:string){
        try{
            const response = this.httpClient.get<IVacancy | ICompany>(url);
            return response
        }catch(error){
            console.log(error);
            throw error;
        }
    }
        
}