<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
import layoutFull from './layout/full.vue'
import {CAPURI,BASEURI} from '@/global';

import {evForm,LS} from "@/assets/script";
import {request} from "../assets/pnm_fetchy";
import {MHDyna} from "../assets/pnm_dyna";
import {state} from "@/state"

const C_URL=CAPURI+"/settings/access_token";
const C_NAME="Access";
const REQ_HDR={'Authorization':`Bearer ${LS.get('token').access_token}`};

const head={
  appname:`${import.meta.env.VITE_APP_NAME} User`,
  username: `${C_NAME} User`
}
import { provide } from 'vue'
provide('head', head)

const rDyna = ref<MyDyna | null>(null);
onMounted(() => {
  if(rDyna.value){
    let Dyna = (rDyna.value as MyDyna);
    Dyna.dataset.type='dynatable';
    Dyna.dataset.title=C_NAME;
    // Dyna.dataset.click="myclick";
    Dyna.dataset.mode="server";
    Dyna.dataset.display="partials";
    Dyna.dataset.url=C_URL;
    Dyna.DispData=MHDyna;
    
    Dyna.DispData({
      request_header:REQ_HDR,
      hab:[{'<i class="fas fa-plus"></i>':async (x:string)=>{
          var u=C_URL,
              res=await request(u).get();
          console.log(res);
          // InM.modal(res.result.replaceAll("</script","<\/script"));
      }}],
      fab:[{'<i class="fas fa-paperclip"></i>':(x:string)=>{alert(x)}}],
      click:myclick
    });
  }
} 
);
function myclick(x:iAccess){
  state.iAccess=x;
  router.push(`/access/${x.access_token}`);
}
</script>
<template>
  <layoutFull v-bind="head">
    <div ref="rDyna"></div>
  </layoutFull>
</template>
