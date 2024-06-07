<script setup lang="ts"></script>
<template> 
<div class="drawer grid grid-row-1 py-2 sm:border-r sm:block hidden ">
    <router-link to="/org" class="flex pl-2 pr-4 py-2 items-center">
        <iconsEcosystem class="h-5 stroke current w-5" />
        <div class="flex-1 whitespace-nowrap mx-2 pr-2">Company</div> 
    </router-link>
    <router-link to="/client" class="flex pl-2 pr-4 py-2 items-center">
        <icoConf class="h-4 fill-none stroke current w-5" />
        <div class="flex-1 whitespace-nowrap mx-2 pr-2">Client</div> 
    </router-link>
    <router-link to="/user" class="flex pl-2 pr-4 py-2 items-center">
        <icoUser class="h-4 fill-none stroke current w-5" />
        <div class="flex-1 whitespace-nowrap mx-2 pr-2">User</div> 
    </router-link>
    <router-link to="/scope" class="flex pl-2 pr-4 py-2 items-center">
        <iconsTooling class="h-4 fill stroke current w-5"/>
        <div class="flex-1 whitespace-nowrap mx-2 pr-2">Scope</div> 
    </router-link>
    <a class="flex pl-2 pr-4 py-2 items-center">
        <div class="flex-1 whitespace-nowrap mx-2 pr-2">Data</div> 
        <iconsDocumentation class="h-4 stroke current w-5" />
    </a>
    <ul class="m-0">
        <li>
            <router-link to="/access" class="flex pl-5 pr-2 py-1 items-center">
                <iconsSupport class="h-5 fill-none stroke current w-5" />
                <div class="flex-1 whitespace-nowrap mx-2 pr-2">Token</div> 
            </router-link>
        </li>
        <li>
            <router-link to="/refresh" class="flex pl-5 pr-2 py-1 items-center">
                <iconsCommunity class="h-5 w-5" />
                <div class="flex-1 whitespace-nowrap mx-2 pr-2">Refresh</div> 
            </router-link>
        </li>
        <li>
            <router-link to="/acode" class="flex pl-5 pr-2 py-1 items-center">
                <icoFlash class="h-5 fill-none w-4" />
                <div class="flex-1 whitespace-nowrap mx-2 pr-2">Code</div> 
            </router-link>
        </li>
    </ul>
</div>
</template>