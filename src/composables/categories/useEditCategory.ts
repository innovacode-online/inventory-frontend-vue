import { ref } from 'vue';
import type { ICategoriesResponse } from '../../interface/categories/categories-response';

import { useToastStore } from '../../stores/toast';
import { useCategoryStore } from '../../stores/category';

export const useEditCategory = () => {

    const categoryStore = useCategoryStore();
    const toastStore = useToastStore();

    const isLoading = ref(false);

    const handleSubmit = async (  category: ICategoriesResponse ) => {

        if (category.name.trim() === "") {
            toastStore.showToast('error', "Ingrese un nombre valido");
            return;
        }

        isLoading.value = true;
        await categoryStore.updateCategoryById(category.id, category.name)
        isLoading.value = false;
    }

    return {
        handleSubmit,
        isLoading,
    }
}