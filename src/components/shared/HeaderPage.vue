<script lang="ts" setup>

defineProps<{
    title: string,
    description: string,
    pathname: string,
    btnTitle: string,
}>()

</script>

<template>
    <div class="flex justify-between items-center">
        <div>
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
        </div>

        <RouterLink class="btn-primary px-2 py-3 block max-w-max" :to="{ name: pathname }">{{ btnTitle }}</RouterLink>
    </div>
</template>