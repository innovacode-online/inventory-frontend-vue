<script lang="ts" setup>
import type { IProductSale } from '../../interface/sales/sales-response';

const baseUrl = import.meta.env.VITE_API_URL_IMAGE;

defineProps<{
    product: IProductSale
}>()


</script>

<template>
    <div class="product__card grid lg:grid-cols-4 gap-7 items-center font-semibold">
        <div class="max-w-[70px]">
            <img :src="baseUrl + product.image" :alt="product.name">
        </div>
        <p>
            Nombre: <br>
            <span class="font-normal line-clamp-1">{{ product.name }}</span>
        </p>

        <p>
            Cantidad: <br>
            <span class="font-normal line-clamp-1">{{ product.quantity }}</span>
        </p>

        <p>
            Precio (Bs): <br>
            <span class="font-normal">{{ product.price }} Bs</span>
        </p>
    </div>
</template>
