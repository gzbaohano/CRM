<template>

    <div>
        <el-breadcrumb separator="/" style="margin-bottom:20px;">
            <el-breadcrumb-item>客户信息查询</el-breadcrumb-item>
        </el-breadcrumb>
        <el-input placeholder="请输入内容" v-model="searchQuery">
            <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
        <el-table :data="tableData" stripe style="width: 100%;margin-top:20px;">
            <el-table-column prop="danwei" label="客户单位" width="280"></el-table-column>
            <el-table-column prop="xingming" label="客户姓名" width="180"></el-table-column>
            <el-table-column prop="dianhua" label="联系电话" width="180"></el-table-column>
            <el-table-column prop="fuzeren" label="负责人"></el-table-column>
        </el-table>


    </div>
</template>

<script>
export default {
  name: "customerinformationquery",
  data() {
    return {
      searchQuery: "",
      value: "",
      tableData: [
        {
          danwei: "北京瑞光极远数码科技有限公司",
          xingming: "王有才",
          dianhua: "13740673528",
          fuzeren: "王大雷"
        },
        {
          danwei: "北京瑞光极远数码科技有限公司",
          xingming: "马丁",
          dianhua: "18249302854",
          fuzeren: "王大雷"
        },
        {
          danwei: "北京瑞光极远数码科技有限公司",
          xingming: "王建国",
          dianhua: "18145038576",
          fuzeren: "王大雷"
        }
      ]
    };
  },
  methods: {
    search() {}
  },
  computed: {
    // tableDataComputed: function() {
    //   for (i in tableData) {
    //     for (y in tableData[i]) {
    //         if (tableData[i][y].indexOf(searchQuery)===-1) {
    //             alert("搜索不到")
    //         } else {
                
    //         }
    //       console.log(tableData[i][y]);
    //     }
    //   }
    // }
  }
};
</script>

<style>
</style>
