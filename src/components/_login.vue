<script setup lang="ts">
import layoutDef from './layout/def.vue'
import LoginForm from './inp/loginForm.vue'
import inpText from './inp/text.vue'
import inpPass from './inp/pass.vue'

const ologin={
  uname:{id:"username",label:"Username"},
  pass:{id:"password",label:"Password"},
  error:""
}
let providers=[
  { id:"github",name:"Github"},
  { id:"google",name:"Google"}
]
let token="asdbsm"
let signIn=(name:String, param:{username:String,password:String})=>{ console.log(name,param)}
let cancel=()=>{history.back()}
</script>
<template>
<layoutDef>
    <div class="grid gap-y-2">
        <div class="error" v-if="ologin.error"><p>Try signing in with a different account.</p></div>
        <h1 class="mb-2">Login Page</h1>
        <form action="http://localhost:3000/api/auth/callback/credentials" method="POST">
            <input type="hidden" name="csrfToken" :value="token">
            <inpText v-bind="ologin.uname"/>
            <inpPass v-bind="ologin.pass"/>
            <div class="grid grid-cols-2 mt-2">
                <span class="w-fit justify-self-start">
                    <button class="btn-clean px-3" @click="signIn('credentials', { username: 'jsmith', password: 'hunter2' })">LoGin</button>
                </span>
                <div class="w-fit justify-self-end">
                    <button type="submit" class="btn-clean px-4">Login</button>
                </div>
            </div>
        </form>
        <template v-for="pv in providers">
            <LoginForm v-if="pv.id!=='credentials'" :provider="pv.name" :token="token" />
        </template>
        <button class="w-48 justify-self-center btn-clean" @click="cancel">Cancel</button>
    </div>
</layoutDef>
</template>
