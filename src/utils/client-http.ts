const defaultBaseUrl = "https://vacantsbackendgates-production.up.railway.app/api/v1";

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

    async get<T>(url:string): Promise<T> {
        const headers  = await this.getHeader();
        const response = await fetch (`${this.baseUrl}/${url}` , {
            method: 'GET',
            headers: headers,
            cache: "no-store"
        });

       return this.handleResponse(response)
    }

    async delete<T>(url: string): Promise<T> {
        const headers = await this.getHeader();
        const response = await fetch(`${this.baseUrl}/${url}`,{
            method: 'DELETE',
            headers: headers
        });

        return this.handleResponse(response);this.getHeader();
    }

    async post<B,T>(url:string, body:B): Promise<T>{
        const headers = await this.getHeader();
        const response = await fetch(`${this.baseUrl}/${url}`,{
            headers: headers,
            method: 'POST',
            body: JSON.stringify(body)
        });

        return this.handleResponse(response);
    }
}