import { onMounted, ref } from "vue";
import router from "@/router";
import { defineStore } from "pinia";

import type { IProductCreate, IProductsResponse } from "@/interface";
import productServices from "@/services/productServices";

import { useToastStore } from "./toast";
import { handleAxiosError } from "@/helpers/handle-axios-error";

export const useProductStore = defineStore('product', () => {
    
    const toastStore = useToastStore();
    const isLoading = ref(false);
    const products = ref<IProductsResponse[]>([]);

    async function getAllProducts() {
        isLoading.value = true;
        try {
            const data = await productServices.find();
            products.value = data;
            isLoading.value = false;

        } catch (error) {
            handleAxiosError(error);
        
        } finally {
            isLoading.value = false;
        }

    }

    async function createNewProduct(image:any, product: IProductCreate ) {
        try {
            const message = await productServices.create(image, product);
            toastStore.showToast('success', message);
            
            router.push('/products');

        } catch (error) {
            handleAxiosError(error);
        }
    }


    onMounted(() => {
        getAllProducts();
    })

    return {
        products,

        // METHODS
        createNewProduct,
    }
})