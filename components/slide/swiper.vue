<template>
  <div class="banner section">
    <div class="content">
      <div class="swiper-container">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="slide in injection.slides" :key="slide.img">
            <a :href="slide.link">
              <img :src="slide.img" class="d-block" :style="[addstyle.img]" />
            </a>
            <h3 v-if="injection.slidetitle" :style="[addstyle.title]">
              {{ slide.title }}
            </h3>
          </swiper-slide>
          <div
            class="swiper-pagination"
            slot="pagination"
            :style="pagination"
          ></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    injection: Object,
  },

  data() {
    return {
      addstyle: {},
      pagination: "",
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },

  beforeMount() {
    Object.assign(this.swiperOption, this.injection.params);
    if (this.injection.addstyle !== undefined) {
      this.psuhstyle(
        this.injection.addstyle.img,
        this.injection.addstyle.title
      );
    } else {
      this.psuhstyle();
    }

    if (
      this.injection.pagination == undefined ||
      this.injection.pagination == false
    ) {
      this.pagination = { display: "none" };
    }
  },

  methods: {
    psuhstyle(img = "", title = "") {
      this.addstyle = {
        img: img,
        title: title,
      };
    },
  },
};
</script>

