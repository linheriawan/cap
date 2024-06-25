<script setup lang="ts">
import {CAPURI,BASEURI} from '@/global';
import { ref, onMounted, inject } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

import {evForm} from "@/assets/script";
import {request} from "../assets/pnm_fetchy";
import {MHDyna} from "../assets/pnm_dyna";
import {state} from "@/state"

let acts ={
  name:"To do", 
  cssClass:"",
  items:[
    {txt:"save",action:submit},
    {txt:"two",href:"/"}
  ]
}
const C_NAME="ORG"
const head={
  appname:`${import.meta.env.VITE_APP_NAME}`,
  username: `${C_NAME} User`
}
import { provide } from 'vue'
provide('head', head)

const fmObj=state.iOrg;
async function submit(){  
  let d= await request(CAPURI+`/settings/org/${fmObj.org_id}`).patch(fmObj); 
  console.log('resp', d.result );
}

const orgWrap = ref<HTMLDivElement | null>(null);
onMounted(() => {
  if (orgWrap.value) {
    const Wrap = orgWrap.value;
    Wrap.id='d_' + Math.floor(Math.random() * 1000000);
    evForm.init(`#${Wrap.id}`);
  } 
});
function back(){ router.push(`/org`); }
</script>
<template>
  <layoutFull>
    <template #pos>  <h1>Form Org</h1> </template>
    <template #act>
      <a @click="$router.back" class="btn btn-xs btn-hf pye-1 my-1">cancel</a> 
      <inpDropdown v-bind="acts" />
    </template>
    
    <div ref="orgWrap" class="px-3">
      <inpOrgForm v-model="fmObj" />
    </div>

  </layoutFull>
</template>
