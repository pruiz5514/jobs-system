import { ICompany, IPostCompany } from "@/models/company.model";
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

    async destroy (url: string,id:string){
        try{
            const dataToDelete = this.httpClient.delete(`${url}/${id}`);
            return dataToDelete
        } catch(error){
            console.log(error);
            throw error;
        }
    }
    async post(url:string,body:IPostCompany){
        try{
            const newData = await this.httpClient.post(url,body);
            return newData
        }catch(error){
            console.log(error);
            throw error;
        }
    }        
}