<template>
  <div class="mt10 mb10">
    <p class="pl10 pb5 font-14">{{ sift.label }}</p>
    <van-field :value="label" :placeholder="sift.placeholder ? sift.placeholder : '请选择' + sift.label" readonly @click="show = true">
      <van-icon slot="right-icon" name="clear" color="#cccccc" v-show="value" @click.stop="clearValue" />
    </van-field>
    <van-popup v-model="show" position="bottom" :lazy-render="false">
      <van-picker ref="picker" show-toolbar :columns="sift.data" value-key="label" @cancel="show = false" @confirm="selectChange" />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "SiftSelect",
  components: {},
  props: ["sift"],
  data() {
    return {
      show: false,

      label: "",
      value: ""
    };
  },
  computed: {},
  created() {},
  mounted() {
    if (this.sift.defaultValue) {
      this.value = this.sift.defaultValue;
      for (const item of this.sift.data) {
        if (item.value == this.value) {
          this.label = item.label;
          this.$refs.picker.setValues([item.label]);
          break;
        }
      }
    }
  },
  destroyed() {},
  methods: {
    selectChange(item) {
      // console.log(item);
      this.value = item.value;
      this.label = item.label;

      this.show = false;
    },
    clearValue() {
      this.label = "";
      this.value = "";

      this.$refs.picker.setValues([this.sift.data[0]]);
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
