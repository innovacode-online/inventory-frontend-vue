<script lang="ts" setup>
import { RouterView } from 'vue-router';
import Toast from '@/components/shared/Toast.vue';
import SideMenu from '@/components/shared/SideMenu.vue';

</script>

<template>
    <div>

        <!-- LOADING VIEW -->
        
        <main class="flex ">
            <SideMenu/>
            <div class="w-full px-10 pt-6 h-screen md:overflow-y-scroll overflow-x-hidden relative">
                <Toast/>
                <RouterView />
            </div>
        </main>        
    </div>
</template>
