<template>
  <label>
    <span class="check__box" :class="{ completed: isChecked }"></span>
    <input
      class="check__input"
      type="checkbox"
    />
    <span class="check__text"><slot></slot></span>
  </label>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    checked: Boolean
  },
  setup (props) {
    const isChecked = computed(() => { return props.checked })
    return {
      isChecked
    }
  }
}
</script>

<style lang="scss" scoped>
.check{
  &__box{
    position: absolute;
    width: 1.5em;
    height: 1.5em;
    background-image: url("data:image/svg+xml,%3Csvg width='17' height='13' viewBox='0 0 17 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 7L6 12L16 2L15.5 1.5L6 11L1.5 6.5L1 7Z' fill='white' stroke='white'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: center;
    border: 1.5px solid black;
    border-radius: 100%;
    cursor: pointer;
  }
  &__input{
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  &__text{
    margin-left: 2em;
  }
}
.completed{
  background-color: black;
  color: #ccc;
}
</style>
