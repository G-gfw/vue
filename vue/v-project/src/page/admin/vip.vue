<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" width="50" label="编号"></el-table-column>
      <el-table-column prop="username" label="用户名" width="180"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="edit(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <mask2 :type="type" :detail="detail._id" @hide="hide" @getList="getList"></mask2>
    </el-dialog>
  </div>
</template>

<script>
import mask2 from "../../components/vip/mask2";
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      detail: "",
      type: ""
    };
  },
  components: {
    mask2
  },
  methods: {
    hide() {
      this.dialogVisible = false;
    },
    edit(row) {
      this.type = "编辑";
      console.log(row);
      this.detail = row;
      this.dialogVisible = true;
    },
    getList() {
      this.$http.get("/api/memberlist").then(res => {
        console.log(res);
        this.tableData = res.data.data;
      });
    }
  },
  created() {
    this.getList();
  }
};
</script>

<style scoped>
</style>