import { handleAxiosError } from "@/helpers/handle-axios-error";
import type { ISale, ISalesResponse } from "@/interface/sales/sales-response";
import saleService from "@/services/saleService";
import { defineStore } from "pinia";
import { onMounted, ref } from "vue";


export const useSaleStore = defineStore('sale', () => {

    const sales = ref<ISale[]>([]);



    async function getAllSales() {
        try {
            const data = await saleService.find();
            sales.value = data;
            console.log(sales)
        } catch (error) {
            handleAxiosError(error);        
        }
    }


    onMounted(() => {
        getAllSales();
    })


    return {
        sales,
        getAllSales
    }
})