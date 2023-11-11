<script lang="ts" setup>
import HeaderPage from '@/components/shared/HeaderPage.vue';
import NewCategoryForm from '@/components/categories/NewCategoryForm.vue';

</script>

<template>
    <HeaderPage pathname="categories" btn-title="Volver atras" title="Nueva categoria" description="Crea una nueva categoria para tu negocio" />

    <NewCategoryForm/>
</template>
