import inventoryDb from "@/api/inventoryDb";
import type { IOrder } from "@/interface";
import type { ISalesResponse } from "@/interface/sales/sales-response";


async function create(order: IOrder) {
    try {
        const { data } = await inventoryDb.post('/sales', order );
        console.log(data)
        return data.meessage;
        
    } catch (error) {
        throw error;
    }
}

async function find() {
    try {
        const { data } = await inventoryDb.get<ISalesResponse>('/sales');
        console.log(data);
        return data.sales;
    } catch (error) {
        throw error;
    }
}

export default {
    create,
    find
}