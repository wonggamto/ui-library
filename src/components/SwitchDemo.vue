<template>
  <!--  $event 就是 Switch 通过 input 传过来的参数-->
  <Switch :value="y" @input="y = $event"/>
</template>

<script lang='ts'>
import Switch from '../libs/Switch.vue';
import {ref} from 'vue';

export default {
  name: 'SwitchDemo',
  components: {Switch},
  setup() {
    const y = ref(true);
    return {y};
  }
};
</script>

<style lang='scss' scoped>

</style>
