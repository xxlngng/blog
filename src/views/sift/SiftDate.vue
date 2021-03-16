<template>
  <div class="mt10 mb10">
    <p class="pl10 pb5 font-14">{{ sift.label }}</p>
    <van-field :value="value | filterDate('yyyy-MM-dd')" :placeholder="sift.placeholder ? sift.placeholder : '请选择' + sift.label" readonly @click="show = true">
      <van-icon slot="right-icon" name="clear" color="#cccccc" v-show="value" @click.stop="clearValue" />
    </van-field>
    <van-popup v-model="show" position="bottom" :lazy-render="false">
      <van-datetime-picker v-model="date" type="date" :min-date="min" :max-date="max" @confirm="setDate" @cancel="show = false" />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "SiftDate",
  components: {},
  props: ["sift"],
  data() {
    return {
      show: false,

      value: "",
      date: new Date(),

      min: null,
      max: null
    };
  },
  computed: {},
  created() {
    if (this.sift.defaultValue) {
      this.date = new Date(this.sift.defaultValue);
      this.value = this.date;
    }

    this.min = this.sift.min ? new Date(this.sift.min) : new Date(2010, 0, 1);
    this.max = this.sift.max ? new Date(this.sift.max) : new Date(2030, 11, 31);
  },
  mounted() {},
  destroyed() {},
  methods: {
    setDate(date) {
      this.value = date;

      this.show = false;
    },
    clearValue() {
      this.value = "";
    },
    getValue() {
      return this.value ? this.value.getTime() : this.value;
    }
  },
  watch: {},
  filters: {}
};
</script>

<style scoped>
</style>
