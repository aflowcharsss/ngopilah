<script setup>
const products = [
  {
    image: "1-aceh-gayo-anaerob.png",
    name: "Aceh Gayo Anaerob",
    price: 85000,
    type: "Arabica",
    rating: 4.9,
    transaction: 64,
  },
  {
    image: "2-aceh-gayo-atu-litang.png",
    name: "Aceh Gayo Anaerob",
    price: 85000,
    type: "Arabica",
    rating: 4.9,
    transaction: 64,
  },
  {
    image: "3-bali-kintamani.png",
    name: "Aceh Gayo Anaerob",
    price: 85000,
    type: "Arabica",
    rating: 4.9,
    transaction: 64,
  },
  {
    image: "4-bali-ulian.png",
    name: "Aceh Gayo Anaerob",
    price: 85000,
    type: "Arabica",
    rating: 4.9,
    transaction: 64,
  },
];

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
</script>

<template>
  <section class="products">
    <div class="wrapper">
      <div class="card product" v-for="product in products">
        <!-- Image -->
        <div class="image">
          <img :src="'../src/assets/' + product.image" alt="Aceh Gayo Anaerob" />
        </div>

        <h4 class="name">{{ product.name }}</h4>
        <h5 class="price">Rp. {{ formatPrice(product.price) }},-</h5>

        <div class="divider"></div>

        <div class="type-rate">
          <div class="type">
            <div class="icon">
              <svg
                class="ph"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 27C16 27 3.5 20 3.5 11.5C3.5 9.99737 4.02062 8.54114 4.97328 7.37908C5.92593 6.21703 7.25178 5.42093 8.72525 5.12624C10.1987 4.83154 11.7288 5.05646 13.0551 5.76272C14.3814 6.46898 15.4221 7.61296 16 9.00001V9.00001C16.5779 7.61296 17.6186 6.46898 18.9449 5.76272C20.2712 5.05646 21.8013 4.83154 23.2748 5.12624C24.7482 5.42093 26.0741 6.21703 27.0267 7.37908C27.9794 8.54114 28.5 9.99737 28.5 11.5C28.5 20 16 27 16 27Z"
                  stroke="#064E3B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span class="type-name"> {{ product.type }} </span>
          </div>

          <div class="rate">
            <div class="icon">
              <svg
                class="ph"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 13H10V26H4C3.73478 26 3.48043 25.8946 3.29289 25.7071C3.10536 25.5196 3 25.2652 3 25V14C3 13.7348 3.10536 13.4804 3.29289 13.2929C3.48043 13.1054 3.73478 13 4 13V13Z"
                  stroke="#064E3B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 13L15 3C16.0609 3 17.0783 3.42143 17.8284 4.17157C18.5786 4.92172 19 5.93913 19 7V10H26.7375C27.0211 9.9993 27.3015 10.0593 27.56 10.176C27.8185 10.2926 28.049 10.4632 28.2361 10.6764C28.4232 10.8895 28.5625 11.1402 28.6447 11.4116C28.7268 11.683 28.75 11.9689 28.7125 12.25L27.2125 24.25C27.1518 24.7317 26.918 25.1749 26.5546 25.4969C26.1912 25.8189 25.723 25.9977 25.2375 26H10"
                  stroke="#064E3B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="number">
              {{ product.rating }}
            </div>
          </div>

          <div class="rate">
            <div class="icon">
              <svg
                class="ph"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 13H10V26H4C3.73478 26 3.48043 25.8946 3.29289 25.7071C3.10536 25.5196 3 25.2652 3 25V14C3 13.7348 3.10536 13.4804 3.29289 13.2929C3.48043 13.1054 3.73478 13 4 13V13Z"
                  stroke="#064E3B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 13L15 3C16.0609 3 17.0783 3.42143 17.8284 4.17157C18.5786 4.92172 19 5.93913 19 7V10H26.7375C27.0211 9.9993 27.3015 10.0593 27.56 10.176C27.8185 10.2926 28.049 10.4632 28.2361 10.6764C28.4232 10.8895 28.5625 11.1402 28.6447 11.4116C28.7268 11.683 28.75 11.9689 28.7125 12.25L27.2125 24.25C27.1518 24.7317 26.918 25.1749 26.5546 25.4969C26.1912 25.8189 25.723 25.9977 25.2375 26H10"
                  stroke="#064E3B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="number">
              {{ product.transaction }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
.products {
  @apply py-16 space-y-8;
}

.wrapper {
  @apply pt-8 pb-12 grid grid-cols-12 gap-x-8;
}

.card.product {
  @apply col-span-3;
}

.image {
  @apply mb-6;
}

.name {
  @apply mb-4 font-medium text-lg;
}

.divider {
  @apply w-full h-[1.5px] bg-emerald-600 my-6 mb-4;
}

.type-rate {
  @apply flex items-center justify-between text-sm;
}

.type {
  @apply flex items-center space-x-2;
}
.rate {
  @apply flex items-center space-x-2;
}

.ph {
  @apply w-5 h-5;
}
</style>
