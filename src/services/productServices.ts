import inventoryDb from "@/api/inventoryDb"
import type { IProductCreate, IProductsResponse, IProductsResponseData } from "@/interface";


async function find(): Promise<IProductsResponseData[]> {
    try {
        const { data } = await inventoryDb.get<IProductsResponse>('/products');

        return data.products;
    } catch (error) {
        throw error;
    }
}

async function findOne(slug: string) {
    
}

async function remove(id: string) {
    
}

async function create( image: any, product: IProductCreate ) {

    try {
        const formData = new FormData();
        formData.append('image', image);
    
        const { data: imageUrl } = await inventoryDb.post('/upload', formData);

        const { data } = await inventoryDb.post('/products', {
            ...product,
            image: imageUrl,
        });

        return data.message;

    } catch (error) {
        throw error;
    }
}

export default {
    find,
    create,
    remove,
    findOne,
}