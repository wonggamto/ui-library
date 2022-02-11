<template>
  <div>导航栏 |
    <router-link to="/">Demo</router-link> |
    <router-link to="/xxx">Demo1</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>
