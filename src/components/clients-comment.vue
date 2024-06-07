<template>
  <div class="w-3/4 md:pl-[120px] pr-3 pt-6">
    <h2 class="leading-[48px] text-[36px] text-[#282938] font-medium">
      {{ clientsComment[id].text }}
    </h2>
    <div class="flex justify-between items-center pt-10 pb-20">
      <div class="flex gap-4 items-center">
        <img :src="clientsComment[id].image" alt="" />
        <div>
          <h3 class="leading-[32px] text-[20px] text-[#282938]">
            {{ clientsComment[id].fullName }}
          </h3>
          <p class="leading-[28px] text-[16px] text-[#282938]">
            {{ clientsComment[id].position }}
          </p>
        </div>
      </div>
      <div class="flex gap-2 items-center">
        <button
          :class="
            id == 0
              ? 'py-2 px-3 pr-4 rounded-[100%] bg-white'
              : 'py-2 px-3 pr-4 rounded-[100%] bg-[#5239FA]'
          "
          @click="previous"
        >
          <span class="icon-[iconamoon--arrow-right-2-light]"></span>
        </button>
        <button
          :class="
            id == clientsComment.length - 1
              ? 'py-2 px-3 pr-4 rounded-[100%] bg-white'
              : 'py-2 px-3 pr-4 rounded-[100%] bg-[#5239FA]'
          "
          @click="next"
        >
          <svg
            width="13"
            height="22"
            viewBox="0 0 13 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.41412 22L0 18.7805L9.03053 11.0894L0 3.21951L1.41412 0L13 10.374V12.1626L1.41412 22Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const clientsComment = [
  {
    text: '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
    fullName: "Jenny Wilson",
    position: "Vice President",
    image: "mask.png",
  },
  {
    text: '"The best agency we’vDFGJDSAKHFEe worked with so far. They understand our product and are able to add new features with a great focus."',
    fullName: "Abdulloh aka",
    position: "Vice President",
    image: "mask.png",
  },
  {
    text: '"The best agency we’vDFGJDSAKHFEe worked with so far. They understand our product and are able to add new features with a great focus."',
    fullName: "Abdulloh adgfdgfda",
    position: "Vice President",
    image: "mask.png",
  },
];

const id = ref(0);

const next = () => {
  if (id.value < clientsComment.length - 1) {
    id.value++;
  }
};

const previous = () => {
  if (id.value > 0) {
    id.value--;
  }
};
</script>

<style scoped>
/* Add your styles here if needed */
</style>
