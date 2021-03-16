<template>
  <el-container class="main_container" style="height: 100%">
    <!--头部布局-->
    <el-header>
      <!--logo和项目名称-->
      <div class="left_box">
        <img src="../assets/img/微信图片_20210222133202.jpg">
        <span>I'M FUCKING SPEECHLESS</span>
      </div>
      <!--用户登录所展示的头像-->
      <div class="right_box">
        <el-dropdown>
      <span class="el-dropdown-link">
        注销登录哈哈<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-house">系统首页</el-dropdown-item>
            <el-dropdown-item icon="el-icon-switch-button">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>

    <el-container>
      <!--侧边栏-->
      <el-aside :width="isCollapse?'64px':'200px'">
          <!--展开或者收起侧边栏-->
          <div class="toggle_box" @click="isCollapse = !isCollapse">||||</div>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#2c3e50"
            text-color="#fff"
            active-text-color="#ffd04b"
          :collapse="isCollapse"
          :collapse-transition="false"
          :unique-opened="true"
          :router="true"
          >
          <MenuTree :menuList="this.menuList"></MenuTree><!--代替抽取出去的内容-->
          </el-menu>
      </el-aside>
      <el-main>
<!--        路由视图-->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import MenuTree from "../components/MenuTree";
    export default {
      methods: {
      },
        name: "Main",
        data() {
          return {
            isCollapse: false,
            menuList:[
              {
                'id' : '1',
                'parentId': '0',/*上级菜单ID*/
                'menuName': '用户管理',/*菜单名称*/
                'url': '/user',/*菜单URL*/
                'icon': 'el-icon-user',/*图标*/
                'orderNum': '1',/*排序*/
                'open': '1',/*0：不展开，1：展开*/
                'disabled': false, /*是否禁用*/
                'perms': null,/*权限标识*/
                'type': 0,/*类型： 0：菜单，1：按钮*/
                'children':[]/*子菜单*/
              },
              {
                'id' : '2',
                'parentId': '0',/*上级菜单ID*/
                'menuName': '供应商',/*菜单名称*/
                'url': '/supplier',/*菜单URL*/
                'icon': 'el-icon-user-solid',/*图标*/
                'orderNum': '1',/*排序*/
                'open': '1',/*0：不展开，1：展开*/
                'disabled': false, /*是否禁用*/
                'perms': null,/*权限标识*/
                'type': 0,/*类型： 0：菜单，1：按钮*/
                'children':[]
              },
              // {
              //   'id' : '3',
              //   'parentId': '0',/*上级菜单ID*/
              //   'menuName': '库存管理',/*菜单名称*/
              //   'url': '/inventory',/*菜单URL*/
              //   'icon': 'el-icon-suitcase-1',/*图标*/
              //   'orderNum': '1',/*排序*/
              //   'open': '1',/*0：不展开，1：展开*/
              //   'disabled': false, /*是否禁用*/
              //   'perms': null,/*权限标识*/
              //   'type': 0,/*类型： 0：菜单，1：按钮*/
              //   'children':[]
              // },
              // {
              //   'id' : '4',
              //   'parentId': '0',/*上级菜单ID*/
              //   'menuName': '供应商管理',/*菜单名称*/
              //   'url': '/suppliers',/*菜单URL*/
              //   'icon': 'el-icon-s-custom',/*图标*/
              //   'orderNum': '1',/*排序*/
              //   'open': '1',/*0：不展开，1：展开*/
              //   'disabled': false, /*是否禁用*/
              //   'perms': null,/*权限标识*/
              //   'type': 0,/*类型： 0：菜单，1：按钮*/
              //   'children':[]
              // },
              // {
              //   'id' : '5',
              //   'parentId': '0',/*上级菜单ID*/
              //   'menuName': '订单管理',/*菜单名称*/
              //   'url': '/order',/*菜单URL*/
              //   'icon': 'el-icon-edit',/*图标*/
              //   'orderNum': '1',/*排序*/
              //   'open': '1',/*0：不展开，1：展开*/
              //   'disabled': false, /*是否禁用*/
              //   'perms': null,/*权限标识*/
              //   'type': 0,/*类型： 0：菜单，1：按钮*/
              //   'children':[]
              // },
              // {
              //   'id' : '6',
              //   'parentId': '0',/*上级菜单ID*/
              //   'menuName': '采购管理',/*菜单名称*/
              //   'url': '/purchase',/*菜单URL*/
              //   'icon': 'el-icon-truck',/*图标*/
              //   'orderNum': '1',/*排序*/
              //   'open': '1',/*0：不展开，1：展开*/
              //   'disabled': false, /*是否禁用*/
              //   'perms': null,/*权限标识*/
              //   'type': 0,/*类型： 0：菜单，1：按钮*/
              //   'children':[]
              // },
              // {
              //   'id' : '7',
              //   'parentId': '0',/*上级菜单ID*/
              //   'menuName': '业务员管理',/*菜单名称*/
              //   'url': '/users',/*菜单URL*/
              //   'icon': 'el-icon-user',/*图标*/
              //   'orderNum': '1',/*排序*/
              //   'open': '1',/*0：不展开，1：展开*/
              //   'disabled': false, /*是否禁用*/
              //   'perms': null,/*权限标识*/
              //   'type': 0,/*类型： 0：菜单，1：按钮*/
              //   'children':[]
              // },
              // {
              //   'id' : '8',
              //   'parentId': '0',/*上级菜单ID*/
              //   'menuName': '退货管理',/*菜单名称*/
              //   'url': '/sales',/*菜单URL*/
              //   'icon': 'el-icon-warning',/*图标*/
              //   'orderNum': '1',/*排序*/
              //   'open': '1',/*0：不展开，1：展开*/
              //   'disabled': false, /*是否禁用*/
              //   'perms': null,/*权限标识*/
              //   'type': 0,/*类型： 0：菜单，1：按钮*/
              //   'children':[]
              // },
            ]
          }
        },
        components:{
          MenuTree
        }
    }
</script>

<style>
  #app {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
</style>

<style scoped lang="less">
  /*设置容器的高度*/
  .main_container{
    height: 100%;
  }
  /*头部布局*/
  .el-header {
    background-color: #2c3e50;
    display: flex;/*流线布局*/
    justify-content: space-between;/*<!--两边对其-->*/
    padding-left: 0;/*左边没有间隙*/
    align-items: center;/*文字居中*/
    font-size: 20px;
    color: #333;
    /*左边logo和标题*/
    .left_box{
      display: flex;
      align-items: center;
      /*login*/
      img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin: 0px 0px 0px 15px;/*上右下左*/
      }
      /*标题*/
      span{
        color: azure;
        margin-left: 550px;
      }
    }
    /*右边的下拉框*/
    .right_box{
      margin-right: 30px;
    }
  }
  /*侧边栏*/
  .el-aside {
    background-color: #2c3e50;

    .el-menu{
      border-right: none;
    }
    /*折叠收起*/
    .toggle_box{
      background-color: aquamarine;
      letter-spacing: 0.3em;
      cursor: pointer;
    }

  }
  /*内容主体*/
  .el-main {
    background-color: #E9EEF3;
  }


</style>
