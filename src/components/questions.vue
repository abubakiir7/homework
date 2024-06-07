<template>
  <div>
    <div class="border-b pb-4 pt-4 cursor-pointer" @click="toggleAnswer">
      <div class="flex justify-between items-center ml-10">
        <div class="flex gap-10">
          <p class="text-[#2405F2] text-[20px] md:text-[26px] leading-[36px]">{{ item.id }}</p>
          <p class="text-primary text-[20px] md:text-[26px] leading-[36px]">{{ item.question }}</p>
        </div>
        <button class="text-primary text-[26px] leading-[36px]">
          {{ isOpen ? 'X' : '+' }}
        </button>
      </div>
      <transition name="fade">
        <div v-show="isOpen" class="mx-28 my-4">
          <p class="text-left text-gray-600 text-[20px] leading-[32px]">{{ item.answer }}</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const openIds = ref(new Set());
const props = defineProps({
  item: Object,
});

const isOpen = computed(() => openIds.value.has(props.item.id));

function toggleAnswer() {
  if (openIds.value.has(props.item.id)) {
    openIds.value.delete(props.item.id);
  } else {
    openIds.value.add(props.item.id);
  }
}
</script>

