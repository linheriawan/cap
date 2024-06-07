<script setup lang="ts">
import {CAPURI,BASEURI} from '@/global';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

import {evForm} from "../assets/script";
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

const head={
  appname:`${import.meta.env.VITE_APP_NAME}`,
  username: "Client User"
}
import { provide } from 'vue'
provide('head', head)

const fmObj=state.iClient
async function submit(){  
  let d= await request(CAPURI+`/settings/access/${fmObj.client_id}`).patch(fmObj); 
  console.log('resp', d.result);
}

const userWrap = ref<HTMLDivElement | null>(null);
onMounted(() => {
  if (userWrap.value) {
    const Wrap = userWrap.value;
    Wrap.id='d_' + Math.floor(Math.random() * 1000000);
    evForm.init(`#${Wrap.id}`);
  } 
});
function back(){ router.push(`/user`); }
</script>
<template>
  <layoutFull v-bind="head">
    <template #pos> 
      <h1>Form Client</h1>
    </template>
    <template #act> 
      <a @click="$router.back" class="btn btn-xs btn-hf pye-1 my-1">cancel</a> 
      <inpDropdown v-bind="acts" />
    </template>
    
    <div ref="userWrap" class="px-3">
      <inpClientForm v-model="fmObj" />
    </div>

  </layoutFull>
</template>
