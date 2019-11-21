<template>
  <div>
      <div id="myecharts" ref="echart"></div>
  </div>
</template>

<script>
export default {
  data() {
    return{
        list:[],
        arr: []
    }
  },
  created() {
    this.$http.get("/api/goodslist").then(res => {
      this.list = res.data.data;
      let arr = [];
      this.list.forEach(item => {
        arr.push(item.price);
      });
      this.arr = arr;
      this.$nextTick(() => {
        let myEchart = this.$echarts.init(this.$refs.echart);
        myEchart.setOption({
          title: {
            text: "vue中的echarts"
          },
          tooltip: {},
          legend: {
            data: ["价格"]
          },
          xAxis: {
            data: ["小米", "红米", "电脑"]
          },
          yAxis: {},
          series: {
            name: "价格",
            type: "bar",
            data: this.arr
          }
        });
      });
    });
  }
};
</script>

<style scoped>
#myecharts{
    width: 600px;
    height: 500px;
}
</style>