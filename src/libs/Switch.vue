<template>
  <button :class="{checked}" @click="onToggle"><span></span></button>
</template>

<script lang='ts'>
import {ref} from 'vue';

export default {
  name: 'Switch',
  setup(){
    const checked = ref(false)
    const onToggle = ()=>{
      checked.value = !checked.value
    }
    return {checked,onToggle}
  }
};
</script>

<style lang='scss' scoped>

$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: grey;
  border-radius: $h / 2;
  position: relative;;
}

span {
  position: absolute;
  //display: inline-block;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2 / 2;
  transition: left 250ms;
}
button:focus{
  outline: none;
}
button.checked {
  background: blue;
}
button.checked >span {
  left: calc(100% - #{$h2} - 2px);
}
</style>
