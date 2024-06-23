<script setup lang="ts">
import {PnM} from '@/assets/pnm_elem'
defineProps(["id","act"])
const toggle=(x:string)=>{ PnM(`.${x}`).toggle('show') }
</script>
<template>
    <!-- <input type="checkbox" class="modal-toggle" /> -->
    <div :class="id" class="modal" >
        <div class="modal-box relative w-11/12 max-w-5xl bg-white">
            <span v-if="act=='top'" @click="toggle(id)" class="btn btn-sm btn-slim btn-circle absolute right-2 top-2">✕</span>
            <slot/>
            <div v-if="act!=='top'" class="modal-action border-t flex justify-end pr-2">
                <span @click="toggle(id)" class="btn btn-sm btn-slim">Close</span>
            </div>
        </div>
    </div>
</template>
