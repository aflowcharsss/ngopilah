<script setup>
import { defineProps } from "vue";

defineProps({
  id: Number,
  image: String,
  name: String,
  price: Number,
  type: String,
  rating: Number,
  transaction: Number,
});
</script>

<template>
  <div class="wrapper content">
    <!-- No -->
    <div class="number">
      <span>{{ id }}</span>
    </div>

    <!-- Photo -->
    <div class="photo">
      <img class="w-28 h-28 object-cover" :src="'src/assets/' + image" :alt="name" />
    </div>

    <!-- Product Name -->
    <div class="product">
      <h5>{{ name }}</h5>
    </div>

    <!-- Type -->
    <div class="type">
      <span>{{ type }}</span>
    </div>

    <!-- Rating -->
    <div class="rating">
      <span>{{ rating }}</span>
    </div>

    <!-- Total -->
    <div class="total">
      <span>{{ transaction }}</span>
    </div>

    <!-- Edit -->
    <div class="edit">
      <button class="flex items-center space-x-2">
        <svg
          class="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.00001 20.25H4.5C4.30109 20.25 4.11033 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V15.3094C3.74966 15.212 3.76853 15.1155 3.80553 15.0254C3.84253 14.9353 3.89694 14.8534 3.96563 14.7844L15.2156 3.53438C15.2854 3.46351 15.3686 3.40724 15.4603 3.36883C15.5521 3.33041 15.6506 3.31063 15.75 3.31063C15.8495 3.31063 15.9479 3.33041 16.0397 3.36883C16.1314 3.40724 16.2146 3.46351 16.2844 3.53438L20.4656 7.71563C20.5365 7.78541 20.5928 7.8686 20.6312 7.96034C20.6696 8.05208 20.6894 8.15054 20.6894 8.25C20.6894 8.34946 20.6696 8.44792 20.6312 8.53966C20.5928 8.63141 20.5365 8.71459 20.4656 8.78438L9.00001 20.25Z"
            stroke="#064E3B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.25 20.25H9"
            stroke="#064E3B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.75 6L18 11.25"
            stroke="#064E3B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <!-- Hapus -->
    <div class="delete">
      <button class="flex items-center space-x-2">
        <svg
          class="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.57812 9.32812L14.9437 15.6937"
            stroke="#064E3B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.2501 20.2313H6.75945L3.28132 16.7531C3.1413 16.6145 3.03014 16.4495 2.95428 16.2677C2.87842 16.0859 2.83936 15.8908 2.83936 15.6938C2.83936 15.4967 2.87842 15.3017 2.95428 15.1198C3.03014 14.938 3.1413 14.773 3.28132 14.6344L13.8844 4.03125C14.0231 3.89123 14.188 3.78007 14.3699 3.70421C14.5517 3.62835 14.7468 3.58929 14.9438 3.58929C15.1408 3.58929 15.3359 3.62835 15.5178 3.70421C15.6996 3.78007 15.8646 3.89123 16.0032 4.03125L20.2501 8.26875C20.5289 8.55273 20.6851 8.93482 20.6851 9.33281C20.6851 9.73081 20.5289 10.1129 20.2501 10.3969L10.4063 20.2313"
            stroke="#064E3B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.wrapper .content {
  @apply py-8;
}

.wrapper .number {
  @apply col-span-2;
}

.wrapper .photo {
  @apply col-span-4;
}

.wrapper .product {
  @apply col-span-5;
}

.wrapper .type {
  @apply col-span-3;
}

.wrapper .rating {
  @apply col-span-3;
}

.wrapper .total {
  @apply col-span-3;
}

.wrapper .edit {
  @apply col-span-2;
}

.wrapper .delete {
  @apply col-span-2;
}
</style>
