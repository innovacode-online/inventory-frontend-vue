<script lang="ts" setup>
import { useRoute } from 'vue-router';

import HeaderPage from '@/components/shared/HeaderPage.vue';
import { useProductStore } from '../../stores/product';
import { storeToRefs } from 'pinia';
import LoadingScreen from '@/components/shared/LoadingScreen.vue';
import ProductContent from '@/components/products/ProductContent.vue';

const { params } = useRoute();

const productStore = useProductStore();
const { product, isLoading } = storeToRefs(productStore);


productStore.getProductBySlug( params.slug as string );

</script>

<template>
    <LoadingScreen v-if="isLoading"/>
    
    <template v-else>

        <HeaderPage 
            :title="product!.name ?? ''" 
            description="Descripcion de un producto" 
            btn-title="Volver" 
            pathname="products"
        />

        <ProductContent :product="product!"/>


    </template>
</template>
