<script setup lang="ts">
interface mprop{
    name: String, 
    cssClass: String,
    items: { href?: string, action?: Function, txt: string }[]
}
const attr=defineProps<mprop>()
</script>
<!-- <script>
export default{
    props:['attr'] // ,mounted(){ console.log(this.attr) }
}
</script> -->
<template>
    <div class="dropdown dropdown-hover dropdown-end">
        <label tabindex="0" class="btn btn-hf whitespace-nowrap rounded-md px-2 m-1">{{ attr.name }} <i class="fas fa-caret-down mx-1"></i></label>
        <ul tabindex="0" :class=attr.cssClass class="w-full min-w-fit dropdown-content menu shadow rounded-none bg-white text-primary-content">
            <li v-for="item in attr.items"> 
                <a class="rounded-none" @click="item.action" :href="item.href">{{item.txt}}</a> 
            </li>
        </ul>
    </div>
</template>  
