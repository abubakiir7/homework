<template>
  <div class="bg-white flex flex-col items-center pt-12 pb-10 group cursor-pointer" >
    <div class="relative mb-6 overflow-hidden bg-red-300 rounded-[50%]" >
      <img :src="item.img" alt="" />
      <img class="absolute group-hover:bottom-0 bottom-0 duration-100 -bottom-full " src="/ellipse2.png" alt="">
      <div class="absolute hidden group-hover:left-[50px] bottom-5 group-hover:flex gap-3">
        <img src="/twit.png" alt="">
        <img src="/twit.png" alt="">
        <img src="/twit.png" alt="">
      </div>
    </div>
    <h3 class="font-semibold text-primary text-[26px] leading-[36px]" >{{ item.name }}</h3>
    <p class="pt-2 text-primary text-[20px] leading-[28px]" >{{ item.position }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
});
</script>

<style lang="scss" scoped></style>
