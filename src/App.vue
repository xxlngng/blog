<template>
  <div id="app">
    <!-- <Header></Header> -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view/> -->
    <!-- <Footer></Footer> -->
    <TocHot />
    <About />
  </div>
</template>

<script>
// import Header from "@/components/public/Header.vue"
// import Footer from "@/components/public/Footer.vue"
import TocHot from "./views/TocHot.vue";
import About from "./views/About.vue";

export default {
  name: "App",
  components: {
    // Header,
    // Footer,
    TocHot,
    About
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="less">
// #app {
//   padding-top: 70px;
// }
</style>
