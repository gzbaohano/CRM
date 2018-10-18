<template>

    <div>
        <el-breadcrumb separator="/" style="margin-bottom:20px;">
            <el-breadcrumb-item>客户回访管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-input placeholder="请输入内容" v-model="searchQuery">
            <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
        <el-table :data="tableData" stripe style="width: 100%;margin-top:20px;">
            <el-table-column prop="xingming" label="客户姓名" width="180"></el-table-column>
            <el-table-column prop="leixing" label="客户类型" width="180"></el-table-column>
            <el-table-column prop="julishijian" label="距上次联系时间"></el-table-column>
            <el-table-column prop="caozuo" label="操作"></el-table-column>
        </el-table>


    </div>
</template>

<script>
export default {
  name: "customerreturnvisitmanagement",
  data() {
    return {
      searchQuery: "",
      value: "",
      tableData: [
        {
          leixing: "新客户",
          xingming: "王有才",
          julishijian: "13740673528",
          caozuo: "电话回访"
        },
        {
          leixing: "老客户",
          xingming: "马丁",
          julishijian: "18249302854",
          caozuo: "电话回访"
        },
        {
          leixing: "新客户",
          xingming: "王建国",
          julishijian: "18145038576",
          caozuo: "电话回访"
        }
      ]
    };
  },
  methods: {
    search() {}
  },
  computed: {
    
  }
};
</script>

<style>
</style>
