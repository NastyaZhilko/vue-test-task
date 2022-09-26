<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'common-button',
  props: ['type', 'mode']
}

</script>

<style>
button {
  color: #FFFFFF;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  padding: 10px 60px;
  background: #71A3FF;
  border: 1px solid #71A3FF;
  border-radius: 10px;
}

button.white {
  color: #3D3D3D;
  background-color: #FFFFFF;
}

button:disabled {
  opacity: 0.5;
}
</style>
