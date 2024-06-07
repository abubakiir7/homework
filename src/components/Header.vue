<template>
  <div :class="isScrolled ? 'backdrop-blur-sm bg-opacity-80' : ''"
       class="bg-[#1C1E53] fixed w-full z-20 duration-200 md:px-[20px]">
    <div class="container flex justify-between py-6 items-center ">
      <div class="cursor-pointer">
        <svg
          width="122"
          height="25"
          viewBox="0 0 122 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_8208_208)">
          </g>
          <defs>
            <clipPath id="clip0_8208_208">
              <rect width="122" height="24.7089" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div class="hidden md:flex items-center justify-between text-[#BBBBCB] gap-[52px]">
        <router-link class="cursor-pointer hover:text-white" to="/">Home</router-link>
        <router-link class="cursor-pointer hover:text-white" to="/about">About us</router-link>
        <router-link class="cursor-pointer hover:text-white" to="/pricing">Pricing</router-link>
        <router-link class="cursor-pointer hover:text-white" to="/work">Work</router-link>
        <router-link class="cursor-pointer hover:text-white" to="/blog">Blog</router-link>
        <router-link to="/contact" class="rounded-[41px] border-[2px] border-[#F4F6FC33] px-10 py-3 hover:bg-[#F4F6FC33] hover:text-white">Contact us</router-link>
      </div>
      <div class="md:hidden">
        <button @click="toggleMenu" class="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-[#BBBBCB]">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </div>
    <div v-if="menuOpen" class="md:hidden bg-[#1C1E53] text-[#BBBBCB] p-4">
      <router-link class="block py-2 px-4 hover:text-white" to="/" @click="closeMenu">Home</router-link>
      <router-link class="block py-2 px-4 hover:text-white" to="/about" @click="closeMenu">About us</router-link>
      <router-link class="block py-2 px-4 hover:text-white" to="/pricing" @click="closeMenu">Pricing</router-link>
      <router-link class="block py-2 px-4 hover:text-white" to="/work" @click="closeMenu">Work</router-link>
      <router-link class="block py-2 px-4 hover:text-white" to="/blog" @click="closeMenu">Blog</router-link>
      <button class="block w-full text-left rounded-[41px] border-[2px] border-[#F4F6FC33] px-4 py-3 mt-2 hover:bg-[#F4F6FC33] hover:text-white" @click="closeMenu">Contact us</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const menuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
</style>
