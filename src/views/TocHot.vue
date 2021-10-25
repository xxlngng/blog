<template>
  <div class="main">
    <video
      autoplay="autoplay"
      muted
      loop
      src="../assets/a.mp4"
      class="bgvid"
      id="bgvid"
    ></video>

    <div class="text-slide-container">
      <h1 class="text-slide-header">
        想和上神一队
      </h1>

      <h2 class="text-slide-subheader">
        但是
      </h2>

      <!-- <button class="text-slide-button">
		再看一遍?
	</button> -->

      <p class="text-slide-text">
        为了表弟脱单，只能自己一队！
      </p>
    </div>
    <div class="container">
      <!-- <h1>中国东信代码大赛 YYDS</h1> -->
      <!-- <h1 class="animate__animated animate__bounce">An animated element</h1> -->
      <h1
        v-if="showTitle"
        style="color: #fff"
        class="white animate__animated animate__backInDown"
      >
        这是一个很霸气的名字！
      </h1>
    </div>
  </div>
</template>

<script>
import $ from "@/assets/jq/jquery-1.11.0.min.js";

export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      showTitle: false
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.tm = setInterval(() => {
      this.showText();
    }, 5000);
    setTimeout(() => {
      this.showTitle = true;
    }, 1800);
  },
  methods: {
    showText() {
      $(".text-slide-text").lbyl({
        content: "为了表弟脱单，只能自己一队！",
        speed: 200,
        type: "show"
      });
    }
  },
  beforeDestroy() {
    if (this.tm) {
      clearInterval(this.tm);
    }
  }
};
</script>
<style scoped>
.main {
  /* background-color: #000; */
  width: 100vw;
  height: 100vh;
}

.bgvid {
  position: fixed;
  left: 0;
  top: 0;
  /* width: 900px;
  height: 500px; */
  width: 100vw;
  /* height: 100vh; */
  z-index: -100;
  /* background-size: cover; */
  background-position: center;
  background-size: contain;
}

/* @import url("https://fonts.googleapis.com/css2?family=Bowlby+One+SC&family=Oswald&display=swap");
* {
  box-sizing: border-box;
} */

.text-slide-container {
  box-sizing: border-box;
  padding: 40px;
  color: white;
  /* background: linear-gradient(144deg, #072324 0%, #14f4ff 100%); */
  overflow: hidden;
  /* font-family: 'Bowlby One SC', cursive; */
}

.text-slide-header {
  font-size: 3.2rem;
  margin: 0;
  text-shadow: 0px 2px 0px black;
}

.text-slide-subheader {
  font-family: "Oswald", sans-serif;
  font-size: 1.55rem;
  margin: 0;
  text-transform: uppercase;
  text-shadow: 0px 2px 0px black;
}

.text-slide-button {
  font-family: "Bowlby One SC", cursive;
  padding: 10px 20px;
  border: 0;
  border-radius: 5px;
  color: #072324;
  position: absolute;
  top: 40px;
  right: 40px;
  transition: all 0.2s ease;
  cursor: pointer;
  box-shadow: 0px 1px 1px 0px black;
}
.text-slide-button:hover {
  background-color: #072324;
  color: white;
}

.text-slide-text {
  margin-top: 20px;
  font-size: 1rem;
}

.text-slide-letter {
  display: inline-block;
  animation: zoom 1s ease;
}

@keyframes zoom {
  0% {
    transform: scale(0) translateX(20vw);
  }
  80% {
    transform: scale(3, 1.5);
    text-shadow: 30px 30px 30px black;
  }
  100% {
    text-shadow: 0px 2px 0px black;
  }
}
</style>

<style lang="less" scoped>
.container {
  // width: 100%;
  // height: 100%;
  // position: relative;
  // padding: 2em;
  // -webkit-filter: contrast(20);
  // filter: contrast(20);
  // background-color: black;
  // overflow: hidden;
  h1 {
    font-family: Righteous;
    color: white;
    font-size: 2.8rem;
    line-height: 1;
    display: block;
    position: absolute;
    left: 40%;
    bottom: 40%;
    // transform: translate(-50%, -50%);
  }
}

.red {
  color: red;
}
</style>
