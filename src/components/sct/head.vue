<script setup lang="ts">
import {LS} from "@/assets/script";
import { inject } from 'vue'
import { useRouter } from 'vue-router';
// const props = 
const data=inject('head') as AppInfo
const router=useRouter()
data.username=LS.get("approle")? LS.get("approle").sub: "-name-";
function logout(){
    LS.unset("approle");
    LS.unset("token");
    router.push("/");
}
let acts={cssClass:"z-10", name:data.username,
    items:[
        {txt:"Preference",href:"/"},
        {txt:"Logout",action:logout}]
}

</script>
<template> 
    <header class="flex px-2 items-center bg-slate-200">
        <div class="flex flex-1 items-center">
            <button class="btn block sm:hidden">
                <icoHamb class="w-6"/>
            </button>
            <icoLogo @click="$emit('headerLogoClick')" class="mr-3 w-8" />
            <h1>{{ data.appname }}</h1>
        </div>
        <inpDropdown v-bind="acts" /> 
    </header>
</template>
