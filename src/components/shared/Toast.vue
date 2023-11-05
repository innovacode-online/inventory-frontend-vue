<script lang="ts" setup>
import { computed } from 'vue';
import { storeToRefs } from "pinia";

import { useToastStore } from "@/stores/toast";



const toastStore = useToastStore();
const { message, type, right } = storeToRefs(toastStore);

const toastColor = computed(() => type.value === 'error' ? '#DC2626' : '#059669');

</script>

<template>
    <div class="toast" :style="{ backgroundColor: toastColor, right }" >
        <p class="text-white text-center">{{ message }}</p>
    </div>
</template>


<style scoped>

    .toast {
        border-radius: 10px;
        padding: .75rem 1rem;
        position: absolute;
        width: max-content;
        z-index: 4;
        top: 1rem;
        transition: all .3s ease-in-out;
    }

</style>