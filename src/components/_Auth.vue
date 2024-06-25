<script setup lang="ts">
import {LS,JWT} from "@/assets/script";
import {request} from "../assets/pnm_fetchy";
import { useRouter } from 'vue-router';
import {CAPURI,BASEURI,CLIENT_ID} from '@/global';

const router = useRouter();

const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code'); 

if (code){ //console.log(code); 
    getToken(code); 
}else{
    let token=LS.get('token')
    if(typeof(token)=="object" && token.access_token!='undefined') {
        // console.log(token); 
        decodeToken(token);
    }else{ // console.log("code"); 
        LS.unset('token'); router.push(`/`);
    }
}
async function decodeToken(token:any){
    let pubk= await request(CAPURI+"/v1/key").get();
    try{
        // let r=JWT.extract(t);
        let x=await JWT.verify(token.access_token, pubk.result);
        // let x=await JWT.verify(t,k);
        if(x._verify){
            x.exp=(x.exp+(7*3600))*1000000;
            LS.set('approle', x);
            router.push(`/org`);
        }else{
            LS.unset('token'); router.push(`/`);
        }
    }catch(e){  console.error(e,"while try to decode token");  }
}
async function getToken(c?:string){  
    let data={"grant_type" : "authorization_code",
        "client_id": CLIENT_ID,
        "client_secret":"asd",
        "redirect_uri": BASEURI+"/auth",
        "scope":"info",
        "code":c
    };
    let d= await request(CAPURI+`/v1/token`).post(data); 
    if(d.code==200){  
        LS.set('token', d.result)
        decodeToken(d.result);//router.push(`/org`);  
    }else{ console.error("cant login"); }
}
// fetch("http://localhost:8080/v1/token", {
//     method:"POST", headers:{'Content-Type': 'application/json'}, 
//     body:JSON.stringify({ "grant_type" : "authorization_code","client_id": "cap_gui","client_secret":"asd","scope":"userinfo","code":"016202f1f4205dd85294c912e08bb9bf1715b6f2"})
// }).then( x => { 
//     x.text().then( y => { console.log(y); }) 
// })
</script>
<template></template>