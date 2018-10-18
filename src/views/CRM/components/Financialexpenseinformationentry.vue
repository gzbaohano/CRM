<template>
    <div>
        <el-breadcrumb separator="/" style="margin-bottom:20px;">
            <el-breadcrumb-item>财务开支信息录入</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form ref="form" :model="form" label-width="110px">
            <el-form-item label="发送人">
                <el-input v-model="form.a"></el-input>
            </el-form-item>
            <el-form-item label="抄送">
                <el-select v-model="form.b" placeholder="请选择">
                    <el-option label="王总" value="王总"></el-option>
                    <el-option label="于总" value="于总"></el-option>
                    <el-option label="刘总" value="刘总"></el-option>
                    <el-option label="王会计" value="王会计"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="开支类型">
                <el-input v-model="form.c"></el-input>
            </el-form-item>
            <el-form-item label="开支金额">
                <el-input v-model="form.d"></el-input>
            </el-form-item>
              <el-form-item label="开支详细信息">
                <el-input type="textarea" v-model="form.g"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  name: "financialexpenseinformationentry",
  data() {
    return {
      form: {
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
        f: "",
        g: "",
        h: "",
        i: "",
        j: "",
        k: ""
      }
    };
  }
};
</script>

<style>
</style>
