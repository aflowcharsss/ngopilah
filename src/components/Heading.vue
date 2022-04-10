<script setup>
import { defineProps } from "vue";

defineProps({
  primary: String,
  paraOne: String,
  paraTwo: String,
  paraThree: String,
  ctaOne: String,
  ctaTwo: String,
  isButton: Boolean,
});
</script>

<template>
  <div class="heading">
    <div class="wrapper">
      <h3 class="primary">{{ primary }}?</h3>
      <div class="secondary">
        <p class="para">{{ paraOne }}</p>
        <button v-if="isButton">{{ ctaOne }}</button>
        <router-link :to="'/' + ctaOne" v-else class="cta" href="#">{{
          ctaOne
        }}</router-link>
        <p class="para">{{ paraTwo }}</p>

        <button v-if="isButton">{{ ctaTwo }}</button>
        <router-link v-else :to="'/' + ctaTwo" v-if="ctaTwo" class="cta">{{
          ctaTwo
        }}</router-link>
        <p v-if="paraThree" class="para">{{ paraThree }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.wrapper {
  @apply text-center space-y-4;
}

.primary {
  @apply font-extralight text-4xl uppercase;
}

.secondary {
  @apply uppercase flex items-center justify-center space-x-4;
}

.para {
  @apply text-sm;
}

.cta {
  @apply px-3 py-2 border-[1.5px] border-emerald-900 text-xs font-semibold text-emerald-900;
}
</style>
