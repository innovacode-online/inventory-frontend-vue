<script lang="ts" setup>
import ProductForm from "@/components/products/ProductForm.vue";
import HeaderPage from '@/components/shared/HeaderPage.vue';


</script>

<template>
    <HeaderPage 
        title="Nuevo producto" 
        description="Agrega un producto al inventario" 
        btn-title="Volver" 
        pathname="products"
    />
    <ProductForm/>
</template>
