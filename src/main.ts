import './assets/style.css'
import './assets/font-awesome.min.css'
import {CAPURI,BASEURI} from '@/global';

import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mixin({
    created() { 
        this.$CAPURI = CAPURI;
        this.$BASEURI = BASEURI;
     }
  });
const MAComp = [
    {grp:"layout",files:["def",'full',"top"]},
    {grp:"sct",files:["head","foot","drawer","modal"]},
    {grp:"modal",files:["eula","privpol"]},
    {grp:"inp",files:["complex","dropdown","pass","text","HelloForm","loginForm",
        "OrgForm","ClientForm","ScopeForm","UserForm", "AccessForm","RefreshForm","AcodeForm"]},
    {grp:"ico",files:[ "back","conf","flash","github","google","hamb","logo","logout","user" ]},
    {grp:"icons",files:["Community","Documentation","Ecosystem","Support","Tooling"]},
];
MAComp.forEach(x=> {
    const grp=x.grp;
    x.files.forEach ( name =>{
        const upper=(str:string)=>str.charAt(0).toUpperCase()+str.slice(1);
        const cname=`${grp}${upper(name)}`
        app.component(cname, defineAsyncComponent(() => import(`./components/${grp}/${name}.vue`))) 
    });
});

app.mount('#app')
