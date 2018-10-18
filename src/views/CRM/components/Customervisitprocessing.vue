<template>
    <div>
        <el-breadcrumb separator="/" style="margin-bottom:20px;">
            <el-breadcrumb-item>客户来访处理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form ref="form" :model="form" label-width="110px">
            <el-form-item label="用户单位名称">
                <el-input v-model="form.a"></el-input>
            </el-form-item>
            <el-form-item label="联系人姓名">
                <el-input v-model="form.b"></el-input>
            </el-form-item>
            <el-form-item label="职务">
                <el-input v-model="form.c"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
                <el-input v-model="form.d"></el-input>
            </el-form-item>
            <el-form-item label="行业背景">
                <el-input v-model="form.e"></el-input>
            </el-form-item>
            <el-form-item label="本次咨询时间">
                <el-input v-model="form.f"></el-input>
            </el-form-item>         
              <el-form-item label="咨询内容">
                <el-input type="textarea" v-model="form.g"></el-input>
            </el-form-item>
            <el-form-item label="方案文档链接">
                <el-input v-model="form.h"></el-input>
            </el-form-item>
            <el-form-item label="报价">
                <el-input v-model="form.i"></el-input>
            </el-form-item>
            <el-form-item label="本次处理人">
                <el-input v-model="form.j"></el-input>
            </el-form-item>
            <el-form-item label="处理时间">
                <el-input v-model="form.k"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">处理</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
name: "customervisitprocessing",
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
}
</script>

<style>

</style>
