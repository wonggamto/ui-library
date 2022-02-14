<template>
  <TopNav/>
  <div class="banner">
    <h1>自制组件库</h1>
    <h2>一个常用的 UI 组件库</h2>
    <p class="actions">
      <a href="https://github.com/wonggamto/ui-library">GitHub</a>
      <router-link to="/doc">开始</router-link>
    </p>
  </div>
</template>

<script lang='ts'>
import TopNav from '../components/TopNav.vue';

export default {
  name: 'Home',
  components: {TopNav}
};
</script>

<style lang='scss' scoped>
@use "sass:math";
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      //$border-radius:
      height: $h;
      line-height: $h;
      //TODO
      border-radius: 14px;
      //border-radius:($h / 2);
      //@debug calc($h / 2);
      padding: 0 8px;
    }
  }
}
</style>
