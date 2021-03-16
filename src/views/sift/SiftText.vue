<template>
  <div class="mt10 mb10">
    <p class="pl10 pb5 font-14">{{ sift.label }}</p>
    <van-field v-model="value" :placeholder="sift.placeholder ? sift.placeholder : '请输入' + sift.label" clearable />
  </div>
</template>

<script>
export default {
  name: "SiftText",
  components: {},
  props: ["sift"],
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
    clearValue() {
      this.setValue("");
    },
    setValue(value) {
      this.value = value;
    },
    getValue() {
      return this.value;
    }
  },
  watch: {},
  filters: {}
};
</script>

<style scoped>
</style>
