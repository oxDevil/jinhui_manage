<template>
  <div class="hello">
    <el-row>
  
      <el-col :span="4" class="menu">
          <div class="layout-logo-left">
             <h3>后台管理</h3>
          </div>
        <el-menu default-active="1" class="el-menu-vertical-demo" @select="routeTo" @open="handleOpen" @close="handleClose">

         <el-menu-item index="1"><i class="el-icon-menu"></i>导航一</el-menu-item>
         <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
     
         <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>

        </el-menu>

    </el-col>
    
    
      <el-col :span="20" >
         <div class="layout-header">
              
            </div>
            <div class="content">
                <div class="grid-content bg-purple-light">
            <transition mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
            </div>
       
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        page: [{
                    index: 1,
                    name: 'index'
                }, {
                    index: 2,
                    name: 'mark'
                }, {
                    index: 3,
                    name: 'edit'
                }, {
                    index: 4,
                    name: ''
                }]
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      routeTo(e){
        this.$router.push(this.$data.page[e - 1].name);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .hello{
    min-width: 810px;
    height: 100%;
    min-height: 600px;
    position: relative;
  }
  .menu{
    background-color: #eef1f6;
    min-height: 640px;
  }
  .content{
    padding:20px;
  }
  .grid-content{
     padding:10px;
     background-color: #FFFFFF;
     min-height: 540px;
     border-radius: 5px;
  }
  .layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

</style>
