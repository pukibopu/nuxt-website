<template>
    <div class="flex w-full h-full flex-col">
        <div class="w-full">
            <NavBar />
        </div>
        <main class="w-full h-full flex-1 ">
            <slot />
        </main>

    </div>
</template>

<script setup lang="ts">
import NavBar from '~/components/navigator/NavBar.vue'
</script>

<style scoped></style>