<script setup lang="ts">
import chatbot from './chatbot.vue'

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import layoutDef from './layout/def.vue'
import {toQS} from '@/assets/script'
import {CAPURI,BASEURI} from '@/global';

import {LS} from "../assets/script";
let token=LS.get('token')
if(typeof(token)=="object" && token.access_token!='undefined') {
    (useRouter()).push(`/auth`);      
}

let login=()=>{
    let prm={
        "response_type":"code",
        "client_id":"CAP",
        "redirect_uri": BASEURI+"/auth",
        "scope":"info profile email",
        "state":"STATE",
    };
    location.href=CAPURI+`/v1/authorize?${toQS(prm)}`;
};
const appname=import.meta.env.VITE_APP_NAME

</script>
<template>
<layoutDef>
    <div class="grid gap-y-2">
        
        <h1 class="mb-2" ref="APPNAME">{{ appname }}</h1>
        
        <button class="btn-hf bg-yellow-300 w-48 justify-self-center " @click="login">Login</button>
    </div>

    <chatbot />
</layoutDef>
</template>
