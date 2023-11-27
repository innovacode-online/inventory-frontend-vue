<script lang="ts" setup>
import { useCartStore } from '../../stores/cart';
import type { IProductsResponseData } from '@/interface';

const baseUrl = import.meta.env.VITE_API_URL_IMAGE;


const cartStore = useCartStore();

defineProps<{
    product: IProductsResponseData
}>()


</script>

<template>
    <div class="product__card grid md:grid-cols-7 gap-2 items-center font-semibold text-sm">
        <div>
            <img class="rounded-full max-w-[60px]" :src="baseUrl + product.image" :alt="product.name">
        </div>
        <p>
            Nombre: <br>
            <span class="font-normal line-clamp-1">{{ product.name }}</span>
        </p>
        <p>
            Precio (Bs): <br>
            <span class="font-normal">{{ product.price }} Bs</span>
        </p>

        <p>
            Stock: <br>
            <span class="font-normal">{{ product.stock }} u.</span>
        </p>
        <div class="col-span-2">
            <p>Acciones</p>
            <button @click="cartStore.addProductCart(product, 1)" class="btn-primary text-sm">Agregar carrito</button>
        </div>
    </div>
</template>