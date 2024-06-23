import { createRouter, createWebHistory } from 'vue-router'
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
    name: "Client", meta: { title: 'Client List', },
    component: CLIENT
  },{
    path: "/client/:id",
    name: "ClientView", meta: { title: 'Client Form', },
    component: ClientView
  },{
    path: "/org",
    name: "Organization", meta: { title: 'Org List', },
    component: ORG
  },{
    path: "/org/:id",
    name: "OrgView", meta: { title: 'Org Form', },
    component:OrgView
  },{
    path: "/user",
    name: "User", meta: { title: 'User List', },
    component: USER
  },{
    path: "/user/:id",
    name: "UserView", meta: { title: 'User Form', },
    component:UserView
  },
  {
    path: "/scope",
    name: "Scope", meta: { title: 'Scope List', },
    component: SCOPE
  },{
    path: "/scope/:id",
    name: "ScopeView",meta: { title: 'Scope Form', },
    component:ScopeView
  },{
    path: "/access",
    name: "Access", meta: { title: 'A Token', },
    component: Access
  },{
    path: "/access/:id",
    name: "AccessView",meta: { title: 'A Token Form', },
    component:AccessView
  },{
    path: "/refresh",
    name: "Refresh", meta: { title: 'R Token', },
    component: Refresh
  },{
    path: "/refresh/:id",
    name: "RefreshView", meta: { title: 'R Token Form', },
    component:RefreshView
  },{
    path: "/acode",
    name: "Acode", meta: { title: 'A Code List', },
    component: Acode
  },{
    path: "/acode/:id",
    name: "AcodeView", meta: { title: 'A Code Form', },
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

const router = createRouter({
  history: createWebHistory(), routes
})
router.beforeEach((to, from) => {
  var titl:string=String(to.meta?.title) ?? 'undefined'
  document.title = `${import.meta.env.VITE_APP_NAME} ${titl}`
})
export default router;