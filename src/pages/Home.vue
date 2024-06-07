<template>
  <div>
    <div class="bg-[#1C1E53]">
      <div
        class="container flex md:py-40 py-20 items-center justify-center md:justify-start flex-col md:flex-row text-center md:text-left p-6"
      >
        <div class="md:w-6/12 md:pr-[136px]">
          <h1 class="font-semibold text-[54px] leading-[74px] text-white">
            Building stellar websites for early startups
          </h1>
          <p class="font-medium text-[16px] text-white py-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div class="flex items-center justify-center md:justify-start gap-2">
            <button
              class="rounded-[41px] px-10 py-2 md:py-3 text-[#1B1C2B] bg-[#FCD980]"
            >
              View our work
            </button>
            <button
              class="flex items-center rounded-[41px] px-10 py-2 md:py-3 text-white"
            >
              <span class="mr-2">View pricing</span>
              <svg
                width="25"
                height="12"
                viewBox="0 0 25 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                  fill="#F4F6FC"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="md:w-6/12 pt-8 md:pt-0">
          <img src="/Illustration.png" alt="Illustration" />
        </div>
      </div>
    </div>

    <!-- View our projects -->

    <div>
      <div class="container my-10 p-6">
        <div class="flex justify-between items-center pb-10">
          <h2 class="text-[#282938] md:text-[48px] text-[20px] font-semibold">
            View our projects
          </h2>
          <button class="flex items-center text-[#282938] group">
            <span class="mr-2">View pricing</span>
            <svg
              width="25"
              height="12"
              viewBox="0 0 25 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="transform transition-transform duration-300 group-hover:translate-x-2"
            >
              <path
                d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                fill="#282938"
              />
            </svg>
          </button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="col-span-2">
            <img src="/Card.png" alt="" class="w-full" />
          </div>
          <div>
            <img src="/second.png" class="w-full" alt="" />
            <img class="pl-2 pt-8 w-full" src="/third.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- Design -->
    <div class="bg-[#F4F6FC] md:py-20">
      <div
        class="container flex items-center justify-center flex-col text-center md:p-0 p-6"
      >
        <h3 class="leading-[28px] text-center font-medium text-[#282938]">
          Features
        </h3>
        <h2
          class="text-gray-800 md:text-[56px] text-[30px] font-bold md:leading-[74px] pb-10"
        >
          Design that solves problems, one product at a time
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-5">
          <template v-for="item in gridDatas" :key="item.id">
            <Grid1 :item />
          </template>
        </div>
      </div>
    </div>

    <!-- Clients -->

    <div class="bg-[#F4F6FC]">
      <div class="container md:flex-nowrap flex-wrap flex p-6">
        <div class="md:w-1/4 w-[100%]">
          <h2
            class="leading-[56px] text-[40px] text-[#282938] font-semibold md:text-left text-center"
          >
            What our clients say about us
          </h2>
          <p
            class="leading-[28px] text-[#282938] pt-6 md:text-left text-center"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
          </p>
        </div>
        <ClientsComment class="w-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ClientsComment from "../components/clients-comment.vue";
import Grid1 from "../components/Grid1.vue";

const gridDatas = [
  {
    id: 1,
    img: null,
    img: "/Icon.png",
    title: "Uses Client First",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
  },
  {
    id: 2,
    img: null,
    img: "/Icon.png",
    title: "Two Free Revision Round",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
  },
  {
    id: 3,
    img: "/Icon.png",
    title: "Template Customization",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
  },
  {
    id: 4,
    img: "/Icon.png",
    title: "24/7 Support",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
  },
  {
    id: 5,
    img: "/Icon.png",
    title: "Quick Delivery",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
  },
  {
    id: 6,
    img: null,
    img: "/Icon.png",
    title: "Hands-on approach",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
  },
];
const clientsComment = [
  {
    id: 1,
    text: '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
    fullName: "Jenny Wilson",
    position: "Vice President",
    image: "mask.png",
  },
  {
    id: 2,
    text: '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
    fullName: "Abdulloh aka",
    position: "Vice President",
    image: "mask.png",
  },
];
</script>

<style lang="scss" scoped></style>
