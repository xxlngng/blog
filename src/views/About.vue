<template>
  <div class="content">
    <h3>运行数据</h3>
    <div class="main">
      <div class="item" v-for="(item, index) in dataArr" :key="index">
        <div class="flo-1">
          <p class="flag-1">
            <span class="iconfont ">&#xe654;</span> <br />
            <span class="flag-text">楼<br />层</span>
          </p>
          <p class="p-num1 p-num">
            <span v-show="item.floorNum < 10">0</span>{{ item.floorNum }}
          </p>
        </div>
        <div class="flo-2">
          <span class="iconfont tranc">&#xe608;</span>

          <p class="fl-num">
            <span style="font-size: 26px" class="iconfont ">&#xe607;</span>
            当前人数：
            <span>{{ item.popNum }}</span>
          </p>

          <!-- <p class="p-num">{{popNum}}</p> -->
        </div>
      </div>
    </div>

    <div class="bott">
      <p>运行表现： {{ runEmb }}</p>
      <p>客户体验指标：{{ cstExp }}</p>
      <p>节能环保指标： {{ energy }}</p>
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      runEmb: 0,
      cstExp: 0,
      energy: 0,
      floorNum: 1,
      popNum: 7,
      way: 0,
      dataArr: [
        {
          floorNum: 3, // 1~18
          way: 0, // 0 up 1 down
          popNum: 1 // 0~7
        },
        {
          floorNum: 7, // 1~18
          way: 0, // 0 up 1 down
          popNum: 5 // 0~7
        },
        {
          floorNum: 3, // 1~18
          way: 1, // 0 up 1 down
          popNum: 6 // 0~7
        },
        {
          floorNum: 16, // 1~18
          way: 0, // 0 up 1 down
          popNum: 4 // 0~7
        },
        {
          floorNum: 13, // 1~18
          way: 0, // 0 up 1 down
          popNum: 7 // 0~7
        },
        {
          floorNum: 17, // 1~18
          way: 1, // 0 up 1 down
          popNum: 6 // 0~7
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.changefloorNum(0);
    setTimeout(() => {
      this.changefloorNum(1);
    }, 500);
    setTimeout(() => {
      this.changefloorNum(2);
    }, 1200);
    setTimeout(() => {
      this.changefloorNum(3);
    }, 1800);
    this.changefloorNum(4);
    setTimeout(() => {
      this.changefloorNum(5);
    }, 2800);

    setInterval(() => {
      this.runEmb += 12;
      this.cstExp += 7;
      this.energy += 5;
    }, 3000);
  },
  methods: {
    changefloorNum(index) {
      setInterval(() => {
        if (this.dataArr[index].floorNum == 18) {
          this.dataArr[index].way = 1;
        }
        if (this.dataArr[index].floorNum == 1) {
          this.dataArr[index].way = 0;
        }
        this.dataArr[index].way
          ? this.dataArr[index].floorNum--
          : this.dataArr[index].floorNum++;

        this.dataArr[index].popNum = Math.floor(Math.random() * 7);
      }, 3000);
    }
  }
};
</script>
<style lang="less" scoped>
.content {
  height: 100vh;
  // background-image: url("../assets/images/bgg.png");
  // background-position: center;
  // background-size: contain;
  // background-repeat: no-repeat;
}
.main {
  // padding-top: 40px;
  height: 300px;
  // width: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  border: 1px #ffe5a4 dotted;
  background: rgba(255, 255, 255, 0.3);
  // opacity: 0.2;
  .item {
    // flex: 2;
    width: 30%;
    height: 100px;
    background-color: grey;
    margin: 0 10px;
    display: flex;
    border-radius: 5px;
    overflow: hidden;
    position: relative;

    .flo-1 {
      display: flex;
      position: relative;
      flex: 1;
      background-image: url("../assets/images/aa.png");
      align-items: center;
      align-content: center;
      .p-num1 {
        flex: 1;
        color: #fff;
        text-align: right;
        font-size: 40px;
        font-weight: 700;
        padding-right: 14px;
      }
      .flag-1 {
        padding: 5px 0;
        width: 30px;
        text-align: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 5px;
        color: rgb(235, 227, 227);
        background: linear-gradient(
          to left,
          rgb(36, 198, 220),
          rgb(81, 74, 157)
        );
      }
    }
    .flo-2 {
      flex: 2;
      display: flex;
      align-items: center;
      align-content: center;
      background: linear-gradient(
        to right,
        rgb(224, 234, 252),
        rgb(207, 222, 243)
      );
      position: relative;
      .fl-num {
        flex: 1;
        color: #545454;
        font-size: 22px;
      }
      .tranc {
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translateX(-50%);
        color: #4763c0;
        font-size: 22px;
      }
    }
    div {
      text-align: center;
      // .fl-num {
      //   font-size: 22px;
      //   color: rebeccapurple;
      // }
      .p-num {
        line-height: 60px;
        color: white;
        font-size: 38px;
        font-weight: 700;
      }
    }
  }
}

.bott {
  padding: 50px;
  p {
    color: #fff;
    font-size: 20px;
    line-height: 36px;
    padding: 0 10px;
  }
  :nth-child(1) {
    background: rgba(54, 203, 232, 0.3);
  }

  :nth-child(2) {
    background: rgba(255, 255, 255, 0.3);
  }

  :nth-child(3) {
    background: rgba(54, 203, 232, 0.3);
  }
}
</style>
