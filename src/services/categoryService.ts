import inventoryDb from "@/api/inventoryDb"
import type { ICategoriesResponse } from "@/interface";


async function find(): Promise<ICategoriesResponse[]>{
    try {
        const { data } = await inventoryDb.get('/categories');
        return data;
        
    } catch (error) {
        throw error;
    }
    
}

async function create(name:string): Promise<string> {
    try {
        const { data } = await inventoryDb.post('/categories', { name });
        return data.message;

    } catch (error) {
        throw error;
    }
    
}

async function remove(id:string): Promise<string> {
    try {
        const { data } = await inventoryDb.delete(`/categories/${ id }`);
        return data.message;

    } catch (error) {
        throw error;
    }
}


export default {
    find,
    create,
    remove
}