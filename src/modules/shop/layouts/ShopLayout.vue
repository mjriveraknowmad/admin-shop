<template>

  <!-- Header Navbar -->
  <TopMenu />

  <!-- Title -->
  <div class="pt-32  bg-white">
    <h1 class="text-center text-2xl font-bold text-gray-800">All Products</h1>
  </div>

  <!-- RouterView -->
  <RouterView />

  <!-- Footer -->
  <CustomFooter />

</template>


<script setup lang="ts">
import CustomFooter from '../components/CustomFooter.vue';
import TopMenu from '../components/TopMenu.vue';

</script>
