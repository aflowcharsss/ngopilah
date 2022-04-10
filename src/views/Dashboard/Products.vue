<script setup>
import { ref } from "vue";

import Heading from "../../components/Heading.vue";
import Table from "../../components/Table.vue";

const heading = {
  primary: "Hey Min, Mau Ngapain?",
  paraOne: "Tambah Produk",
  paraTwo: "Lihat Pengguna",
  ctaOne: "add products",
  ctaTwo: "users",
  isButton: true,
};

const products = [
  {
    id: 1,
    image: "1-aceh-gayo-anaerob.png",
    name: "Aceh Gayo Anaerob",
    price: 85000,
    type: "Arabica",
    rating: 4.9,
    transaction: 64,
  },
  {
    id: 2,
    image: "2-aceh-gayo-atu-litang.png",
    name: "Aceh Gayo Atu Lintang",
    price: 85000,
    type: "Arabica",
    rating: 4.9,
    transaction: 64,
  },
  {
    id: 3,
    image: "3-bali-kintamani.png",
    name: "Bali Kintamani",
    price: 85000,
    type: "Arabica",
    rating: 4.9,
    transaction: 64,
  },
  {
    id: 4,
    image: "4-bali-ulian.png",
    name: "Bali Ulian",
    price: 85000,
    type: "Arabica",
    rating: 4.9,
    transaction: 64,
  },
];
</script>

<template>
  <section class="products">
    <div class="wrapper">
      <Heading
        :primary="heading.primary"
        :paraOne="heading.paraOne"
        :paraTwo="heading.paraTwo"
        :ctaOne="heading.ctaOne"
        :ctaTwo="heading.ctaTwo"
      />

      <div class="table">
        <div class="wrapper head">
          <h6 class="number">No</h6>
          <h6 class="photo">Foto</h6>
          <h6 class="product">Produk</h6>
          <h6 class="type">Tipe</h6>
          <h6 class="rating">Rating</h6>
          <h6 class="total">Total</h6>
          <h6 class="edit">Edit</h6>
          <h6 class="delete">Hapus</h6>
        </div>

        <div v-for="product in products">
          <Table
            :id="product.id"
            :image="product.image"
            :name="product.name"
            :price="product.price"
            :type="product.type"
            :rating="product.rating"
            :transaction="product.transaction"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
.products .wrapper {
  @apply container mx-auto;
}

.table {
  @apply w-full pt-8 pb-12;
}

.table .wrapper {
  @apply grid grid-cols-24 gap-x-4 items-center border-b-[1.5px] border-emerald-800;
}

.wrapper .head {
  @apply py-4 uppercase;
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
