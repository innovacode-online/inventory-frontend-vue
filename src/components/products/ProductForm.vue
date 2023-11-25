<script lang="ts" setup>
import { reactive, ref } from 'vue';

import { useToastStore } from '../../stores/toast';
import { useProductStore } from '../../stores/product';
import { useCategoryStore } from '../../stores/category';

const categoryStore = useCategoryStore();
const toastStore = useToastStore();
const productStore = useProductStore();

const image = ref();
const preImage = ref('');

const product = reactive({
    name: '',
    description: '',
    stock: 0,
    price: 0,
    category_id: 1,
});

const handleFile = (e: any) => {
    const file = e.target.files[0];
    image.value = file;
    preImage.value = URL.createObjectURL(file);
}

const handleSubmit = () => {
    if (product.name.trim() === ''){
        toastStore.showToast('error', 'Ingresa un nombre valido');
        return;
    }

    if (product.stock <= 0){
        toastStore.showToast('error', 'Ingresa un stock valido');
        return;
    }

    if (product.price <= 0){
        toastStore.showToast('error', 'Ingresa un precio valido');
        return;
    }

    productStore.createNewProduct(image.value, product);

}


</script>

<template>
    <form @submit.prevent="handleSubmit" class="product__form">
        <div class="text-center max-w-[560px] w-full">
            <h3>Seleccione una imagen</h3>
            <input type="file" accept=".jpg, .png, .webp" @change="handleFile">
            <p v-show="preImage === ''">No hay imagen</p>
            <img :src="preImage">
        </div>

        <div class="w-full">
            <h3>Detalles del producto</h3>

            <div class="form-control">
                <label for="name">Nombre del producto:</label>
                <input v-model="product.name" type="text" name="name" id="name">
            </div>

            <div class="form-control">
                <label for="description">Descripcion: </label>
                <textarea v-model="product.description" class="product__form--textarea" cols="3" rows="3" type="text" name="description"
                    id="description"></textarea>
            </div>

            <div class="form-control">
                <label for="stock">Stock: </label>
                <input v-model="product.stock" type="number" min="0" name="stock" id="stock">
            </div>

            <div class="form-control">
                <label for="price">Precio (Bs): </label>
                <input v-model="product.price" type="number" min="0" name="price" id="price">
            </div>

            <div class="form-control">
                <label for="category_id">Categorias: </label>

                <select v-model="product.category_id" class="product__form--select" name="category_id" id="category_id">
                    <option disabled value="">Seleccione una categoria</option>

                    <option :key="category.id" :value="category.id" v-for="category in categoryStore.categories">
                        {{ category.name }}
                    </option>

                </select>
            </div>

            <button class="btn-primary">Guardar producto</button>

        </div>
    </form>
</template>


<style scoped>
.product__form {
    @apply grid lg:flex w-full gap-12 items-center
}

.product__form--select {
    @apply py-3 px-2 rounded-lg border border-slate-400 focus:outline-primary
}

.product__form--textarea {
    @apply bg-white rounded-lg border border-slate-400 focus:outline-primary p-2
}
</style>