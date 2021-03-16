<template>
  <el-col class="flex-box al-c" :span="col">
    <span class="mr10 tx-r" :style="{ width: labelWidth + 'em' }">{{ sift.label }}</span>
    <el-select class="flex-1" v-model="value" :placeholder="sift.placeholder ? sift.placeholder : '请选择' + sift.label" clearable filterable @change="changeValue">
      <el-option v-for="(item, index) in sift.data" :key="index" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </el-col>
</template>

<script>
export default {
  name: "SiftSelect",
  components: {},
  props: ["sift", "col", "label-width"],
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
      this.$emit("change");
    }
  },
  watch: {},
  filters: {}
};
</script>

<style scoped>
</style>
