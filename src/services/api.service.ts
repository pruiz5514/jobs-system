import { ContentCompany, ICompany, IPostCompany } from "@/models/company.model";
import { ContentVacancy, IPostVacancy, IVacancy } from "@/models/vacancy.model";
import { HttpClient } from "@/utils/client-http";

export class ApiService {
    private httpClient: HttpClient;

    constructor(){
        this.httpClient = new HttpClient();
    }

    async findAll(url:string){
        try{
            const response = this.httpClient.get<IVacancy | ICompany >(url);
            return response
        }catch(error){
            console.log(error);
            throw error;
        }
    }

    async findAllCompanies(url:string){
        try{
            const response = this.httpClient.get<ContentCompany >(url);
            return response
        }catch(error){
            console.log(error);
            throw error;
        }
    }

    async findById(url:string,id:string){
        try{
            const response = this.httpClient.get<ContentVacancy | ContentCompany>(`${url}/${id}`);
            return response
        } catch(error){
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
            const newData = await this.httpClient.post<IPostCompany, ContentCompany>(url,body);
            return newData
        }catch(error){
            console.log(error);
            throw error;
        }
    }   
    
    async postVacancy(url:string,body:IPostVacancy){
        try{
            const newData = await this.httpClient.post<IPostVacancy, ContentVacancy>(url,body);
            return newData
        }catch(error){
            console.log(error);
            throw error;
        }
    }  

    async edit(url:string, id:string, body:IPostCompany){
        try{
            const editData = await this.httpClient.put<IPostCompany,ContentCompany>(`${url}/${id}`,body);
            return editData;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
}