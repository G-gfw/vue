<template>
  <div class="list">
    <div class="left">
      <ul>
        <li
          v-for="(item,index) in classifyList"
          :key="item._id"
          :class="{'active':index == ind}"
          @click="changeTab(index)"
        >{{item.title}}</li>
      </ul>
    </div>
    <div class="right">
      <ul>
        <li v-for="(item) in list" :key="item._id">
          <img :src="'http://localhost:3000' + item.imgurl" @click="alist(item._id)"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ind: 0,
      classifyList: [],
      list: [],
      data: null
    };
  },
  methods: {
    changeTab(i) {
      this.ind = i;
      this.list = this.data[i].children;
    },
    alist(id){
      console.log(id)
      this.$router.push('/detil?id='+id)
    }
  },
  created() {
    this.$http.get("/api/catelist").then(res => {
      console.log(res);
      this.classifyList = res.data.data;
    });
    this.$http.get("/api/categoods").then(res => {
      console.log(res);
      this.data = res.data.data;
      this.list = res.data.data[0].children;
    });
  }
};
</script>

<style lang="less" scoped>
.list {
  display: flex;
  .left {
    width: 100px;
    ul {
      li {
        height: 40px;
        text-align: center;
        line-height: 40px;
        background-color: #ff9a07;
        &.active {
          color: red;
        }
      }
    }
  }
  .right {
    flex: 1;
    padding-left: 20px;
    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        width: 45%;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>