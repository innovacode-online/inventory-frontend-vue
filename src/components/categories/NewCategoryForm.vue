<script lang="ts" setup>
import { ref } from 'vue';
import { useCategoryStore } from '../../stores/category';

const categoryStore = useCategoryStore();

const name = ref('');


const handleSubmit = () => {
    categoryStore.createNewCategory(name.value);
    name.value = '';
}

</script>

<template>
    <form @submit.prevent="handleSubmit" class="bg-white p-5 rounded-md shadow-md max-w-md mx-auto mt-10">
        <div class="form-control">
            <label for="name">Nombre: </label>
            <input v-model="name" type="text" id="name" name="category-name">
        </div>

        <button class="btn-primary">
            {{ categoryStore.isLoading ? 'Guardando...' : 'Crear categoria'  }}
        </button>
    </form>
</template>
