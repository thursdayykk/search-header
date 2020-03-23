<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <searchHeader>
          <search-form-item label="年龄">
            <el-input v-model="input" placeholder="请输入"></el-input>
          </search-form-item>
          <search-form-item label="姓名">
              <el-input v-model="input" placeholder="请输入"></el-input>
          </search-form-item>
          <search-form-item   label="物流编号">
              <el-input v-model="input" placeholder="请输入"></el-input>
          </search-form-item >
          <search-form-item label="状态">
              <el-select v-model="value" placeholder="请选择">
                  <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
          </search-form-item>
          <search-form-item :max="true" label="宣讲日期">
              <el-date-picker
                  v-model="value2"
                  type="datetimerange"
                  range-separator="~"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
              </el-date-picker>
          </search-form-item >
          <search-form-item label="出生日期">
              <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="选择日期">
              </el-date-picker>
          </search-form-item >
          <template slot="todobtns">
            <el-button  type="primary" icon="el-icon-search"  size="mini" @click="search"></el-button>
            <el-button icon="el-icon-refresh" size="mini" @click="clear"></el-button>
          </template>
        </searchHeader>
        <el-button @click="dialogVisible = true" type="primary" size="mini">在内部使用</el-button>
        <el-dialog
              title="提示"
              :visible.sync="dialogVisible"
              width="50%"
              :before-close="handleClose">
            <searchHeader>
          <search-form-item label="年龄">
            <el-input v-model="input" placeholder="请输入"></el-input>
          </search-form-item>
          <search-form-item label="姓名">
              <el-input v-model="input" placeholder="请输入"></el-input>
          </search-form-item>
          <search-form-item   label="物流编号">
              <el-input v-model="input" placeholder="请输入"></el-input>
          </search-form-item >
          <search-form-item label="状态">
              <el-select v-model="value" placeholder="请选择">
                  <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
          </search-form-item>
          <search-form-item :max="true" label="宣讲日期">
              <el-date-picker
                  v-model="value2"
                  type="datetimerange"
                  range-separator="~"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
              </el-date-picker>
          </search-form-item >
          <search-form-item label="出生日期">
              <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="选择日期">
              </el-date-picker>
          </search-form-item >
        </searchHeader>
          </el-dialog>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

import searchHeader from "@/components/searchHeader/index.vue"
import searchFormItem from "@/components/searchHeader/components/searchFormItem.vue"
export default {
  name: 'App',
  components:{ searchHeader,searchFormItem },
  data(){
    return {
      input:'',
      value1: '',
      value2:'',
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      value: '',
      dialogVisible: false
    }
  },
  methods:{
    handleClose(done) {
      done()
      // this.$confirm('确认关闭？')
      //   .then(_ => {
      //     done();
      //   })
      //   .catch(_ => {});
    },
    search(){},
    clear(){}
  }
}
</script>

<style>
  body,html,#app{
    margin:0;
    height:100%;
  }
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #fff;
    color: #333;
    padding:0px;
  }
  
  body > .el-container {
    /* margin-bottom: 40px; */
    height:100%;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
