<script setup>
import Product from "../components/Product.vue";
import Heading from "../components/Heading.vue";

const heading = {
  primary: "Bosen Kopi Sachetan?",
  paraOne: "Cek Aja Semua",
  paraTwo: "Dijamin Mantap",
  ctaOne: "check now",
};
</script>

<template>
  <div class="wrapper">
    <Heading
      :primary="heading.primary"
      :paraOne="heading.paraOne"
      :paraTwo="heading.paraTwo"
      :ctaOne="heading.ctaOne"
    />
    <Product />
  </div>
</template>

<style scoped lang="postcss">
.ngopilah {
  @apply bg-emerald-50 w-full min-h-screen;
}

.wrapper {
  @apply container mx-auto font-inter;
}
</style>
