<template>
  <div class="bg-white p-10">
    <div class="flex justify-center md:justify-start">
      <img class="pb-8" :src="item.img" alt="" />
    </div>
    <h3 class="text-[24px] text-[#282938] leading-[36px]">{{ item.title }}</h3>
    <p class="leading-[28px] text-[#282938] text-[17px] py-4">
      {{ item.text }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
});
</script>

<style lang="scss" scoped></style>
