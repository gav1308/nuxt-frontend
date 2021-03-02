<template>
  <div>
    <!-- <nuxt-link to="/">首頁</nuxt-link> -->
    <nuxt-link to="/">首頁</nuxt-link>
    <br />
    <hr />
    <br />
    <button @click="add()">按我+1</button>
    <p>count : {{ count }}</p>
    <br />
    <hr />
    <button @click="$fetch">refresh</button>
    <!-- <ul>
      <li v-for="(mountain, index) in mountains" :key="mountain.title">
        {{ index + 1 }} => {{ mountain }}
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  layout: "mydefault",
  head() {
    return {
      title: this.about.title,
      meta: this.about.meta,
    };
  },

  data() {
    return {
      mountains: [],
      about: {
        title: "這是about頁面",
        meta: [
          {
            hid: "about111",
            name: "about111",
            content: "about111",
          },
          {
            hid: "about222",
            name: "about222",
            content: "about222",
          },
        ],
      },
    };
  },

  async fetch() {
    this.mountains = await fetch(
      "https://api.nuxtjs.dev/mountains"
    ).then((res) => res.json());
  },

  computed: {
    count() {
      return this.$store.state.test.counter;
    },
  },

  methods: {
    add() {
      this.$store.dispatch("test/test");
      // console.log(this.$store.state.test.counter);
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  outline: 1px solid black;
  background: #ccc;
  color: #fff;
}
</style>
