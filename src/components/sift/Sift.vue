<template>
  <el-row :gutter="10">
    <component class="mb10" :ref="'siftComp'" :is="siftName(item.type)" :col="col" :sift="item" :label-width="labelWidth" v-for="(item, index) in siftData" :key="index" @change="changeValue"></component>
    <slot />
  </el-row>
</template>

<script>
import SiftText from "@/components/sift/SiftText";
import SiftSelect from "@/components/sift/SiftSelect";
import SiftSelects from "@/components/sift/SiftSelects";
import SiftDate from "@/components/sift/SiftDate";
import SiftBEDate from "@/components/sift/SiftBEDate";
import SiftRadio from "@/components/sift/SiftRadio";
import SiftCascader from "@/components/sift/SiftCascader";

export default {
  name: "Sift",
  components: {
    SiftText,
    SiftSelect,
    SiftSelects,
    SiftDate,
    SiftBEDate,
    SiftRadio,
    SiftCascader
  },
  props: {
    ["sift-data"]: {
      type: Array,
      default: () => {
        return [];
      }
    },
    ["col"]: {
      type: Number,
      default: 6
    }
  },
  data() {
    return {
      labelWidth: 0
    };
  },
  computed: {},
  created() {
    for (const item of this.siftData) {
      if (item.type == "cascader") {
        for (const value of item.selectList) {
          this.labelWidth =
            value.label.length > this.labelWidth
              ? value.label.length
              : this.labelWidth;
        }
      } else {
        this.labelWidth =
          item.label.length > this.labelWidth
            ? item.label.length
            : this.labelWidth;
      }
    }
    this.labelWidth = this.labelWidth + 0.5;
  },
  mounted() {},
  destroyed() {},
  methods: {
    getValue() {
      let obj = {};
      this.siftData.forEach((item, index) => {
        if (item.type == "bedate" || item.type == "cascader") {
          const value = this.$refs.siftComp[index].getValue();
          obj = { ...obj, ...value };
        } else {
          obj[item.key] = this.$refs.siftComp[index].getValue();
        }
      });
      return obj;
    },
    siftName(type) {
      switch (type) {
        case "text":
          return SiftText;
        case "select":
          return SiftSelect;
        case "selects":
          return SiftSelects;
        case "date":
          return SiftDate;
        case "bedate":
          return SiftBEDate;
        case "radio":
          return SiftRadio;
        case "cascader":
          return SiftCascader;
        default:
          break;
      }
    },
    changeValue() {
      this.$emit("change");
    }
  },
  watch: {},
  filters: {}
};
</script>

<style scoped>
</style>
