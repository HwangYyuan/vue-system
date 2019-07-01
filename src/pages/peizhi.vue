<template>
  <div class="peizhi_w">
    <div class="peizhi_t pd-l-10 fz_24">{{title}}</div>
    <div class="bom_title pd-l-10 fz_18">
      {{len_box}}
      <el-select v-model="value" placeholder="请选择" @change="changeVal" :disabled="select_isDisabled">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="mg-t-30 pd-l-10">
      <el-button v-for="(item,index) in fuhao" :key="index" @click="addFuhao(item.value)" :disabled="btn_isDisabled">{{item.value}}</el-button>
    </div>
    <div class="mg-t-30 mg-l-10">
      <el-input
        type="textarea"
        autosize
        size="medium"
        placeholder="请输入内容"
        v-model="computedList"
      ></el-input>
    </div>

    <div class="mg-t-30 mg-l-10">
      <el-button>计算</el-button>
    </div>
  </div>
</template>
<script>
import { Message } from 'element-ui'
export default {
  data() {
    return {
      title: "配置算法",
      len_box: "BOM明细：",
      options: [
        {
          value: "5",
          label: "黄金糕"
        },
        {
          value: "10",
          label: "双皮奶"
        },
        {
          value: "20",
          label: "蚵仔煎"
        },
        {
          value: "25",
          label: "龙须面"
        },
        {
          value: "50",
          label: "北京烤鸭"
        }
      ],
      value: "",
      fuhao: [
        {
          type: "add",
          value: "+"
        },
        {
          type: "reduce",
          value: "-"
        },
        {
          type: "mul",
          value: "*"
        },
        {
          type: "chu",
          value: "/"
        },
        {
          type: "kuohao",
          value: "()"
        }
      ],
      fuhao_type: '',  //获取符号或者数字
      computedList:'',//计算的式子
      push_type: 0, //已点击下拉框1，已点击符号2
      btn_isDisabled:true,//符号按钮是否禁用 false不禁用
      select_isDisabled:false,//下拉框是否禁用 false不禁用
    };
  },
  methods:{
      changeVal(val){
         this.fuhao_type = val;
         this.computedList = this.computedList + Number(this.fuhao_type);
         this.$store.state.peizhi.gongshi.all = this.computedList;
         this.push_type = 1;
         if(this.push_type == 1){
           this.select_isDisabled = true;
           this.btn_isDisabled = false
         }
      },
      addFuhao(val){
        this.fuhao_type = val;
        this.computedList = this.computedList + this.fuhao_type;
        this.$store.state.peizhi.gongshi.all = this.computedList;
        this.push_type = 2;
        if(this.push_type == 2){
          this.btn_isDisabled = true;
          this.select_isDisabled = false;
        }
      }
  },
  mounted(){

  },
  
};
</script>
<style lang="scss" scoped>
@import "../css/base.css";
.peizhi_w {
  .peizhi_t {
    height: 50px;
    line-height: 50px;
  }
  .bom_title {
    margin-top: 20px;
  }
  .result {
  }
}
</style>
