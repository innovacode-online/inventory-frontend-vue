<script lang="ts" setup>
import type { IProductsResponse } from '@/interface';

const baseUrl = 'http://localhost:8000';

defineProps<{
    product: IProductsResponse
}>()



</script>

<template>
    <li class="product__card grid lg:grid-cols-7 gap-6 items-center">
        <div>
            <img :src="baseUrl + product.image" :alt="product.name">
        </div>
        <p>
            Nombre: <br>
            <span>{{ product.name }}</span>
        </p>
    </li>
</template>
