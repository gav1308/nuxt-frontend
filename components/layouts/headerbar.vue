<template>
  <div class="header">
    <div class="flexbox-container">
      <img src="img/icon/logo.png" class="mobile-on header-logo" />
      <ul class="sports pc-on">
        <li v-for="left in headers.left" :key="left.name">
          <a :href="left.link" :target="left.target" :title="left.title">
            <h5>{{ left.name }}</h5>
            <img :src="left.img" />
            <i :class="left.icon"></i>
          </a>
        </li>
      </ul>
      <div class="icons">
        <a
          v-for="right in headers.right"
          :key="right.title"
          :href="right.link"
          :target="right.target"
          :title="right.title"
        >
          <h5>{{ right.name }}</h5>
          <img :src="right.img" />
          <i :class="right.icon"></i>
        </a>
        <div class="hamburg" @click="togglehambuger()">
          <div class="bar1" :class="[unitsize ? 'change' : '']"></div>
          <div class="bar2" :class="[unitsize ? 'change' : '']"></div>
          <div class="bar3" :class="[unitsize ? 'change' : '']"></div>
        </div>
      </div>
    </div>
    <div
      class="mobile-nav"
      :style="[unitsize ? { display: 'block' } : { display: 'none' }]"
    >
      <div class="common-nav">
        <a href="/">
          <h2>HOME</h2>
        </a>
      </div>
      <div class="mobile-menu">
        <h2 class="common-nav title">MENU</h2>
        <ul class="mobile-various">
          <li>
            <p>
              <span>關於寵物網</span>
              <i class="fas fa-plus-circle"></i>
            </p>
            <div class="mobile-dropdown-content">
              <a href="javascript: void(0)">
                <span>品牌介紹</span>
                <i class="fas fa-angle-right"></i>
              </a>
              <a href="javascript: void(0)">
                <span>經營理念</span>
                <i class="fas fa-angle-right"></i>
              </a>
            </div>
          </li>
          <li>
            <p>
              <span>寵物生活</span>
              <i class="fas fa-plus-circle"></i>
            </p>
            <div class="mobile-dropdown-content">
              <a href="javascript: void(0)">
                <span>狗汪專區</span>
                <i class="fas fa-angle-right"></i>
              </a>
              <a href="javascript: void(0)">
                <span>貓喵專區</span>
                <i class="fas fa-angle-right"></i>
              </a>
              <a href="javascript: void(0)">
                <span>小寵專區</span>
                <i class="fas fa-angle-right"></i>
              </a>
            </div>
          </li>
          <li>
            <p>
              <span>寵知識</span>
              <i class="fas fa-plus-circle"></i>
            </p>
            <div class="mobile-dropdown-content">
              <a href="javascript: void(0)">
                <span>狗汪專區</span>
                <i class="fas fa-angle-right"></i>
              </a>
              <a href="javascript: void(0)">
                <span>貓喵專區</span>
                <i class="fas fa-angle-right"></i>
              </a>
              <a href="javascript: void(0)">
                <span>小寵專區</span>
                <i class="fas fa-angle-right"></i>
              </a>
            </div>
          </li>
          <li>
            <p>
              <span>食量計算神器</span>
              <i class="fas fa-plus-circle"></i>
            </p>
            <div class="mobile-dropdown-content">
              <a href="javascript: void(0)">
                <span>狗汪食量計算神器</span>
                <i class="fas fa-angle-right"></i>
              </a>
              <a href="javascript: void(0)">
                <span>貓喵食量計算神器</span>
                <i class="fas fa-angle-right"></i>
              </a>
            </div>
          </li>
          <li>
            <p>
              <span>獸醫聊天室</span>
              <i class="fas fa-plus-circle"></i>
            </p>
            <div class="mobile-dropdown-content">
              <a href="javascript: void(0)">
                <span>狗汪專區</span>
                <i class="fas fa-angle-right"></i>
              </a>
              <a href="javascript: void(0)">
                <span>貓喵專區</span>
                <i class="fas fa-angle-right"></i>
              </a>
              <a href="javascript: void(0)">
                <span>小寵專區</span>
                <i class="fas fa-angle-right"></i>
              </a>
            </div>
          </li>
          <li>
            <p>
              <span>汪喵分享</span>
              <i class="fas fa-plus-circle"></i>
            </p>
            <div class="mobile-dropdown-content">
              <a href="javascript: void(0)">
                <span>狗汪專區</span>
                <i class="fas fa-angle-right"></i>
              </a>
              <a href="javascript: void(0)">
                <span>貓喵專區</span>
                <i class="fas fa-angle-right"></i>
              </a>
              <a href="javascript: void(0)">
                <span>小寵專區</span>
                <i class="fas fa-angle-right"></i>
              </a>
            </div>
          </li>
          <li>
            <p>
              <span>最新消息</span>
              <i class="fas fa-plus-circle"></i>
            </p>
            <div class="mobile-dropdown-content">
              <a href="javascript: void(0)">
                <span>促銷活動</span>
                <i class="fas fa-angle-right"></i>
              </a>
              <a href="javascript: void(0)">
                <span>形象宣傳</span>
                <i class="fas fa-angle-right"></i>
              </a>
              <a href="javascript: void(0)">
                <span>實體活動</span>
                <i class="fas fa-angle-right"></i>
              </a>
              <a href="javascript: void(0)">
                <span>網路活動</span>
                <i class="fas fa-angle-right"></i>
              </a>
            </div>
          </li>
        </ul>
        <h2 class="common-nav title">SUPPORT</h2>
        <ul class="mobile-various">
          <li>
            <a href="javascript: void(0)" title="大樹藥局門市據點">
              <p>門市據點</p>
            </a>
          </li>
          <li>
            <a
              href="https://shop.greattree.com.tw/"
              target="_blank"
              title="大樹藥局健康購物網"
            >
              <p>線上購物</p>
            </a>
          </li>
          <li>
            <a
              href="https://www.greattree.com.tw/"
              target="_blank"
              title="大樹藥局"
            >
              <p>大樹藥局</p>
            </a>
          </li>
          <li>
            <a href="javascript: void(0)" title="聯絡大樹藥局">
              <p>聯絡我們</p>
            </a>
          </li>
          <li>
            <a href="javascript: void(0)" title="投稿大樹藥局">
              <p>我要投稿</p>
            </a>
          </li>
        </ul>
        <div class="mobile-social">
          <a
            href="https://www.facebook.com/www.greattree.com.tw"
            target="_blank"
            title="大樹藥局粉絲團"
          >
            <i class="fab fa-facebook-square"></i>
          </a>
          <a
            href="https://line.me/R/ti/p/%40kwy1255c"
            target="_blank"
            title="大樹藥局LINE好友"
          >
            <i class="fab fa-line"></i>
          </a>
          <a
            href="https://www.instagram.com/greattree_pharmacy/"
            target="_blank"
            title="大樹藥局IG"
          >
            <i class="fab fa-instagram-square"></i>
          </a>
        </div>
      </div>
      <!-- support -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: {},
    };
  },
  mounted() {
    this.$ajax.get("/json/header.json").then((response) => {
      this.headers = response.result.headers;
    });
  },

  computed: {
    unitsize() {
      return this.$store.state.unitsize;
    },
  },

  methods: {
    togglehambuger() {
      let unitsize = this.$store.state.unitsize;
      this.$store.dispatch("unitsize", !unitsize);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
