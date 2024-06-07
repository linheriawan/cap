<script setup lang="ts">
import {PnM} from '@/assets/pnm_elem'
import { useRouter } from 'vue-router';
const router = useRouter();
import { provide } from 'vue';

// const attr=defineProps<AppInfo>()

const toggle=(x:string="",y:string="")=>{PnM(x).toggle(y)}
function setSelectedData(to:string,obj:string,val:any){
  console.log(to,obj,val)
  provide(obj,val)
  router.push(to)
}
</script>
<template>
  <div class="grid-1n1 h-screen">
    <sctHead @headerLogoClick="toggle('.drawer','sm:block')" /> 
    <main class="flex">
      <sctDrawer/>
      <div class="grid-1in1 w-full" style="overflow-x: hidden;">
        <div class="flex justify-between items-center border-b mb-1 px-2">
            <div class="flex"><slot name="pos"/></div>
            <div class="flex gap-2 items-center pr-2"><slot name="act"/></div>
        </div>
      
        <div class="grid grid-row-1 h-full overflow-scroll">
          <div class="min-h-screen !px-0">
            <slot/>
          </div>
        </div>
      </div>
                
    </main>
    <sctFoot>
      <template #link>
        &#8729; <label @click="toggle('.my-eula','show')" class="cursor-pointer"> Terms </label>
        &#8729; <label @click="toggle('.my-prp','show')" class="cursor-pointer"> Policy </label>
      </template>
      <sctModal id="my-eula">
        <modalEula/>
      </sctModal>
      <sctModal id="my-prp" act="top">
        <modalPrivpol/>
      </sctModal>
    </sctFoot>
    
  </div>
</template>
<style>

</style>