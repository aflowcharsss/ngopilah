<script setup>
import Heading from "../components/Heading.vue";
import Input from "../components/Input.vue";

const heading = {
  primary: "Gasabar Beli Yakan?",
  paraOne: "Daftar Aja Dulu",
  paraTwo: "Atau Login Aja",
  ctaOne: "login",
};

const inputs = [
  { name: "Nama", forWho: "name" },
  { name: "Email", forWho: "email" },
  { name: "Kata Sandi", forWho: "password" },
  { name: "Lokasi", forWho: "location" },
];
</script>

<template>
  <section class="login">
    <div class="wrapper">
      <Heading
        :primary="heading.primary"
        :paraOne="heading.paraOne"
        :paraTwo="heading.paraTwo"
        :ctaOne="heading.ctaOne"
        class=""
      />

      <form class="form">
        <div v-for="input in inputs" class="form-input">
          <Input :name="input.name" :forWho="input.forWho" />
        </div>
        <input type="submit" value="Daftar Sekarang" class="submit" />
      </form>
    </div>
  </section>
</template>

<style scoped lang="postcss">
.wrapper {
  @apply container mx-auto;
}
.form {
  @apply relative py-24 grid grid-cols-2 gap-x-8 gap-y-16;
}

.submit {
  @apply cursor-pointer w-full absolute -bottom-4 left-0 py-4 border-2 border-emerald-800 uppercase font-semibold tracking-wider;
}
</style>
