<template>
  <el-col class="flex-box al-c mb10" :span="24">
    <span class="mr10 tx-r" :style="{ 'width': labelWidth + 'em', 'margin-bottom': '5px' }">{{ sift.label }}</span>
    <div class="flex-1 cl-f">
      <span class="in-block cu-p sift-radio-item" :class="value === item.value ? 'active' : null" v-for="(item, index) in sift.data" :key="index" @click="clickItem(item)">{{ item.label }}</span>
    </div>
  </el-col>
</template>

<script>
export default {
  name: "SiftRadio",
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
    clickItem(item) {
      this.setValue(item.value);
      this.$nextTick(() => {
        this.$emit("change");
      });
    }
  },
  watch: {},
  filters: {}
};
</script>

<style scoped>
.sift-radio-item {
  margin: 0 10px 5px 0;
  padding: 5px 1em;
  border-radius: 1.5em;
  border: 1px solid #ccc;
}

.sift-radio-item.active {
  border: 1px solid rgb(68, 116, 194);
  background: rgb(68, 116, 194);
  color: #fff;
}
</style>
