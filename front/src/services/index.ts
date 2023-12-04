import axios, { AxiosInstance } from "axios";
import { WordProps, ResponseProps } from "../types";
class Service {
private api:AxiosInstance = axios.create({
baseURL: "http://localhost:3021",
headers: {
"Content-Type":"application/json"
}
});
async list(): Promise<WordProps[]> {
    try {
        const response = await axios.get("http:localhost:3021/list");
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados do backend:", error);
        throw error;
    }
}
async create(name:string): Promise<WordProps> {
    try {
        const response = await axios.get("http:localhost:3021/list");
        await axios.get(`http://localhost:3021/create/:name`);
        return response.data;
    } catch (error) {
        console.error("Erro ao enviar o nome para o backend:", error);
        throw error;
    }
}
async remove(id:number): Promise<ResponseProps> {
    try {
        const response = await axios.get("http:localhost:3021/list");
        await axios.get(`http://localhost:3021/revome/${id}`)
        return response.data;
    } catch (error) {
        console.error("Erro ao apagar o nome:", error);
        throw error;
      }
}
}
const service = new Service();
export default service;