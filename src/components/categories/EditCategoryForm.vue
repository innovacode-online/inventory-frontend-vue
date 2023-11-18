<script lang="ts" setup>
import { useEditCategory } from '../../composables/categories/useEditCategory';
import type { ICategoriesResponse } from '../../interface/categories/categories-response';

const props = defineProps<{
    category: ICategoriesResponse;
}>();

const { handleSubmit, isLoading } = useEditCategory();


</script>

<template>
    <form @submit.prevent="handleSubmit(props.category)" class="bg-white p-5 rounded-md shadow-md max-w-md mx-auto mt-10">
        <div class="form-control">
            <label for="name">Nombre: </label>
            <input v-model="props.category.name" type="text" id="name" name="category-name">
        </div>

        <button class="btn-primary">
            {{ isLoading ? 'Guardando...' : 'Editar categoria' }}
        </button>
    </form>
</template>
