<template>
  <div class="input-block">
    <label v-if="label">{{ label }}</label>
    <input
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
        :placeholder="placeholder"
        :required="required"
    >
  </div>
</template>
<script>
export default {
  name: 'common-input'
}

</script>
<script setup>

defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  label: {
    type: [String, Boolean],
    default: false
  },
  required: {
    default: true,
  },
})

</script>

<style scoped>
.input-block {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

label {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #3D3D3D;
}

input {
  height: 40px;
  width: 100%;
  color: #3D3D3D;
  background: #F8F8F8;
  border: 1px solid #F8F8F8;
  border-radius: 10px;
  padding: 9px 11px;
  outline: none;
}

input:focus {
  border: 1px solid #C4C4C4;
}

input::placeholder {
  color: #C4C4C4;
}

</style>
