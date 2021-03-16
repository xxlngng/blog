<template>
  <div class="mt10 mb10">
    <p class="pl10 pb5 font-14">{{ sift.label }}</p>
    <van-cell-group>
      <van-field :value="bValue | filterDate('yyyy-MM-dd')" label="开始时间" placeholder="请选择开始时间" readonly @click="bShow = true">
        <van-icon slot="right-icon" name="clear" color="#cccccc" v-show="bValue" @click.stop="clearBValue" />
      </van-field>
      <van-field :value="eValue | filterDate('yyyy-MM-dd')" label="结束时间" placeholder="请选择开始时间" readonly @click="eShow = true">
        <van-icon slot="right-icon" name="clear" color="#cccccc" v-show="eValue" @click.stop="clearEValue" />
      </van-field>
    </van-cell-group>

    <van-popup v-model="bShow" position="bottom">
      <van-datetime-picker v-model="bDate" type="date" :min-date="bMin" :max-date="bMax" @confirm="setBValue" @cancel="bShow = false" />
    </van-popup>
    <van-popup v-model="eShow" position="bottom">
      <van-datetime-picker v-model="eDate" type="date" :min-date="eMin" :max-date="eMax" @confirm="setEValue" @cancel="eShow = false" />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "SiftBEDate",
  components: {},
  props: ["sift"],
  data() {
    return {
      bDate: new Date(),
      eDate: new Date(),

      bValue: "",
      eValue: "",

      bShow: false,
      eShow: false,

      bMin: null,
      bMax: null,
      eMin: null,
      eMax: null
    };
  },
  computed: {},
  created() {
    this.bMin = this.sift.min ? new Date(this.sift.min) : new Date(2010, 0, 1);
    this.bMax = this.sift.max
      ? new Date(this.sift.max)
      : new Date(2030, 11, 31);

    this.eMin = this.sift.min ? new Date(this.sift.min) : new Date(2010, 0, 1);
    this.eMax = this.sift.max
      ? new Date(this.sift.max)
      : new Date(2030, 11, 31);

    if (this.sift.defaultValue) {
      const date = this.sift.defaultValue.split(",");

      this.bDate = new Date(Number(date[0]));
      this.eDate = new Date(Number(date[1]));

      this.bValue = this.bDate;
      this.eValue = this.eDate;

      this.eMin = this.bValue;
      this.bMax = this.eValue;
    }
  },
  mounted() {},
  destroyed() {},
  methods: {
    setBValue(date) {
      this.bValue = date;
      this.bShow = false;

      this.eMin = this.bValue;
    },
    setEValue(date) {
      this.eValue = date;
      this.eShow = false;

      this.bMax = this.eValue;
    },
    clearBValue() {
      this.bValue = "";
      this.eMin = this.sift.min
        ? new Date(this.sift.min)
        : new Date(2010, 0, 1);
    },
    clearEValue() {
      this.eValue = "";
      this.bMax = this.sift.max
        ? new Date(this.sift.max)
        : new Date(2030, 11, 31);
    },
    clearValue() {
      this.clearBValue();
      this.clearEValue();
    },
    getValue() {
      const keyName = this.sift.key.split(",");
      const obj = {};
      let bv = this.bValue;
      obj[keyName[0]] = bv ? bv.getTime() : "";
      obj[keyName[1]] = bv ? bv.getTime() + 86399000 : "";
      return obj;
    }
  },
  watch: {},
  filters: {}
};
</script>

<style scoped>
</style>
