import { createRouter, createWebHistory } from 'vue-router'
import {LS} from "@/assets/script";
import _mobile from '../components/_mobile.vue'
import _login from '../components/_login.vue'
import Main from '../components/_Main.vue'
import Auth from '../components/_Auth.vue'

import ORG from '../components/Org.vue'
import OrgView from '../components/OrgView.vue'
import CLIENT from '../components/Client.vue'
import ClientView from '../components/ClientView.vue'
import USER from '../components/User.vue'
import UserView from '../components/UserView.vue'
import SCOPE from '../components/Scope.vue'
import ScopeView from '../components/ScopeView.vue'

import Access from '../components/Access.vue'
import AccessView from '../components/AccessView.vue'
import Refresh from '../components/Refresh.vue'
import RefreshView from '../components/RefreshView.vue'
import Acode from '../components/Acode.vue'
import AcodeView from '../components/AcodeView.vue'

const APP_NAME="CAP GUI"

const routes = [
  { path: "/", name: "Main", meta: { title: 'Landing Page', }, component: Main },
  { path: '/auth', name: "authentication", component: Auth },
  {
    path: "/client",
    name: "Client", meta: { title: 'Client List', requiresAuth: true },
    component: CLIENT
  },{
    path: "/client/:id",
    name: "ClientView", meta: { title: 'Client Form', requiresAuth: true},
    component: ClientView
  },{
    path: "/org",
    name: "Organization", meta: { title: 'Org List', requiresAuth: true },
    component: ORG
  },{
    path: "/org/:id",
    name: "OrgView", meta: { title: 'Org Form', requiresAuth: true },
    component:OrgView
  },{
    path: "/user",
    name: "User", meta: { title: 'User List', requiresAuth: true },
    component: USER
  },{
    path: "/user/:id",
    name: "UserView", meta: { title: 'User Form', requiresAuth: true},
    component:UserView
  },
  {
    path: "/scope",
    name: "Scope", meta: { title: 'Scope List', requiresAuth: true },
    component: SCOPE
  },{
    path: "/scope/:id",
    name: "ScopeView",meta: { title: 'Scope Form', requiresAuth: true },
    component:ScopeView
  },{
    path: "/access",
    name: "Access", meta: { title: 'A Token', requiresAuth: true},
    component: Access
  },{
    path: "/access/:id",
    name: "AccessView",meta: { title: 'A Token Form',requiresAuth: true },
    component:AccessView
  },{
    path: "/refresh",
    name: "Refresh", meta: { title: 'R Token',requiresAuth: true},
    component: Refresh
  },{
    path: "/refresh/:id",
    name: "RefreshView", meta: { title: 'R Token Form', requiresAuth: true},
    component:RefreshView
  },{
    path: "/acode",
    name: "Acode", meta: { title: 'A Code List',requiresAuth: true },
    component: Acode
  },{
    path: "/acode/:id",
    name: "AcodeView", meta: { title: 'A Code Form', requiresAuth: true},
    component:AcodeView
  },
  {
    path: "/login",
    name: "Login",
    meta: { title: 'Login', },
    component: _login
  },
  {
    path: "/mobile",
    name: "Mobile",
    component: _mobile
  }
]
function getMicrotime() {
  const now = Date.now();
  const highResTime = performance.now();
  return now * 1000 + Math.floor(highResTime * 1000);
}
function formatMicrotime(microtime:number) {
  const millis = Math.floor(microtime / 1000);
  const date = new Date(millis);
  const microseconds = microtime % 1000000;
  const formattedDate = date.toISOString();
  return `${formattedDate}.${microseconds.toString().padStart(6, '0')}`;
}
const router = createRouter({
  history: createWebHistory(), routes
})
router.beforeEach((to, from, next) => {
  var titl:string=String(to.meta?.title) ?? 'undefined'
  document.title = `${import.meta.env.VITE_APP_NAME} ${titl}`
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let mycred=LS.get('approle')
    if(mycred==false){ router.push('/'); }
    if( mycred.exp > getMicrotime() ) { 
      next();
    }else{
        console.log(`expired at ${formatMicrotime(mycred.exp)}`);
        LS.unset('token'); 
        router.push('/');
    }
  } else { next(); } // Continue to the route if no authentication is required
})
export default router;