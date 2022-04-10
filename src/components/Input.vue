<script setup>
import { defineProps } from "vue";

defineProps({
  name: String,
  forWho: String,
});
</script>

<template>
  <div class="wrapper">
    <label :for="forWho" class="label">{{ name }}</label>

    <input :id="forWho" v-if="forWho === 'password'" class="input" type="password" />
    <input :id="forWho" v-else class="input" type="text" />
  </div>
</template>

<style scoped lang="postcss">
.wrapper {
  @apply relative;
}

.label {
  @apply absolute bottom-8 left-0 text-xl;
}

.input {
  @apply relative w-full h-full bg-inherit border-b-[1.5px] border-emerald-800 outline-none text-lg;
}
</style>
