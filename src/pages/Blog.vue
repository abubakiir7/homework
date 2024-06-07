<template>
  <div>
    <div class="container flex md:py-40 py-20 items-center justify-center flex-col text-center">
      <h1
        class="text-gray-800 md:text-[56px] text-[40px] font-bold leading-[50px] md:leading-[74px] pb-5"
      >
        A UX Case Study on Creating a Studious Environment for Students
      </h1>
      <p
        class="text-[18px] font-semibold leading-[28px] text-center text-primary mb-10 mt-6"
      >
        Posted on 27th January 2021
      </p>
      <img class="w-full" src="/blog1.png" alt="" />
      <p
        class="text-[18px] leading-[28px] text-center text-primary mt-10 mb-6 md:w-[825px] mx-auto"
      >
        Apparently we had reached a great height in the atmosphere, for the sky
        was a dead black, and the stars had ceased to twinkle. By the same
        illusion which lifts the horizon of the sea to the level of the
        spectator on a hillside.
      </p>
      <button
        class="text-[#2405F2] text-center w-full text-[18px] leading-[28px] mb-24"
      >
        Read more
      </button>
      <h2 class="text-[50px] leading-[64px] font-bold text-center text-primary mb-10">
        Our Blog
      </h2>
      <div class="grid grid-col-1 p-6 md:grid-cols-3 gap-x-10 gap-y-14 mb-20">
        <template v-for="item in gridDatas" :key="item.id">
          <Blogs :item="item" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import Blogs from "../components/Blogs.vue";

