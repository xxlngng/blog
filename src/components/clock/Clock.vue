<template>
  <div class="">
    <div class="clock">
      <div class="flip" ref="flip">
        <div class="digital front" data-number="0"></div>
        <div class="digital back" data-number="1"></div>
      </div>
      <div class="flip" ref="flip">
        <div class="digital front" data-number="0"></div>
        <div class="digital back" data-number="1"></div>
      </div>
      <em class="divider">:</em>
      <div class="flip" ref="flip">
        <div class="digital front" data-number="0"></div>
        <div class="digital back" data-number="1"></div>
      </div>
      <div class="flip" ref="flip">
        <div class="digital front" data-number="0"></div>
        <div class="digital back" data-number="1"></div>
      </div>
      <em class="divider">:</em>
      <div class="flip" ref="flip">
        <div class="digital front" data-number="0"></div>
        <div class="digital back" data-number="1"></div>
      </div>
      <div class="flip" ref="flip">
        <div class="digital front" data-number="0"></div>
        <div class="digital back" data-number="1"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import Flipper from "@/util/clock";
var Flipper = /** @class */ (function () {
    function Flipper(node, currentTime, nextTime) {
        this.isFlipping = false;
        this.duration = 600;
        this.flipNode = node;
        this.frontNode = node.querySelector(".front");
        this.backNode = node.querySelector(".back");
        this.setFrontTime(currentTime);
        this.setBackTime(nextTime);
    }
    Flipper.prototype.setFrontTime = function (time) {
        this.frontNode.dataset.number = time;
    };
    Flipper.prototype.setBackTime = function (time) {
        this.backNode.dataset.number = time;
    };
    Flipper.prototype.flipDown = function (currentTime, nextTime) {
        var _this = this;
        if (this.isFlipping) {
            return false;
        }
        this.isFlipping = true;
        this.setFrontTime(currentTime);
        this.setBackTime(nextTime);
        this.flipNode.classList.add("running");
        setTimeout(function () {
            _this.flipNode.classList.remove("running");
            _this.isFlipping = false;
            _this.setFrontTime(nextTime);
        }, this.duration);
    };
    return Flipper;
}());

export default {
  name: "",
  components: {},
  data() {
    return {
      timer: null
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.fetchTime();
  },
  methods: {
    getTimeFromDate(date) {
      return date
        .toTimeString()
        .slice(0, 8)
        .split(":")
        .join("");
    },
    fetchTime() {
      var flips = document.querySelectorAll(".flip");
      var now = new Date();
      var nowTimeStr = this.getTimeFromDate(new Date(now.getTime() - 1000));
      var nextTimeStr = this.getTimeFromDate(now);
      var flippers = Array.from(flips).map(function(flip, i) {
        return new Flipper(flip, nowTimeStr[i], nextTimeStr[i]);
      });
      let _this = this;
      this.timer = setInterval(function() {
        var now = new Date();
        var nowTimeStr = _this.getTimeFromDate(new Date(now.getTime() - 1000));
        var nextTimeStr = _this.getTimeFromDate(now);
        for (var i = 0; i < flippers.length; i++) {
          if (nowTimeStr[i] === nextTimeStr[i]) {
            continue;
          }
          flippers[i].flipDown(nowTimeStr[i], nextTimeStr[i]);
        }
      }, 1000);
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
// body {
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	height: 100vh;
// 	background-color: #FF6D63;
// }

.clock {
  display: flex;
}
.clock .divider {
  font-size: 66px;
  line-height: 102px;
  font-style: normal;
}
.clock .flip {
  position: relative;
  width: 60px;
  height: 100px;
  margin: 2px;
  font-size: 66px;
  line-height: 100px;
  text-align: center;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
}
.clock .flip .digital::before,
.clock .flip .digital::after {
  position: absolute;
  content: attr(data-number);
  left: 0;
  right: 0;
  color: white;
  background: black;
  overflow: hidden;
  -webkit-perspective: 160px;
  perspective: 160px;
}
.clock .flip .digital::before {
  top: 0;
  bottom: 50%;
  border-bottom: 1px solid #666;
  border-radius: 10px 10px 0 0;
}
.clock .flip .digital::after {
  top: 50%;
  bottom: 0;
  line-height: 0;
  border-radius: 0 0 10px 10px;
}
.clock .flip .back::before,
.clock .flip .front::after {
  z-index: 1;
}
.clock .flip .back::after {
  z-index: 2;
}
.clock .flip .front::before {
  z-index: 3;
}
.clock .flip .back::after {
  -webkit-transform-origin: center top;
  transform-origin: center top;
  -webkit-transform: rotateX(0.5turn);
  transform: rotateX(0.5turn);
}
.clock .flip.running .front::before {
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
  -webkit-animation: frontFlipDown 0.6s ease-in-out;
  animation: frontFlipDown 0.6s ease-in-out;
  box-shadow: 0 -2px 6px rgba(255, 255, 255, 0.3);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.clock .flip.running .back::after {
  -webkit-animation: backFlipDown 0.6s ease-in-out;
  animation: backFlipDown 0.6s ease-in-out;
}

@-webkit-keyframes frontFlipDown {
  to {
    -webkit-transform: rotateX(0.5turn);
    transform: rotateX(0.5turn);
  }
}

@keyframes frontFlipDown {
  to {
    -webkit-transform: rotateX(0.5turn);
    transform: rotateX(0.5turn);
  }
}
@-webkit-keyframes backFlipDown {
  to {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
  }
}
@keyframes backFlipDown {
  to {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
  }
}
</style>
