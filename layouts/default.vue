<template>
  <div :class="[unitsize ? 'mobile-nav-open' : '']">
    <headerbar></headerbar>
    <navbar></navbar>
    <Nuxt />
    <!-- <gotop></gotop> -->
    <footerbar></footerbar>
  </div>
</template>

<script>
import headerbar from "@/components/layouts/headerbar";
import navbar from "@/components/layouts/navbar";
// import gotop from "@/components/layouts/gotop";
import footerbar from "@/components/layouts/footerbar";

export default {
  components: {
    headerbar,
    navbar,
    // gotop,
    footerbar,
  },

  computed: {
    unitsize(){
      return this.$store.state.unitsize;
    }
  },
};
</script>
