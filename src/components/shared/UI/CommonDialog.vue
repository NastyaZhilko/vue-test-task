<template>
  <div class="dialog" v-if="isShow" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'common-dialog',
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:isShow', false)
    }
  }
}


</script>

<style>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgb(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-width: 300px;
  min-height: 50px;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
