<template>
  <button :class="{checked:value}" @click="onToggle"><span></span></button>
  <div>{{ value }}</div>
</template>

<script lang='ts'>
import {ref} from 'vue';

export default {
  name: 'Switch',
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const onToggle = () => {
      // 把props的value 取反，通过 input 事件告诉外部
      context.emit('input',!props.value);
    };
    return {onToggle};
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

button:focus {
  outline: none;
}

button.checked {
  background: blue;
}

button.checked > span {
  left: calc(100% - #{$h2} - 2px);
}
</style>
