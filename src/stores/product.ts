import { onMounted, ref } from "vue";
import router from "@/router";
import { defineStore } from "pinia";

import productServices from "@/services/productServices";
import type { IProduct, IProductCreate, IProductsResponseData } from "@/interface";

import { useToastStore } from "./toast";
import { handleAxiosError } from "@/helpers/handle-axios-error";




export const useProductStore = defineStore('product', () => {
    
    const toastStore = useToastStore();
    const isLoading = ref(false);
    const products = ref<IProductsResponseData[]>([]);
    const product = ref<IProduct>();

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
            getAllProducts();

        } catch (error) {
            handleAxiosError(error);
        }
    }


    async function getProductBySlug(slug:string) {
        try {
            isLoading.value = true;
            const data = await productServices.findOne(slug);
            product.value = data;

        } catch (error) {
            router.push('/products');
            handleAxiosError(error);
        } finally {
            isLoading.value = false;
        }
    }

    async function deleteProductById(id:string) {
        try {
            const message = await productServices.remove(id);
            toastStore.showToast('success', message);
            getAllProducts();
        } catch (error) {
            handleAxiosError(error);
        }
    }


    onMounted(() => {
        getAllProducts();
    })

    return {
        products,
        product,
        isLoading,

        // METHODS
        createNewProduct,
        getProductBySlug,
        deleteProductById
    }
})