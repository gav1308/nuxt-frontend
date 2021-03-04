<template>
  <div class="wrap" id="top">
    <SlideSwiper :injection="banner"></SlideSwiper>
    <div class="chunk section">
      <div class="content">
        <Chunk></Chunk>
        <Partition></Partition>
      </div>
    </div>
    <SlideSwiper :injection="banner2"></SlideSwiper>
  </div>
</template>

<script>
import SlideSwiper from "~/components/slide/swiper.vue";
import Chunk from "~/components/common/chunk";
import Partition from "~/components/common/partition";

export default {
  components: {
    SlideSwiper,
    Chunk,
    Partition,
  },

  head() {
    return {
      title: "大樹寵物網",
      meta: "",
    };
  },

  data() {
    return {
      banner: {
        pagination: true,
        slidetitle: false,
        params: {
          loop: true,
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
        },
        slides: [
          {
            title: "毛孩的健康 從日常開始",
            link: "https://tw.yahoo.com/",
            img: "http://localhost:3000/img/banner/banner_02.png",
          },
          {
            title: "毛孩的健康 從日常開始",
            link: "https://tw.yahoo.com/",
            img: "http://localhost:3000/img/banner/banner_02.png",
          },
          {
            title: "毛孩的健康 從日常開始",
            link: "https://tw.yahoo.com/",
            img: "http://localhost:3000/img/banner/banner_02.png",
          },
          {
            title: "毛孩的健康 從日常開始",
            link: "https://tw.yahoo.com/",
            img: "http://localhost:3000/img/banner/banner_02.png",
          },
          {
            title: "毛孩的健康 從日常開始",
            link: "https://tw.yahoo.com/",
            img: "http://localhost:3000/img/banner/banner_02.png",
          },
          {
            title: "毛孩的健康 從日常開始",
            link: "https://tw.yahoo.com/",
            img: "http://localhost:3000/img/banner/banner_02.png",
          },
        ],
      },
      banner2: {
        pagination: false,
        slidetitle: true,
        addstyle: {
          status: true,
          img: { "border-radius": "8px", "margin-bottom": "15px" },
          title: {
            "font-weight": "500",
            "text-align": "center",
            color: "#272727",
          },
        },
        params: {
          loop: true,
          breakpoints: {
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 27.5,
            },
          },
        },
        slides: [
          {
            title: "大樹台新日 卡友限定",
            link: "https://tw.yahoo.com/",
            img: "http://localhost:3000/img/promotions/news-1.png",
          },
          {
            title: "大樹台新日 卡友限定",
            link: "https://tw.yahoo.com/",
            img: "http://localhost:3000/img/promotions/news-2.png",
          },
          {
            title: "大樹台新日 卡友限定",
            link: "https://tw.yahoo.com/",
            img: "http://localhost:3000/img/promotions/news-3.png",
          },
          {
            title: "大樹台新日 卡友限定",
            link: "https://tw.yahoo.com/",
            img: "http://localhost:3000/img/promotions/news-1.png",
          },
          {
            title: "大樹台新日 卡友限定",
            link: "https://tw.yahoo.com/",
            img: "http://localhost:3000/img/promotions/news-2.png",
          },
          {
            title: "大樹台新日 卡友限定",
            link: "https://tw.yahoo.com/",
            img: "http://localhost:3000/img/promotions/news-3.png",
          },
        ],
      },
    };
  },

};
</script>

