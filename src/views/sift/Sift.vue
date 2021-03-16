<template>
  <div>
    <van-sticky :offset-top="46">
      <div class="w100 bg-w pl20 pr20 pt5 pb5 card-shadow">
        <div class="w100 sift-btn flex-box ju-c" @click="showView">
          <i class="myfont icon-sousuo"></i>
          <span class="ml5 font-14">搜索</span>
        </div>
      </div>
    </van-sticky>

    <van-popup class="sift-view flex-box flex-col" v-model="show" position="right" :lazy-render="false">
      <div class="flex-1 of-y">
        <component v-for="(item, index) in siftData" :key="index" ref="siftItem" :is="siftType(item.type)" :sift="item"></component>
      </div>
      <div class="w100 flex-box">
        <div class="flex-1 font-14 white tx-c flex-foot-box" style="background: #8a99a2;" @click="hideView">关闭</div>
        <div class="flex-1 font-14 white tx-c flex-foot-box" style="background: #f3bf43;" @click="clearAllValue">重置</div>
        <div class="flex-1 font-14 white tx-c flex-foot-box" style="background: #3382f7;" @click="initPage">查询</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import SiftText from "./SiftText.vue";
import SiftSelect from "./SiftSelect.vue";
import SiftDate from "./SiftDate.vue";
import SiftBEDate from "./SiftBEDate.vue";
import SiftSelects from "./SiftSelects.vue";
import SiftRadio from "./SiftRadio.vue";
import SiftCascader from "./SiftCascader.vue";

export default {
  name: "Sift",
  components: {
    SiftText,
    SiftSelect,
    SiftDate,
    SiftBEDate,
    SiftSelects,
    SiftRadio,
    SiftCascader
  },
  props: ["sift-data"],
  data() {
    return {
      baseUrl: process.env.BASE_URL,

      show: false
    };
  },
  computed: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    getValue() {
      let obj = {};
      // console.log(this.$refs.siftItem);
      this.siftData.forEach((item, index) => {
        if (item.type == "bedate" || item.type == "cascader") {
          const value = this.$refs.siftItem[index].getValue();
          obj = { ...obj, ...value };
        } else {
          obj[item.key] = this.$refs.siftItem[index].getValue();
        }
      });
      return obj;
    },
    showView() {
      this.show = true;
    },
    hideView() {
      this.show = false;
    },
    clearAllValue() {
      // 重置所有value
      for (let i in this.siftData) {
        this.$refs.siftItem[i].clearValue();
      }
    },
    initPage() {
      this.show = false;
      this.$emit("init-page");
    },
    siftType(type) {
      switch (type) {
        case "text":
          return "SiftText";
        case "select":
          return "SiftSelect";
        case "selects":
          return "SiftSelects";
        case "radio":
          return "SiftRadio";
        case "date":
          return "SiftDate";
        case "bedate":
          return "SiftBEDate";
        case "cascader":
          return "SiftCascader";
        default:
          return "";
      }
    }
  },
  watch: {},
  filters: {}
};
</script>

<style scoped>
.sift-btn {
  height: 30px;
  line-height: 30px;
  color: #999999;
  background: #eeeeee;
  border-radius: 15px;
  text-align: center;
}

.sift-view {
  height: 100%;
  width: 100%;
  background: #f8f8f8;
}

.flex-foot-box {
  height: 40px;
  line-height: 40px;
}
</style>
