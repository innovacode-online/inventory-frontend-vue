import inventoryDb from "@/api/inventoryDb";
import { handleAxiosError } from "@/helpers/handle-axios-error";
import type { ILoginResponse } from "@/interface";



async function login(email:string, password:string) {
    try {
        const { data } = await inventoryDb.post<ILoginResponse>('/auth/login', { email, password });
        return data;
        
    } catch (error) {
        handleAxiosError(error);
    }
}


export default {
    login
}