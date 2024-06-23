import { reactive, watchEffect, computed } from "vue";

// const orgData=localStorage.getItem('iOrg');
// const parsedData:iOrg|null=orgData ? JSON.parse(orgData) : null;

// export const state = reactive<{selectedData:iOrg|null}>({
//     selectedData:parsedData
// });

// watch(()=>state.selectedData,(val)=>{
//     if(val){
//         localStorage.setItem('iOrg',JSON.stringify(val));
//     }else{
//         localStorage.removeItem('iOrg');
//     }
// },{deep:true});

interface AppState {
    [key: string]: any; // Dynamic property names
}
export const state: AppState = reactive({});

// Function to update state and optionally store in localStorage
function updateState(key: string, data: any) {
    state[key] = data;
    if (data) {
        localStorage.setItem(key, JSON.stringify(data));
    } else {
        localStorage.removeItem(key);
    }
}

const dataTypes = ['iOrg', 'iUser', 'iClient','iScope', 'iAccess', 'iRefresh', 'iAcode']; 
// Computed property to access state properties dynamically
const stateValues = computed(() => {
  const values: Record<string, any> = {}; // Object to store state values
  dataTypes.forEach(key => values[key] = state[key]);
  return values;
});

// Single watch effect to handle updates and localStorage for all data types
watchEffect(() => {
  for (const key of dataTypes) {
    updateState(key, stateValues.value[key]); // Use updateState for data and localStorage
  }
});
// Example of watching for changes in a specific key (modify as needed)
// watch(() => state.iOrg, (newVal) => {
//     updateState('iOrg', newVal); // Use updateState for localStorage handling
// });
// watch(() => state.iUser, (newVal) => {
//     updateState('iUser', newVal); // Use updateState for localStorage handling
// });
// watch(() => state.iClient, (newVal) => {
//     updateState('iClient', newVal); // Use updateState for localStorage handling
// });
