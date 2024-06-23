<script setup lang="ts">
import {CAPURI,BASEURI} from '@/global';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

import {evForm} from "../assets/script";
import {request} from "../assets/pnm_fetchy";
import {MHDyna} from "../assets/pnm_dyna";
import {state} from "@/state"

const C_URL=CAPURI+"/settings/org";
const C_NAME="ORG";

const head={
  appname:`${import.meta.env.VITE_APP_NAME}`,
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
const emit = defineEmits<{
  (e:'setObj', payload:{ push:string, data: string, value: any }):void
  // select:[data: string, value: any ]
}>();

function myclick(x:iOrg){
  state.iOrg=x;
  // emit('setObj', { push:`/org/${x.org_id}`, data:"org", value:x } )
  router.push(`/org/${x.org_id}`)
}
</script>
<template>
  <layoutFull >
    <div ref="rDyna"></div>
  </layoutFull>
</template>