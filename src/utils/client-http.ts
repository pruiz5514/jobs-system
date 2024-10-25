const defaultBaseUrl = "http://192.168.88.153/api/v1";

export class HttpClient {
    private baseUrl: string

    constructor(baseUrl? : string){
        this.baseUrl = baseUrl || defaultBaseUrl
    }

    private async getHeader(){
        return{
            "Content-Type" : "application/json",
        };
    }

    private async handleResponse(response: Response){
        if(!response.ok){
            throw new Error ('Ocurrio un error en la peticion')
        }

        return await response.json();
    }

    private async get<T>(url:string): Promise<T> {
        const headers  = await this.getHeader();
        const response = await fetch (`${this.baseUrl}/${url}` , {
            method: 'GET',
            headers: headers
        });

       return this.handleResponse(response)
    }
}