import { ContentCompany, ICompany, IPostCompany } from "@/models/company.model";
import { ContentVacancy, IPostVacancy, IVacancy } from "@/models/vacancy.model";
import { errorAlert, successAlert } from "@/utils/alerts";
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
            const response = this.httpClient.get<ICompany>(url);
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
            successAlert('Elminado exitosamente')
            return dataToDelete
        } catch(error){
            console.log(error);
            errorAlert('No se pudo eleminar')
            throw error;
        }
    }
    async post(url:string,body:IPostCompany){
        try{
            const newData = await this.httpClient.post<IPostCompany, ContentCompany>(url,body);
            successAlert('Publicación creado exitosamente')
            return newData
        }catch(error){
            console.log(error);
            errorAlert('No se pudo publicar')
            throw error;
        }
    }   
    
    async postVacancy(url:string,body:IPostVacancy){
        try{
            const newData = await this.httpClient.post<IPostVacancy, ContentVacancy>(url,body);
            successAlert('Publicación creado exitosamente')
            return newData
        }catch(error){
            console.log(error);
            errorAlert('No se pudo publicar')
            throw error;
        }
    }  

    async edit(url:string, id:string, body:IPostCompany){
        try{
            const editData = await this.httpClient.put<IPostCompany,ContentCompany>(`${url}/${id}`,body);
            successAlert('Publicación editada exitosamente')
            return editData;
        }catch(error){
            console.log(error);
            errorAlert('No se pudo editar')
            throw error;
        }
    }

    async editVacant(url:string, id:string, body:IPostVacancy){
        try{
            const editData = await this.httpClient.put<IPostVacancy,ContentVacancy>(`${url}/${id}`,body);
            successAlert('Publicación editada exitosamente')
            return editData;
        }catch(error){
            console.log(error);
            errorAlert('No se pudo editar')
            throw error;
        }
    }
}