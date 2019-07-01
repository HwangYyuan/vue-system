<template>
  <div class="con-box">
    <el-table
      :data="all"
      tooltip-effect="dark"
      header-cell-class-name="headerClass"
      style="width: 100%"
      :header-cell-style="{background:'rgb(245, 245, 245)'}"
    >
      <el-table-column prop="reserveName" label="姓名"></el-table-column>
      <el-table-column prop="idNumber" label="身份证"></el-table-column>
      <el-table-column prop="reservePhone" label="电话号码"></el-table-column>
      <el-table-column prop="doctorName" label="预约医生"></el-table-column>
      <el-table-column prop="reserveStart" :formatter="dateFormat" label="预约开始时间"></el-table-column>
      <el-table-column prop="reserveEnd" :formatter="dateFormat" label="预约结束时间"></el-table-column>
      <el-table-column prop="reserveRemark" label="备注"></el-table-column>
      <el-table-column label="预约状态">
        <template slot-scope="scope">
          <span v-if="scope.row.reserveStatus==0">已预约未取号</span>
          <span v-if="scope.row.reserveStatus==1">取消状态</span>
          <span v-if="scope.row.reserveStatus==2">已预约已取号</span>
        </template>
      </el-table-column>
      <el-table-column label="签约状态" fixed="right">
        <template slot-scope="scope">
          <!-- <p v-for="(item,index) in scope.row.signStatus" :key="index"> -->
            <span v-if="scope.row.signStatus == '0001'">已签约免费包</span>
            <span v-if="scope.row.signStatus == '0002'">已签约未支付基础包</span>
            <span v-if="scope.row.signStatus == '0003'">已签约基础包</span>
            <span v-if="scope.row.signStatus == '0004'">已签约个性包</span>
          <!-- </p> -->
        </template>
      </el-table-column>
    </el-table>
    <div class="whiteSpace">
      <el-pagination
      background
      layout="prev, pager, next" 
      :page-sizes="[5, 10, 15, 20]"
      :total="100"
			:page-size="pagination.pagesize"
			@current-change="handleCurrentChange"
			@size-change="handleSizeChange"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import axios from "axios";
import moment from "moment";
export default {
  data() {
    return {
      title: "choiceOne",
      all: [],
      pagination: {
        current: 0,
        pageSize: 10,
      }
    };
  },
  methods: {
    handleCurrentChange(p){
      this.pagination.current = p;
      this.list();
    },
    handleSizeChange(size){
      this.pagination.pageSize = size;
      this.list();
    },
    isSign() {
      console.log("签约状态");
    },
    list() {
      let data =  this.pagination;
      this.$store 
        .dispatch("getAllList", {...data})
        .then(res => {
          this.all = res.data.data.results;
        })
        .catch(err => {});
    },
    dateFormat: function(row, column) {
      var date = row[column.property];
      if (date == undefined) {
        return "";
      }
      return moment(date).format("YYYY-MM-DD");
    }
  },
  mounted() {
    this.list();
  }
};
</script>
<style lang="scss" scoped>
.con-box {
  padding: 20px;
}
.el-table .warning-row {
  background: oldlace;
}
.whiteSpace{
  text-align:center;
  margin-top:20px;
}
</style>
