<template>
  <div>
    <van-nav-bar title="标题" left-arrow @click-left="back" />
    <div class="main">
      <div class="imgs">
        <img :src="'http://localhost:3000' + detil.imgurl" alt />
      </div>
      <div class="detil">
        <p>{{detil.title}}</p>
        <p>￥{{detil.price}}</p>
      </div>
      <div>
        <van-tabs v-model="activeName">
          <van-tab title="商品详情" name="a">商品详情</van-tab>
          <van-tab title="买家口碑" name="b">买家口碑</van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="footer">
      <van-goods-action>
        <van-goods-action-icon :text="'￥'+ detil.price" />
        <van-goods-action-button type="warning" text="加入购物车" @click="showProps" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
    <props :show="show" @hide="hide" :detil="detil"></props>
  </div>
</template>

<script>
import props from "../components/detil/props";
export default {
  data() {
    return {
      activeName: "a",
      detil: "",
      show: false
    };
  },
  components: {
    props
  },
  methods: {
    hide(bol) {
      this.show = bol;
    },
    showProps() {
      this.show = true;
    },
    back() {
      this.$router.back();
    }
  },
  created() {
    console.log(this);
    let id = this.$route.query.id;
    this.$http.get("/api/goodsinfo?id=" + id).then(res => {
      console.log(res);
      this.detil = res.data.data;
    });
  }
};
</script>

<style scoped>
</style>