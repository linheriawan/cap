<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {CAPURI,BASEURI} from '@/global';
import { useRouter } from 'vue-router';
const router = useRouter();

import {evForm,LS} from "@/assets/script";
import {request} from "../assets/pnm_fetchy";
import {MHDyna} from "../assets/pnm_dyna";
import {state} from "@/state"
const REQ_HDR={'Authorization':`Bearer ${LS.get('token').access_token}`};

const head={
  appname:`${import.meta.env.VITE_APP_NAME} User`,
  username: "Client User"
}
import { provide } from 'vue'
provide('head', head)

const userDyna = ref<MyDyna | null>(null);

onMounted(() => {
  if(userDyna.value){
    let Dyna = (userDyna.value as MyDyna);
    Dyna.dataset.type='dynatable';
    Dyna.dataset.title="Auth Users";
    // Dyna.dataset.click="myclick";
    Dyna.dataset.mode="server";
    Dyna.dataset.display="partials";
    Dyna.dataset.url=CAPURI+"/settings/user";
    Dyna.DispData=MHDyna;
    
    Dyna.DispData({
      request_header:REQ_HDR,
      hab:[{'<i class="fas fa-plus"></i>':async (x:string)=>{
          var u=CAPURI+"/settings/user",
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
function myclick(x:iUser){
  state.iUser=x;
  router.push(`/user/${x.username}`);
}
</script>
<template>
  <layoutFull v-bind="head">
    <div ref="userDyna"></div>
  </layoutFull>
</template>
