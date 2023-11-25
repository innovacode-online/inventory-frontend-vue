<script lang="ts" setup>
import { useProductStore } from '../../stores/product';
import type { IProductsResponseData } from '@/interface';

const baseUrl = 'http://localhost:8000';

defineProps<{
    product: IProductsResponseData
}>()

const productStore = useProductStore();

</script>

<template>
    <div class="product__card grid lg:grid-cols-9 gap-7 items-center font-semibold">
        <div>
            <img :src="baseUrl + product.image" :alt="product.name">
        </div>
        <p>
            Nombre: <br>
            <span class="font-normal line-clamp-1">{{ product.name }}</span>
        </p>

        <p>
            Categoria: <br>
            <span class="font-normal line-clamp-1">{{ product.category.name }}</span>
        </p>

        <p>
            Precio (Bs): <br>
            <span class="font-normal">{{ product.price }} Bs</span>
        </p>

        <p>
            Stock: <br>
            <span class="font-normal">{{ product.stock }} u.</span>
        </p>
        <div class="col-span-3">
            <p>Acciones</p>
            <div class="flex gap-2 items-center">
                <RouterLink :to="{ path: `/products/${ product.slug }` }"  class="btn-primary text-center">Ver</RouterLink>
                <button class="btn-primary">Editar</button>
                <button @click="productStore.deleteProductById(`${ product.id }`)" class="btn-delete">Eliminar</button>
            </div>
        </div>
    </div>
</template>
