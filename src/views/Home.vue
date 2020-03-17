<template>
  <div class="centainer">
    <div class="cont cont1">
      <div class="co-one">
        <div class="info">
          <img class="img-s" src="../assets/images/学习.jpg" alt="学习" />
          <div class="nav-bar">
            <a href="#artical">文章</a>
            <a href="#artical">随笔</a>
            <a href="#artical">友人</a>
          </div>
        </div>
        <div class="one-bo"></div>
      </div>
      <div class="co-show">
        <Clock></Clock>
      </div>
    </div>
    <div class="cont cont2">
      <div class="wrap">
        <Article></Article>
      </div>
    </div>
    <div class="cont cont3">3</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import $ from "@/assets/jq/jquery-1.11.0.min.js";
import "@/assets/jq/l-by-l.min.js";
import Clock from "@/components/clock/Clock";
import Article from "@/components/article/Article"
// $(".one-bo").lbyl({
//     content: "Lorem ipsum dolor sit amet..."
// });

export default {
  name: "Home",
  components: { Clock, Article },
  mounted() {
    this.showText();
  },
  methods: {
    showText() {
      $(".one-bo").lbyl({
        content:
          "朦胧的月色正浓，星光与静夜默言无声，一个人的夜，一个人的惆怅心思。隐约着怎样面对一份不确定的爱感情的抉择，陷入爱里的不能自拔的人，没有了智商，低的可怜，痴痴的，一个人一旦遇上且喜欢的人，就会痴心，傻傻的，乱了方寸，无所适从，做什么都手足无措。爱上你，总是盼望你出现，一旦有你的身影，却又胆怯不敢打扰，所以越是想接近，却想逃离，越是想逃离，越想接近，转身背过脸去，却越清晰的看见，你的影子，从各个角度，从镜子反射过来你的身影，一个人活在一个人的影子里。如果，时间可以证明一切，是不是如我想象的你，是不是爱着我，给我勇气，告诉我，让我有信心不再闪躲，好敢于面对你，和你在一起，默默的相伴，默默的欢喜。红尘陌上，花开几许，你可以选择爱或不爱我，而我只能选择爱或更爱你！",
        speed: 100,
        type: "show"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.centainer {
  .cont {
    min-width: 1200px;
    background-color: #555;
    background-attachment: fixed;
    background-size: cover;
    background-position: bottom;
    overflow: hidden;
  }
  .cont1 {
    background-image: url(../assets/images/1.jpg);
    .co-one {
      min-height: 500px;
      background-color: rgba(0, 0, 0, 0.4);
      position: relative;
      .info {
        width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        // text-align: center;
        .img-s {
          width: 80px;
          height: 80px;
          border-radius: 50%;
        }
        .nav-bar {
          width: 500px;
          >a {
            padding: 10px 15px;
          }
        }
      }
      .one-bo {
        position: absolute;
        left: 50%;
        top: 150px;
        width: 700px;
        // height: 334px;
        border: 3px solid #fff;
        border-radius: 8px;
        margin-left: -350px;
        font-family: "caoshu";
        color: #fff;
        text-indent: 2em;
        font-size: 20px;
        padding: 10px;
        font-weight: 600;
      }
    }
    .co-show {
      min-height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .cont2 {
    min-height: 700px;
    width: 100%;
    background-image: url(../assets/images/2.jpg);
    .wrap {
      width: 1000px;
      height: 700px;
      margin: 0 auto;
      // background-color: rgba(0, 0, 0, 0.3);
      // opacity: 0.5;
    }
  }
  .cont3 {
    min-height: 700px;
    width: 100%;
    background-image: url(../assets/images/3.jpg);
  }
}</style
>>
