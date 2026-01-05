<template>
  <ul class="app-header-nav">
    <li class="home"><a href="/">首页</a></li>
    <li class="home" v-for="item in categoryList" :key="item.id">
      <a :href="`/category/${item.id}`" class="nav-link">{{ item.name }}</a>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';

// 静态数据，无需 store
const categoryList = ref([
  { id: 1, name: '居家' },
  { id: 2, name: '美食' },
  { id: 3, name: '服饰' },
]);
</script>

<style lang="scss" scoped>
.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  li {
    margin-right: 40px;
    width: 38px;
    text-align: center;

    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;

      &:hover {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }
  }
}
</style>
