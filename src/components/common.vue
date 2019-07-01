<template>
  <div class="home">
    <div class="nav">
      <el-menu
        unique-opened
        default-active="/reserves"
        class="el-menu-vertical-demo"
        text-color="#d0ebe6"
        background-color="#3bbfb4"
        :router="true"
        active-text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/reserves">选项1</el-menu-item>
            <el-menu-item index="/peizhi">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航二</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/choiceThree">选项1</el-menu-item>
            <el-menu-item index="/choiceFour">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航三</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/reserves">选项1</el-menu-item>
            <el-menu-item index="/peizhi">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航四</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/reserves">选项1</el-menu-item>
            <el-menu-item index="/peizhi">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航五</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/reserves">选项1</el-menu-item>
            <el-menu-item index="/peizhi">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航六</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/reserves">选项1</el-menu-item>
            <el-menu-item index="/peizhi">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航七</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/reserves">选项1</el-menu-item>
            <el-menu-item index="/peizhi">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="8">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航八</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/reserves">选项1</el-menu-item>
            <el-menu-item index="/peizhi">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="9">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航九</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/reserves">选项1</el-menu-item>
            <el-menu-item index="/peizhi">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <div class="content">
      <div class="head">head</div>
      <div class="shadow"></div>
      <div class="main">
        <transition name="move" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created(){
    
  },
  mounted(){
  }
};
</script>
<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 220px;
  min-height: 400px;
}

.home {
  overflow: hidden;
  // position: absolute;
  height: 100%;
  width: 100%;
}

.nav {
  float: left;
  width: 220px;
  height: 100%;
  background: #3bbfb4;
  overflow:auto;
}
.nav::-webkit-scrollbar{
  width:0;
  height:0;
}
.content {
  float: left;
  width: calc(100% - 220px);
  height: 100%;
}
.head {
  height: 50px;
  // background:red;
}
.shadow{
  height:5px;
  box-shadow:0px 5px 5px 0px #ccc;
  margin-bottom:8px;
  // z-index:99;
}
.main {
  z-index:98;
  height: calc(100% - 120px);
  overflow-y: scroll;
  // background:blue;
}
</style>
