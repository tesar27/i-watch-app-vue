<template>
      <button class="hover:text-gray-400 hover:bg-gray-700 inline-flex items-center justify-center p-2 rounded-md bg-primary"
      @click="$emit('buttonClicked')"
      >
        {{ text }}           
      </button>
</template>
<script setup>
const props = defineProps({
    text: {
        type: String,
        default: "My Button"
    }
});

const emits = defineEmits(['buttonClicked'])
</script>
