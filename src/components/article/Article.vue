<template>
  <div class="art">
    <!-- <h2>wenzhang</h2> -->
    <div class="co-art" @click="fetchList">

      <div class="ar-item"  v-for="(item, index) in 9" :key="index">
        <a class="title" href="#">JavaScript拖拽效果</a>
        <div class="det">
          <div class="author">
            <img class="img-au" src="../../assets/images/au.jpg" />
            <p class="name">许先</p>
          </div>
          <div class="icon">
            <span><i class="el-icon-edit"></i>11</span>
            <span><i class="el-icon-edit"></i>11</span>
            <span><i class="el-icon-edit"></i>11</span>
          </div>
        </div>
      </div>
    </div>
    <div class="pager-box">
      
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    fetchList() {
      this.$http.get("/blog/articels").then(({data}) => {
        console.log(data);
      })
    }
  }
};
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
.art {
  width: 1000px;
  height: 700px;
  margin: 0 auto;
  // background-color: rgba(0, 0, 0, 0.3);
  // opacity: 0.5;

  // width: 100%;
  .co-art {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    .ar-item {
      // width: 100%;
      padding: 10px 20px;
      border-bottom: 2px solid #ccc;
      background-color: rgba(255, 255, 255, 0.5);
      // border-radius: 5px;
      &:hover {
        background-color: rgba(169, 150, 150, 0.5);
      }
      .title {
        height: 30px;
        font-size: 20px;
        font-weight: 600;
        color: #333;
      }
      .det {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        // text-align: center;
        align-items: center;
        .author {
          display: flex;
          flex-direction: row;
          align-items: center;
          // margin-top: 10px;
          .img-au {
            width: 20px;
            height: 20px;
            border-radius: 50%;
          }
          .name {
            font-size: 14px;
            color: #131313;
            height: 20px;
            line-height: 20px;
            margin-left: 10px;
          }
        }
        .icon {
          > span {
            font-size: 14px;
            color: #131313;
            margin: 0 10px;
          }
        }
      }
    }
  }
}
</style>
