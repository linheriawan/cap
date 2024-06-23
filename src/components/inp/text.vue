<script setup lang="ts"> 
const props=defineProps({
    id: String,
    name: String,
    label: String,
    value: String,
})
const emit = defineEmits(['setChange']); // Custom event for updates

const handleChange = (event: Event) => {
  const newValue = (event.target as HTMLInputElement).value;
  emit('setChange', newValue, props.id ); 
};
</script>
<template>
    <div class='fField'> 
        <label :for="id">{{ label }}</label>
        <input type="text" :id="id" :name="name" :placeholder="label" :value="value" @change="handleChange"/> 
    </div>
</template>