const gridDatas = [
  {
    id: 1,
    img: "https://s3-alpha-sig.figma.com/img/3163/33c2/82340927a465f373a618fcdf0b54b1cb?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LiUm1-kQHAsWgbJl77zGdsqLurAtPTiNdILjifp9WYlODdvZcXLnE7XhvxsjX4EYwF-lAO3b03Mo~~Jfz1vbaliwp3haam4kZn3pUFPazrbZWkW6frcWfuP2V-TDXWwhTJJ1De~8aeiaE08zDV-kyvUpMw3-rCd4EwXtFFUxGz-y8QoM0lfqijzjyc5IU-khdxdxEaQ~E6mhIPHnnYuFEDjoI5cJO0f-cEQQjttUXHJ89pel2pnSkQnrqIpt2A49ZovmwZsgbrP7Mor2MFh8VxnsLIqkWlJt4EzyriSZPu7c6x4Rf6~fKYlrm3AshjZyK0K~JZv8F75r57JpGwI1tw__",
    data: "27 Jan 2021",
    text: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    content:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
  },
  {
    id: 2,
    img: "https://s3-alpha-sig.figma.com/img/3163/33c2/82340927a465f373a618fcdf0b54b1cb?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LiUm1-kQHAsWgbJl77zGdsqLurAtPTiNdILjifp9WYlODdvZcXLnE7XhvxsjX4EYwF-lAO3b03Mo~~Jfz1vbaliwp3haam4kZn3pUFPazrbZWkW6frcWfuP2V-TDXWwhTJJ1De~8aeiaE08zDV-kyvUpMw3-rCd4EwXtFFUxGz-y8QoM0lfqijzjyc5IU-khdxdxEaQ~E6mhIPHnnYuFEDjoI5cJO0f-cEQQjttUXHJ89pel2pnSkQnrqIpt2A49ZovmwZsgbrP7Mor2MFh8VxnsLIqkWlJt4EzyriSZPu7c6x4Rf6~fKYlrm3AshjZyK0K~JZv8F75r57JpGwI1tw__",
    data: "27 Jan 2021",
    text: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    content:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
  },
  {
    id: 3,
    img: "https://s3-alpha-sig.figma.com/img/3163/33c2/82340927a465f373a618fcdf0b54b1cb?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LiUm1-kQHAsWgbJl77zGdsqLurAtPTiNdILjifp9WYlODdvZcXLnE7XhvxsjX4EYwF-lAO3b03Mo~~Jfz1vbaliwp3haam4kZn3pUFPazrbZWkW6frcWfuP2V-TDXWwhTJJ1De~8aeiaE08zDV-kyvUpMw3-rCd4EwXtFFUxGz-y8QoM0lfqijzjyc5IU-khdxdxEaQ~E6mhIPHnnYuFEDjoI5cJO0f-cEQQjttUXHJ89pel2pnSkQnrqIpt2A49ZovmwZsgbrP7Mor2MFh8VxnsLIqkWlJt4EzyriSZPu7c6x4Rf6~fKYlrm3AshjZyK0K~JZv8F75r57JpGwI1tw__",
    data: "27 Jan 2021",
    text: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    content:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
  },
  {
    id: 4,
    img: "https://s3-alpha-sig.figma.com/img/3163/33c2/82340927a465f373a618fcdf0b54b1cb?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LiUm1-kQHAsWgbJl77zGdsqLurAtPTiNdILjifp9WYlODdvZcXLnE7XhvxsjX4EYwF-lAO3b03Mo~~Jfz1vbaliwp3haam4kZn3pUFPazrbZWkW6frcWfuP2V-TDXWwhTJJ1De~8aeiaE08zDV-kyvUpMw3-rCd4EwXtFFUxGz-y8QoM0lfqijzjyc5IU-khdxdxEaQ~E6mhIPHnnYuFEDjoI5cJO0f-cEQQjttUXHJ89pel2pnSkQnrqIpt2A49ZovmwZsgbrP7Mor2MFh8VxnsLIqkWlJt4EzyriSZPu7c6x4Rf6~fKYlrm3AshjZyK0K~JZv8F75r57JpGwI1tw__",
    data: "27 Jan 2021",
    text: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    content:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
  },
  {
    id: 5,
    img: "https://s3-alpha-sig.figma.com/img/3163/33c2/82340927a465f373a618fcdf0b54b1cb?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LiUm1-kQHAsWgbJl77zGdsqLurAtPTiNdILjifp9WYlODdvZcXLnE7XhvxsjX4EYwF-lAO3b03Mo~~Jfz1vbaliwp3haam4kZn3pUFPazrbZWkW6frcWfuP2V-TDXWwhTJJ1De~8aeiaE08zDV-kyvUpMw3-rCd4EwXtFFUxGz-y8QoM0lfqijzjyc5IU-khdxdxEaQ~E6mhIPHnnYuFEDjoI5cJO0f-cEQQjttUXHJ89pel2pnSkQnrqIpt2A49ZovmwZsgbrP7Mor2MFh8VxnsLIqkWlJt4EzyriSZPu7c6x4Rf6~fKYlrm3AshjZyK0K~JZv8F75r57JpGwI1tw__",
    data: "27 Jan 2021",
    text: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    content:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
  },
  {
    id: 6,
    img: "https://s3-alpha-sig.figma.com/img/3163/33c2/82340927a465f373a618fcdf0b54b1cb?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LiUm1-kQHAsWgbJl77zGdsqLurAtPTiNdILjifp9WYlODdvZcXLnE7XhvxsjX4EYwF-lAO3b03Mo~~Jfz1vbaliwp3haam4kZn3pUFPazrbZWkW6frcWfuP2V-TDXWwhTJJ1De~8aeiaE08zDV-kyvUpMw3-rCd4EwXtFFUxGz-y8QoM0lfqijzjyc5IU-khdxdxEaQ~E6mhIPHnnYuFEDjoI5cJO0f-cEQQjttUXHJ89pel2pnSkQnrqIpt2A49ZovmwZsgbrP7Mor2MFh8VxnsLIqkWlJt4EzyriSZPu7c6x4Rf6~fKYlrm3AshjZyK0K~JZv8F75r57JpGwI1tw__",
    data: "27 Jan 2021",
    text: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    content:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
  },
];
</script>

<style lang="scss" scoped></style>
