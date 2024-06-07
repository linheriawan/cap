<script setup lang="ts">
</script>
<template> 
    <div class="grid-1n1 h-screen">
        <header class="grid gtc-n1 p-1 px-2 justify-between items-center">
            <h1> <slot name="module"/> </h1>
            <router-link class="btn btn-clean" to="/"> 
                <icoBack class="w-5"/>
            </router-link>
        </header>
        <main class="flex px-4 pt-2 bg-sky-500">
            <slot/>
        </main>
    </div>
</template>