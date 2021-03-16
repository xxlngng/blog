<template>
  <el-col class="flex-box al-c" :span="col">
    <span class="mr10 tx-r" :style="{ width: labelWidth + 'em' }">{{ sift.label }}</span>
    <el-date-picker class="flex-1" v-model="value" type="date" :placeholder="sift.placeholder ? sift.placeholder : '请选择' + sift.label" format="yyyy-MM-dd" value-format="timestamp" :picker-options="option" @change="changeValue"></el-date-picker>
  </el-col>
</template>

<script>
export default {
  name: "SiftDate",
  props: ["sift", "col", "label-width"],
  components: {},
  data() {
    return {
      value: null,

      option: {
        disabledDate: time => {
          if (
            (this.sift.min && time < this.sift.min) ||
            (this.sift.max && time > this.sift.max)
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
    this.sift.defaultValue ? (this.value = this.sift.defaultValue) : null;
  },
  mounted() {},
  destroyed() {},
  methods: {
    setValue(value) {
      this.value = value;
    },
    getValue() {
      return this.value;
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
