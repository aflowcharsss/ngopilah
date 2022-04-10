<script setup>
import { defineProps } from "vue";

defineProps({
  title: String,
  message: String,
});
</script>

<template>
  <div class="wrapper">
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
    <button @click="isOpen = false">Close</button>
  </div>
</template>

<style scoped lang="postcss">
.root {
  @apply relative;
}

.modal {
  @apply absolute inset-0 bg-emerald-900 opacity-10 w-full h-full flex justify-center items-center;
}

.modal > div {
  @apply bg-emerald-50 p-16 rounded-lg;
}
</style>
