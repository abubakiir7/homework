<template>
  <div class="bg-white flex flex-col items-center pt-12 pb-10 group cursor-pointer">
    <div class="relative mb-6 overflow-hidden bg-red-300 rounded-full w-[200px] h-[200px]">
      <img class="w-full h-full object-cover rounded-full" :src="item.img" alt="" />
      <img class="w-full absolute duration-200 bottom-[-100%] group-hover:bottom-0" src="/ellipse2.png" alt="">
      <div class="absolute hidden group-hover:flex gap-3 bottom-5 left-1/2 transform -translate-x-1/2">
        <img src="/twit.png" alt="">
        <img src="/twit.png" alt="">
        <img src="/twit.png" alt="">
      </div>
    </div>
    <h3 class="font-semibold text-primary text-[26px] leading-[36px]">{{ item.name }}</h3>
    <p class="pt-2 text-primary text-[20px] leading-[28px]">{{ item.position }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
});
</script>

<style lang="scss" scoped>
.group:hover .duration-200 {
  transition: bottom 0.2s ease-in-out;
}
</style>
