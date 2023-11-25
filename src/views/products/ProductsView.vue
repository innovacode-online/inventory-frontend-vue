<script lang="ts" setup>
import HeaderPage from "@/components/shared/HeaderPage.vue";
import ProductItem from "@/components/products/ProductItem.vue";

import { useProductStore } from '../../stores/product';
import { storeToRefs } from 'pinia';

const productStore = useProductStore();
const { products } = storeToRefs(productStore);
console.log(products)

</script>

<template>
    <HeaderPage 
        title="Gestion de productos"
        btn-title="Nuevo producto"
        pathname="new-product"
        description="Controla tu inventario de productos"
    />

    <!-- LISTADO DE PRODUCTOS -->
    <ul>
        <li v-for="product in products" :key="product.id">
            <ProductItem :product="product" /> 
        </li>
    </ul>
    

</template>
