<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useSaleStore } from '../../stores/sales';

import HeaderPage from '@/components/shared/HeaderPage.vue';
import SaleCard from '@/components/sales/SaleCard.vue';

const saleStore = useSaleStore();
const { sales } = storeToRefs(saleStore);

</script>

<template>
    <HeaderPage
        btn-title="Nueva venta"
        title="Listado de ventas"
        pathname="new-sale"
        description="Gestion de ventas"
    />
    <ul class="space-y-4 mb-8">
        <li v-for="sale in sales" :key="sale.id">
            <SaleCard :sale="sale"/>
        </li>
    </ul>
</template>
