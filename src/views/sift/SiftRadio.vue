<template>
  <div>
    <div class="mt10 mb10">
      <p class="pl10 pb5 font-14">{{ sift.label }}（单选）</p>
      <div class="pt10 pb10 pl10 pr10 flex-box bg-w sift-selects">
        <div class="sift-selects-item" :class="value == item.value ? 'active' : ''" v-for="(item, index) in sift.data" :key="index" @click="changeItem(item)">{{ item.label }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiftRadio",
  components: {},
  props: ["sift"],
  data() {
    return {
      value: ""
    };
  },
  computed: {},
  created() {
    if (this.sift.defaultValue) {
      this.value = this.sift.defaultValue;
    }
  },
  mounted() {},
  destroyed() {},
  methods: {
    changeItem(item) {
      this.value = item.value;
    },
    clearValue() {
      this.value = "";
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
.sift-selects {
  flex-wrap: wrap;
}

.sift-selects-item {
  margin: 5px 4px;
  padding: 5px 14px;
  background: #cccccc;
  border-radius: 20px;
}

.sift-selects-item.active {
  background: #0081ff;
  color: #ffffff;
}
</style>
