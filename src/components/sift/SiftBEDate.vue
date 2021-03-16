<template>
  <el-col class="flex-box al-c" :span="col * 2">
    <span class="mr10 tx-r" :style="{ width: labelWidth + 'em' }">{{ sift.label }}</span>
    <el-date-picker class="flex-1" v-model="beginDate" type="date" placeholder="开始时间" format="yyyy-MM-dd" value-format="timestamp" :picker-options="beginOption" @change="changeValue"></el-date-picker>
    <span class="ml10 mr10">至</span>
    <el-date-picker class="flex-1" v-model="endDate" type="date" placeholder="开始时间" format="yyyy-MM-dd" value-format="timestamp" :picker-options="endOption" @change="changeValue"></el-date-picker>
  </el-col>
</template>

<script>
export default {
  name: "SiftBEDate",
  props: ["sift", "col", "label-width"],
  components: {},
  data() {
    return {
      beginDate: null,
      endDate: null,

      beginOption: {
        disabledDate: time => {
          if (
            (this.sift.min && time < this.sift.min) ||
            (this.sift.max && time > this.sift.max) ||
            (this.endDate && time > this.endDate)
          ) {
            return true;
          }
          return false;
        }
      },
      endOption: {
        disabledDate: time => {
          if (
            (this.sift.min && time < this.sift.min) ||
            (this.sift.max && time > this.sift.max) ||
            (this.beginDate && time < this.beginDate)
          ) {
            return true;
          }
          return false;
        }
      }
    };
  },
  computed: {},
  created() {
    if (this.sift.defaultValue) {
      const date = this.sift.defaultValue.split(",");
      this.beginDate = date[0];
      this.endDate = date[1];
    }
  },
  mounted() {},
  destroyed() {},
  methods: {
    setValue(value) {
      if (typof(value) == "string") {
        const date = value.split(",");
        this.beginDate = date[0];
        this.endDate = date[1];
      } else if (typeof obj == "object" && obj.constructor == Array) {
        this.beginDate = value[0];
        this.endDate = value[1];
      }
    },
    getValue() {
      const keyName = this.sift.key.split(",");
      const obj = {};
      obj[keyName[0]] = this.beginDate ? this.beginDate : null;
      obj[keyName[1]] = this.endDate ? this.endDate + 86399000 : null;
      return obj;
    },
    changeValue() {
      if (
        (this.beginDate && this.endDate) ||
        (!this.beginDate && !this.endDate)
      ) {
        this.$emit("change");
      }
    }
  },
  watch: {},
  filters: {}
};
</script>

<style scoped>
</style>
