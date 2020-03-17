<template>
  <div class="header">
    <div class="wap">
      <!-- <div class="logo">
        <img src="../../assets/images/logo.gif" alt />
        <p class="chang">天将降大任于斯人也</p>
      </div>-->

      <div class="nav">
        <router-link class="nav-item" to="/" href="javascript:;">
          <span>Xianliang Xu's Weblog</span>
        </router-link>
        <router-link class="nav-item" to="/about" href="javascript:;">
          <span>About Me</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.header {
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 70px;
  background-color: #333;
  box-shadow: 0 1px 4px 5px rgba(0, 0, 0, 0.3);
  .wap {
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    .nav {
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .nav-item {
        height: 70px;
        line-height: 70px;
        font-size: 18px;
        font-weight: 600;
        padding: 0 10px;
        color: #fff;
        
      }
    }
    // display: flex;
    // flex-direction: row;
    // justify-content: space-between;
    // align-items: center;
    // .logo {
    //   display: flex;
    //   flex-direction: row;
    //   align-items: center;
    //   > img {
    //     width: 50px;
    //     height: 50px;
    //   }
    //   .chang {
    //     font-size: 20px;
    //     color: #4285f4;
    //     animation: col 3s infinite;
    //   }
    // }
  }
}

@keyframes col {
  0% {
    color: #4285f4;
  }

  25% {
    color: #d23f31;
  }
  50% {
    color: #3b3e43;
  }
  75% {
    color: #f1e05a;
  }
}
</style>