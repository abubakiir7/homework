<template>
  <div>
    <div class="container p-6">
      <!-- Intro_1 -->
      <div class="flex justify-between items-center pt-52 pb-32 md:flex-nowrap flex-wrap">
        <div class="md:w-1/2 md:pr-36">
          <h3 class="text-primary text-center md:text-left text-[20px] leading-[32px]">About us</h3>
          <h1 class="text-primary text-center md:text-left text-[56px] font-bold leading-[74px] pb-5">
            Our designs solve problems
          </h1>
          <p class="text-primary text-[18px] text-center md:text-left pb-6 leading-[28px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div>
          <img class="w-full" src="/first.png" alt="" />
        </div>
      </div>

      <!-- Intro_2 -->
      <div class="grid grid-cols-1 md:grid-cols-2 bg-[#F4F5F5] md:mb-20">
        <div class="md:py-16 md:pl-14 md:pr-16 py-6">
          <h2 class="text-primary text-[40px] font-bold text-center md:text-left leading-[56px]">
            Goal focussed
          </h2>
          <p class="text-primary text-[18px] leading-[28px] p-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div class="md:py-16 md:pr-24" >
          <h2 class="text-primary text-[40px] font-bold leading-[40px] md:leading-[56px] text-center md:text-left">
            Continuous improvement
          </h2>
          <p class="text-primary text-[18px] leading-[28px] p-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div class="md:col-span-2">
            <img src="/about2.png" alt="">
        </div>
      </div>
    </div>
    <div class="bg-[#F4F6FC]">
        <div class="container p-6">
            <h2 class="text-primary text-[50px] leading-[64px] font-bold text-center pt-28 pb-8" >Meet our team</h2>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 pb-28">
                <template v-for="item in teamMembers" :key="item.id" >
                    <Team :item="item" />
                </template>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import Team from '../components/team.vue';

const teamMembers = [
    {
        id:1,
        img: "/man.png",
        name: "John Smith",
        position: "CEO"
    },
    {
        id:2,
        img: "/man.png",
        name: "John Smith",
        position: "CEO"
    },
    {
        id:3,
        img: "/man.png",
        name: "John Smith",
        position: "CEO"
    },
    {
        id:4,
        img: "/man.png",
        name: "John Smith",
        position: "CEO"
    },
]
</script>

<style lang="scss" scoped></style>
