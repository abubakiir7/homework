<template>
  <div>
    <div class="container">
      <h1
        class="text-center text-primary text-[50px] leading-[64px] font-bold pt-52"
      >
        Contact Us
      </h1>
      <p
        class="text-center text-primary text-[18px] leading-[28px] md:w-[42%] mx-auto mt-6 mb-14"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
      <div class="md:w-[1060px] md:mx-auto bg-[#F4F6FC]">
        <div class="grid grid-cols-1 md:grid-cols-2 pt-16 md:px-16 pb-4 gap-x-14 gap-y-4">
          <template v-for="item in contactDatas" :key="item.id">
            <Inputs :item="item" class="mx-auto w-full"/>
          </template>
        </div>
        <div class="md:mx-auto md:w-full md:p-0 p-6">
          <h3 class="md:ml-16 text-black text-[20px] leading-[32px] font-medium py-2">
            Message
          </h3>
          <input class="md:ml-16 py-4 pl-4 pb-20 md:w-[924px] w-full border rounded-[8px] mb-10" type="text" placeholder="Write your  question here" />
        </div>
        <button class="md:mb-8 m-6 md:m-0 md:ml-16 bg-[#282938] text-white text-[20px] leading-[32px] font-medium px-8 py-2 md:py-4 md:px-16 rounded-[42px] mb-16 hover:bg-black w-[88%]">
            Send Messege
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Inputs from "../components/inputs.vue";
const contactDatas = [
  {
    id: 1,
    name: "Name",
    text: "Enter your name",
  },
  {
    id: 2,
    name: "Email",
    text: "Enter your Email",
  },
  {
    id: 3,
    name: "Subject",
    text: "Provide context",
  },
  {
    id: 4,
    name: "Subject",
    text: "Select Subject",
  },
];
</script>

<style lang="scss" scoped></style>
