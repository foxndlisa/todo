<template>
    <div class='todolist__item'>
      <my-check-box
        :checked="completed"
        @change="sendChange"
      >
        {{titleUpper}}
      </my-check-box>
      <slot name="controls"></slot>
    </div>
</template>

<script>
import { computed } from 'vue'
import MyCheckBox from '@/components/UI/MyCheckBox'

export default {
  components: { MyCheckBox },
  props: {
    todo: Object
  },
  setup (props, { emit }) {
    const sendChange = () => {
      emit('completedChange', props.todo.id)
    }
    const completed = computed(() => { return props.todo.completed })
    const titleUpper = computed(() => { return props.todo.title.charAt(0).toUpperCase() + props.todo.title.slice(1) })
    return {
      titleUpper, sendChange, completed
    }
  }
}
</script>

<style lang="scss" scoped>
.todolist{
  &__item{
    font-weight: 600;
    padding: 16px;
    margin: 16px 0;
    border: 1px solid black;
    border-radius: 8px;
    display: flex;
    align-items: center;
  }
}
</style>
