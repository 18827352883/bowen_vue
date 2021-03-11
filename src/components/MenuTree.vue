<template>
    <div>
      <template v-for="item in this.menuList">
        <el-submenu :disabled="item.disabled" :index="item.id+''" :key="item.id+''" v-if="item.children.length>0">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.menuName}}</span><!--菜单名称-->
          </template>
<!--         子菜单-->
          <MenuTree :menu-list="item.children"></MenuTree>
        </el-submenu>
<!--        子菜单项-->
        <el-menu-item
          v-else
          :disabled="item.disabled"
          :index="item.url"
          :route="item.url"
          :key="item.id"
        >
          <i :class="item.icon"></i>
          <span slot="title">{{item.menuName}}</span><!--菜单名称-->
        </el-menu-item>
      </template>
    </div>
</template>

<script>
    export default {
        name: "MenuTree",
        props:[
          "menuList"
        ]
    }
</script>

<style scoped>
  .el-menu--collapse span,
  .el-menu--collapse{
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
  }

</style>
