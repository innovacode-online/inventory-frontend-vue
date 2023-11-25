<script lang="ts" setup>
import type { IProduct } from '../../interface/products/full-product';

defineProps<{
    product: IProduct;
}>();


const baseUrl = 'http://localhost:8000';

</script>

<template>
    <form class="product__form">
        <div class="text-center max-w-[560px] w-full">
            <h3>Imagen del producto</h3>
            
            <img :src="baseUrl + product.image" :alt="product.name">
        </div>

        <div class="w-full">
            <h3>Detalles del producto</h3>

            <div class="form-control">
                <label for="name">Nombre del producto:</label>
                <input disabled :value="product.name" type="text" name="name" id="name">
            </div>

            <div class="form-control">
                <label for="description">Descripcion: </label>
                <textarea disabled :value="product.description" class="product__form--textarea" cols="3" rows="3" type="text"
                    name="description" id="description"></textarea>
            </div>

            <div class="form-control">
                <label for="stock">Stock: </label>
                <input disabled :value="product.stock" type="number" min="0" name="stock" id="stock">
            </div>

            <div class="form-control">
                <label for="price">Precio (Bs): </label>
                <input disabled :value="product.price" type="number" min="0" name="price" id="price">
            </div>

            <div class="form-control">
                <label for="category">Categoria: </label>
                <input disabled :value="product.category.name" type="text" name="category" id="category">
            </div>
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