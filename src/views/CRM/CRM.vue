<template>
  <div class="crm">
    <el-container style="height:100vh;">
      <el-header style="background-color:#367fa9;">
        <div style="font-weight:bold;font-size:30px;color:white;position:reletive;">
          客户关系管理系统
          <el-menu mode="horizontal" background-color='rgb(54, 127, 170)' active-text-color='white' text-color='#ffffff' style="position:absolute;top:0;right:20px;">
            <!-- <el-menu-item index="1">处理中心</el-menu-item>
            <el-menu-item index="2">工作台</el-menu-item> -->
            <el-submenu index='1'>
              <template slot="title">
                <img src="@/assets/logo.png" style="width:20px;" alt=""><span>   dddd</span>
              </template>
              <el-menu-item index="1-1">退出登录</el-menu-item>
              <!-- <el-menu-item>选项2</el-menu-item>
              <el-menu-item>选项3</el-menu-item> -->
              
            </el-submenu>
          </el-menu>


        </div>
        
        
        
      </el-header>
      <el-container>
        <el-aside width="200px" >
          
          <el-menu default-active="1" class="el-menu-vertical-demo" style="text-decoration:none;">
            <el-menu-item index="1">
                <i class="el-icon-setting"></i>
                <span slot="title">
                  <router-link to="/crm/todolist">待办列表</router-link>
                </span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-setting"></i>
              <span slot="title">
                <router-link to="/crm/customerinformationentry">客户信息录入</router-link>
              </span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">
                <router-link to="/crm/customerinformationquery">客户信息查询</router-link>
              </span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">
                <router-link to="/crm/customervisitprocessing">客户来访处理</router-link>
              </span>
              
            </el-menu-item>
            <!-- <el-menu-item index="5">
              <i class="el-icon-setting"></i>
              <span slot="title">客户档案管理</span>
            </el-menu-item> -->
            <el-menu-item index="6">
              <i class="el-icon-setting"></i>
              <span slot="title">
                <router-link to="/crm/customerreturnvisitmanagement">客户回访管理</router-link>
              </span>
            </el-menu-item>
            <el-menu-item index="7">
              <i class="el-icon-setting"></i>
              <span slot="title">
                <router-link to="/crm/financialexpenseinformationentry">财务开支信息录入</router-link>
              </span>
            </el-menu-item>
            <el-menu-item index="8">
              <i class="el-icon-setting"></i>
              <span slot="title">
                <router-link to="/crm/financialExpenseInformation">财务开支日志信息</router-link>                
              </span>
            </el-menu-item>
          </el-menu>


        </el-aside>
        <el-container>
          <el-main>
            <div>
              <router-view/>
            </div>
          </el-main>
          <el-footer>
            <div style="text-align:left;">
              北京瑞光极远数码科技有限公司
            </div>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "crm",
  components: {}
};
</script>

<style lang="less" scoped>
a{
  text-decoration:none;
  color: #303133;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  // text-align: center;
  // line-height: 160px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
