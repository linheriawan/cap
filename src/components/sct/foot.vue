<script setup lang="ts">
</script>
<template> 
    <footer class="w-full items-center px-4 py-1 bg-slate-300">
        <div class="w-full flex justify-center">
            
            <!-- <router-link to="/client">Page Form</router-link> &#8729;
            <router-link to="/mobile">Mobile</router-link> -->
            <slot name="link"/>
            
        </div>
    </footer>
    <slot/>
</template>