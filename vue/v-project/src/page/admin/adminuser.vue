<template>
  <div>
    <el-container>
      <el-header>后台管理系统</el-header>
      <el-container>
        <el-aside width="200px">
          <el-col>
            <el-menu default-active="2" class="el-menu-vertical-demo" router>
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-suitcase"></i>
                  <span>用户管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/adminuser/admin"><i class="el-icon-message"></i><span>管理员</span></el-menu-item>
                  <el-menu-item index="/adminuser/vip"><i class="el-icon-user"></i><span>会员</span></el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>商品管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/adminuser/classifys"><i class="el-icon-menu"></i><span>分类管理</span></el-menu-item>
                  <el-menu-item index="/adminuser/goods"><i class="el-icon-menu"></i><span>商品管理</span></el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span>图片管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/adminuser/banner"><i class="el-icon-menu"></i><span>轮播图</span></el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>