export interface IOrder {
    client: string;
    total: number;
    products: {
        id: number;
        quantity: number;
    }[];
}