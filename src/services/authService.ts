import inventoryDb from "@/api/inventoryDb";
import { handleAxiosError } from "@/helpers/handle-axios-error";
import type { ILoginResponse, IUser } from "@/interface";



async function login(email:string, password:string) {
    try {
        const { data } = await inventoryDb.post<ILoginResponse>('/auth/login', { email, password });
        return data;
        
    } catch (error) {
        handleAxiosError(error);
    }
}


async function logout(token:string) {
    
    try {
        await inventoryDb.post('/auth/logout', {}, {
            headers: {
                Authorization: 'Bearer ' + token,
                Accept: 'application/json'
            }
        })
    } catch (error) {
        throw error;
    }
}

async function validate(token:string) {
    try {
        const { data } = await inventoryDb.get<IUser>('/auth/user',{
            headers: {
                Authorization: 'Bearer ' + token,
                Accept: 'application/json'
            }
        })
        return data;
    } catch (error) {
        handleAxiosError(error);
    }   
}

export default {
    login,
    logout,
    validate,
}