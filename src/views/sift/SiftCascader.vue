<template>
  <div class="mt10 mb10">
    <van-cell-group>
      <van-field :class="item.data.length == 0 ? 'bg-gray' : ''" v-for="(item, index) in sift.selectList" :key="index" :value="label[index]" :label="item.label" :placeholder="item.placeholder ? item.placeholder : '请选择' + item.label" readonly @click="showPicker(index)">
        <van-icon slot="right-icon" name="arrow-down" color="#cccccc" />
      </van-field>
    </van-cell-group>

    <van-popup v-for="(item, index) in sift.selectList" :key="index" v-model="showIndex[index]" position="bottom">
      <van-picker ref="picker" show-toolbar :columns="item.data" value-key="label" @cancel="hidePicker(index)" @confirm="selectChange" />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "SiftCascader",
  components: {},
  props: ["sift"],
  data() {
    return {
      showIndex: [],
      index: [],
      label: [],
      value: [],

      key: 0
    };
  },
  computed: {},
  created() {
    this.clearValue();
  },
  mounted() {},
  destroyed() {},
  methods: {
    hidePicker(index) {
      this.$set(this.showIndex, index, false);
    },
    showPicker(index) {
      // console.log(index);
      this.key = index;
      this.$set(this.showIndex, index, true);
    },
    selectChange(item) {
      this.$set(this.showIndex, this.key, false);
      this.$set(this.index, this.key, item.label);
      this.$set(this.label, this.key, item.label);
      this.$set(this.value, this.key, item.value);

      if (this.key + 1 <= this.sift.selectList.length - 1) {
        for (let i = this.key + 1; i < this.sift.selectList.length; i++) {
          this.sift.selectList[i].data = [];
          this.$set(this.index, i, "");
          this.$set(this.label, i, "");
          this.$set(this.value, i, "");
        }
        if (this.value[this.key] != "") {
          this.$nextTick(() => {
            this.fetchData(this.key + 1);
          });
        }
      }
    },
    fetchData(index) {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0
      });

      const keyName = this.sift.selectList[index - 1].key;
      let obj = {};
      obj[keyName] = this.value[index - 1];

      this.$http
        .post(this.sift.selectList[index].url, this.$qs.stringify(obj))
        .then(({ data }) => {
          // console.log(data);
          if (data.resCode == 0) {
            this.sift.selectList[index].data = data.resData.data;
            if (data.resData.defaultValue) {
              for (let i in data.resData.data) {
                if (data.resData.data[i].value == data.resData.defaultValue) {
                  this.index[index] = Number(i);
                  this.value[index] = data.resData.defaultValue;
                  this.label[index] = data.resData.data[i].label;
                  break;
                }
              }
            }
          }
          this.$toast.clear();
        })
        .catch(() => {
          this.$toast.clear();
        });
    },
    clearValue() {
      this.showIndex = [];
      this.index = [];
      this.label = [];
      this.value = [];
      for (let i in this.sift.selectList) {
        this.showIndex.push(false);
        this.index.push("");
        this.label.push("");
        this.value.push("");
      }

      this.sift.selectList.forEach((item, index) => {
        if (index > 0) {
          item.data = [];
        }
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
.bg-gray {
  background: #f0f0f0;
}
</style>
