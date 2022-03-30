<template>
    <div class='todolist__item'>
      <input
        class="todolist__checkbox"
        type="checkbox"
        :checked="todo.completed"
        :value="todo.id"
        @change="sendChange"
        :id="'checkbox' + todo.id"
      />
      <label :for="'checkbox' + todo.id">{{titleUpper}}</label>
      <slot name="controls"></slot>
    </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    todo: Object
  },
  setup (props, { emit }) {
    const sendChange = () => {
      emit('completedChange', props.todo.id)
    }
    const titleUpper = computed(() => { return props.todo.title.charAt(0).toUpperCase() + props.todo.title.slice(1) })
    return {
      titleUpper, sendChange
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
  &__checkbox{
    min-width: 20px;
    min-height: 20px;
    margin-right: 16px;
  }
}
</style>
