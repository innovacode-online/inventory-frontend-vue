import { onMounted, ref } from "vue";
import { defineStore } from "pinia";
import router from "@/router";

import axios from "axios";

import { useToastStore } from "./toast";
import categoryService from "@/services/categoryService";
import type { ICategoriesResponse } from "@/interface";



export const useCategoryStore = defineStore('category', () => {

    const toastStore = useToastStore();

    const categories = ref<ICategoriesResponse[]>([]);
    const isLoading = ref(false);

    async function getAllCategories() {
        isLoading.value = true;
        try {
            const data = await categoryService.find();
            categories.value = data;

            isLoading.value = false;
        } catch (error) {
            handleError(error);
        } finally {
            isLoading.value = false;
        }
    }

    
    async function getCategoryByTerm(term:string) {
        isLoading.value = true;

        try {
            const category = await categoryService.findOne(term);
            isLoading.value = false;
            return category;
        } catch (error) {
            handleError(error);
            router.push('/categories')
        } finally {
            isLoading.value = false;
        }

    }

    async function updateCategoryById(id:number, name:string) {
        try {
            const message = await categoryService.update(id, name);
            toastStore.showToast('success', message);
            getAllCategories();
            router.push({ name: 'categories' })
        
        } catch (error) {
            handleError(error);
        } 
    }

    async function createNewCategory(name:string) {
        isLoading.value = true;

        try {
            const message = await categoryService.create(name);
            toastStore.showToast('success', message);
            isLoading.value = false;
            getAllCategories();
            router.push({ name: 'categories' })
        
        } catch (error) {
        
            handleError(error);
        
        } finally {
            isLoading.value = false;
        }
    }


    async function deleteCategory(id: string) {
        isLoading.value = true;

        try {
            const message = await categoryService.remove(id);
            toastStore.showToast('success', message);
            isLoading.value = false;
            getAllCategories();
        
        } catch (error) {
        
            handleError(error);
        
        } finally {
            isLoading.value = false;
        }
    }


    function handleError(error: unknown){
        if( axios.isAxiosError(error) ){
            toastStore.showToast('error', error.response?.data.message);
        }
        return;
    }

    onMounted(() => {
        getAllCategories();
    })

    return {
        categories,
        isLoading,

        // METHODS
        deleteCategory,
        createNewCategory,
        getCategoryByTerm,
        updateCategoryById
    }
})