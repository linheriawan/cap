<script setup lang="ts">
import {PnM} from '@/assets/pnm_elem'

const toggle=(x:string,y:string)=>{ PnM(`.${x}`).toggle(y) }
</script>
<template> 
    <div class="grid-n1 h-screen">
        <main class="flex justify-center items-center bg-sky-200">
                <slot/>
                
        </main>
        <sctFoot>
            <template #link>
                <a @click="toggle('my-eula','show')" class="cursor-pointer"> Terms </a>
                &#8729; <a @click="toggle('my-prp','show')" class="cursor-pointer"> Policy </a>
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