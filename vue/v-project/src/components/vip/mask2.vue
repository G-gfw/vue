<template>
  <div>
    <el-form ref="form" label-width="80px">
      <el-form-item label="会员">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="sure">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ""
    };
  },
  methods: {
    sure() {
      let username = this.username;
      if (this.type == "编辑") {
        this.$http
          .post("/api/memberedit", {
            id: this.memberId,
            username: username,
            status: 2
          })
          .then(res => {
            console.log(res);
            if (res.data.status == 1) {
              this.$emit("hide");
              this.$emit("getList");
            }
          });
      }
    }
  },
  created() {
    console.log(this.memberId);
    if (this.memberId) {
      this.$http.get("/api/memberinfo?id=" + this.memberId).then(res => {
        console.log(res);
        if (res.data.status == 1) {
          this.username = res.data.username;
        }
      });
    }
  },
  props: ["memberId", "type"],
  watch: {
    type(newVal) {
      if (newVal == "编辑") {
        if (this.memberId) {
          this.$http.get("/api/memberinfo?id=" + this.memberId).then(res => {
            console.log(res);
            if (res.data.status == 1) {
              this.username = res.data.username;
            }
          });
        }
      } else {
        this.username = "";
      }
    },
    memberId() {
      this.$http.get("/api/memberinfo?id=" + this.memberId).then(res => {
        console.log(res);
        if (res.data.status == 1) {
          this.username = res.data.username;
        }
      });
    }
  }
};
</script>

<style scoped>
</style>