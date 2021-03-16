<template>
  <section class="cl-f">
    <el-col class="flex-box al-c" :span="col" v-for="(item, index) in sift.selectList" :key="index">
      <span class="mr10 tx-r" :style="{ width: labelWidth + 'em' }">{{ item.label }}</span>
      <el-select class="flex-1" v-model="value[index]" :placeholder="item.placeholder ? item.placeholder : '请选择' + item.label" filterable :disabled="loaidng || item.data.length == 0" @change="changeValue(index)">
        <el-option v-for="(val, key) in item.data" :key="key" :label="val.label" :value="val.value"></el-option>
      </el-select>
    </el-col>
  </section>
</template>

<script>
export default {
  name: "SiftCascader",
  props: ["sift", "col", "label-width"],
  components: {},
  data() {
    return {
      loaidng: false,
      value: []
    };
  },
  computed: {},
  created() {
    for (const item of this.sift.selectList) {
      const value = item.defaultValue ? item.defaultValue : "";
      this.value.push(value);
    }
  },
  mounted() {},
  destroyed() {},
  methods: {
    changeValue(index) {
      if (index + 1 <= this.sift.selectList.length - 1) {
        for (let i = index + 1; i < this.sift.selectList.length; i++) {
          this.sift.selectList[i].data = [];
          this.value[i] = "";
        }
        if (this.value[index] != "") {
          this.$nextTick(() => {
            this.fetchData(index + 1);
          });
        }
      }
    },
    fetchData(index) {
      this.loaidng = true;
      const keyName = this.sift.selectList[index - 1].key;
      let obj = {};
      obj[keyName] = this.value[index - 1];

      this.$http
        .post(this.sift.selectList[index].url, this.$qs.stringify(obj))
        .then(({ data }) => {
          // console.log(data);
          if (data.resCode == 0) {
            this.sift.selectList[index].data = data.resData.data;
            this.value[index] = data.resData.defaultValue;
          }
          this.loaidng = false;
        })
        .catch(() => {
          this.loaidng = false;
        });
    },
    getValue() {
      let obj = {};
      this.sift.selectList.forEach((item, index) => {
        obj[item.key] = this.value[index];
      });
      return obj;
    }
  },
  watch: {},
  filters: {}
};
</script>

<style scoped>
</style>
