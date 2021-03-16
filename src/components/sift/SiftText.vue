<template>
  <el-col class="flex-box al-c" :span="col">
    <span class="mr10 tx-r" :style="{ width: labelWidth + 'em' }">{{ sift.label }}</span>
    <el-input class="flex-1" v-model="value" :placeholder="sift.placeholder ? sift.placeholder : '请输入' + sift.label" clearable @keyup.enter.native="changeValue" @clear="changeValue"></el-input>
  </el-col>
</template>

<script>
export default {
  name: "SiftText",
  props: ["sift", "col", "label-width"],
  components: {},
  data() {
    return {
      value: ""
    };
  },
  computed: {},
  created() {
    this.value = this.sift.defaultValue ? this.sift.defaultValue : "";
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
      this.$emit("change", true);
    }
  },
  watch: {},
  filters: {}
};
</script>

<style scoped>
</style>
