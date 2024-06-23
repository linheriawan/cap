<script setup lang="ts">
import {LS,JWT} from "../assets/script";
import {request} from "../assets/pnm_fetchy";
import { useRouter } from 'vue-router';
import {CAPURI,BASEURI} from '@/global';

const router = useRouter();

const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code'); 
console.log(code)
if (code){ getToken(code); }
else{
    let token=LS.get('token')
    if(typeof(token)=="object" && token.access_token!='undefined') {
        decodeToken(token);
    }else{
        router.push(`/`);
    }
}
async function decodeToken(token:any){
    let pubk= await request(CAPURI+"/v1/key").get();
        // console.log(token, token.access_token, pubk.result)
    // let t="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpZCI6IjlmZmY1MGVkMWI4NDRjZWYzYzM2MjQxNTc2Y2M5ODUwNjViYmVhZWEiLCJpc3MiOiJjYXBfZ3VpIiwiYXVkIjoiaHR0cDpcL1wvbG9jYWxob3N0OjUxNzNcL2F1dGgiLCJzdWIiOiJoZXJpYXdhbiIsImV4cCI6MTcxNjk3NjQ1NywiaWF0IjoxNzE2OTc1NDU3LCJzY29wZSI6ImluZm8ifQ.KHJCzVkL6mahjQufUrYBJ-Mga1M56hGicV7Ir6sf27qvlI0I65Pk3RrKhFTj5XSPjK5r_QiQ6OBzXSvtwREyDiCfkeEobEM29aYkUdclk5JDCUQc_nX4JX0C_mXDfyEiH3-KjbfCvX_gmAJfc9A0rhSVHOfVj0z7jD8ho-CFNyxfidM7ns-BysaIYGln3_H88VLLuC1ow8tojNh1akLzHJ3pQgLkn1wk-XepidJnN3G2ofUmW_sIl7TXj3qYF2HWSXFfi_b3FG90UQcApi4F-7PGTcAN2Z9bjPbmVVMu6A3PDvacjVcSs_dVQR2yFCWJukPb_S0KAijaiW_gStjNkA";
    // let k="-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA6ckFyknaQr1K2M08PV9fj+hakAIHVVXIajAqhHcagsCr5PBzAcWYTGuU9dPMqP9kvImW7+xCW+3Zuv7LFeawD4DZEJcQNA/AvDncMltoOr8l7j1UnvdEHlUNy4s5VtgHYtuhOnGN41zsfSoFbDKMigSZPcDAIxdrMbOROyZMR4AzmWKSl3nMi1NgJP2VD1zLnr8Dj6WnFiihqBTXRkXZYjhAb390ydyElnpgO3zLZeW1I/54Ol8vbbzharq+I/dJVCBU21/K6oYrmE5tVCBXngR8eqp6w5+e0sHsz5BCHaxSQv0YX1eJHN+AkSw+XSYzbse9V2oezOERwx+kkUNBjwIDAQAB-----END PUBLIC KEY-----";
    try{
        // let r=JWT.extract(t);
        // console.log(r);
        let x=await JWT.verify(token.access_token,pubk.result);
        // let x=await JWT.verify(t,k);
        console.log(x);
        router.push(`/org`);
    }catch(e){ 
        console.error(e,CAPURI+"/v1/key"); 
    }
}
async function getToken(c?:string){  
    let data={"grant_type" : "authorization_code",
        "client_id": "CAP",
        "client_secret":"asd",
        "redirect_uri": BASEURI+"/auth",
        "scope":"info",
        "code":c
    };
    let d= await request(CAPURI+`/v1/token`).post(data); 
    console.log(CAPURI+`/v1/token`)
    if(d.code==200){  
        LS.set('token', d.result)
        router.push(`/org`);  
    }
}
</script>
<template></template>