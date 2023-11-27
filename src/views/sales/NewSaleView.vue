<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useProductStore } from '../../stores/product';

import HeaderPage from '@/components/shared/HeaderPage.vue';
import SimpleProductCard from '@/components/products/SimpleProductCard.vue';
import CartList from "@/components/sales/CartList.vue";

const productStore = useProductStore();
const { products } = storeToRefs(productStore);

</script>

<template>
    <HeaderPage btn-title="Volver" title="Crea una nueva venta" pathname="sales"
        description="Agrega productos al carrito" />

    <section class="grid grid-cols-2 gap-8">
        <!-- LISTADO DE PRODUCTOS -->
        <ul class="space-y-4">
            <li v-for="product in products" :key="product.id">
                <SimpleProductCard :product="product"/>
            </li>
        </ul>
        <!-- CARRITO -->
        <CartList/>

    </section>
</template>
