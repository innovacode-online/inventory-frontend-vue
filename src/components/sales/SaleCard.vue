<script setup lang='ts'>
import { formatDate } from '../../helpers/format-date';
import { type ISale } from '../../interface/sales/sales-response';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import ProductSaleCard from './ProductSaleCard.vue';

defineProps<{
    sale: ISale;
}>()

</script>

<template>
    <div class="w-full">
        <Disclosure>
            <DisclosureButton class="sale__card w-full grid lg:grid-cols-8 items-center gap-7 mb-8 text-start">
                <p class="font-semibold">
                    Venta:
                    <span class="font-normal">#{{ sale.id }}</span>
                </p>
                <p class="font-semibold col-span-2">
                    Cliente: <br>
                    <span class="font-normal">{{ sale.client }}</span>
                </p>
                <p class="font-semibold col-span-2">
                    Fecha de la venta: <br>
                    <span class="font-normal">{{ formatDate(sale.createdAt) }}</span>
                </p>
                <p class="font-semibold col-span-2">
                    Total: <br>
                    <span class="font-normal">{{ sale.total }}Bs</span>
                </p>
                <i class="uil uil-angle-down"></i>
            </DisclosureButton>
            <DisclosurePanel class="ml-5 text-sm text-gray-500">

                <ProductSaleCard v-for="product in sale.products" :key="product.slug" :product="product" />
            </DisclosurePanel>
        </Disclosure>
        <!-- </div> -->
    </div>
</template>