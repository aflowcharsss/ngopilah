<script setup>
import Heading from "../components/Heading.vue";
import Input from "../components/Input.vue";

const heading = {
  primary: "Cepet Kali Daftarnya",
  paraOne: "Langsung Aja Masuk",
  paraTwo: "Coba Daftar Dulu",
  ctaOne: "register",
};

const inputs = [
  { name: "Email", forWho: "email" },
  { name: "Kata Sandi", forWho: "password" },
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
        <div class="form-input" v-for="input in inputs">
          <Input :name="input.name" :forWho="input.forWho" />
        </div>
        <input type="submit" value="Login Sekarang" class="submit" />
      </form>

      <div class="other-login">
        <h5 class="heading">Gamau Ribet Kan?</h5>
        <div class="wrapper">
          <!-- Googl -->
          <button class="btn">
            <svg
              class="ph"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0001 16H27.0001C27.0028 18.5483 26.1216 21.0187 24.5067 22.9901C22.8919 24.9614 20.6433 26.3117 18.1444 26.8108C15.6454 27.3099 13.0507 26.9268 10.8025 25.727C8.5543 24.5271 6.79182 22.5847 5.81546 20.2309C4.83909 17.877 4.70929 15.2574 5.44816 12.8185C6.18704 10.3797 7.74886 8.27253 9.86741 6.8563C11.986 5.44007 14.5301 4.8024 17.0662 5.05199C19.6022 5.30157 21.9733 6.42296 23.7751 8.22501"
                stroke="#064E3B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span>Sini Google</span>
          </button>

          <!-- Facebook -->
          <button class="btn">
            <svg
              class="ph"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                stroke="#064E3B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 11H19C18.6056 10.9983 18.2147 11.0748 17.85 11.225C17.4853 11.3752 17.1539 11.5961 16.875 11.875C16.5961 12.1539 16.3752 12.4853 16.225 12.85C16.0748 13.2147 15.9984 13.6056 16 14V28"
                stroke="#064E3B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 18H20"
                stroke="#064E3B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span> FB Ajalah </span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
.login .wrapper {
  @apply container mx-auto;
}

.login .form {
  @apply relative px-16 pt-16 pb-12 grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-4;
}

.login .submit {
  @apply col-span-2 cursor-pointer w-full py-4 border-2 border-emerald-800 uppercase font-semibold tracking-wider;
}

.other-login {
  @apply pb-24 flex flex-col items-center justify-center;
}
.other-login .wrapper {
  @apply flex items-center justify-center space-x-4;
}

.other-login .heading {
  @apply mb-8 text-lg uppercase;
}
.other-login .btn {
  @apply px-8 py-3 border-[1.5px] border-emerald-800 flex items-center space-x-2 uppercase;
}
</style>
