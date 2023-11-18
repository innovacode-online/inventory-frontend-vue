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

async function findOne(term:string): Promise<ICategoriesResponse> {
    try {
        const { data } = await inventoryDb.get<ICategoriesResponse>(`/categories/${ term }`);
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

async function update(id: number, name: string) {
    try {
        const { data } = await inventoryDb.patch(`/categories/${ id }`, { name });
        return data.message;
    } catch (error) {
        console.log(error);
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
    findOne,
    update,
    create,
    remove
}