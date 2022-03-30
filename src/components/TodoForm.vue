<template>
  <form class="todoform">
    <h2 class="todoform__title">Create Reminder</h2>
    <input
      type="text"
      placeholder="Title"
      class="todoform__input"
      v-model="todo.title"
      v-focus
    />
    <button class="todoform__btn" @click.prevent="setTodo">Create</button>
  </form>
</template>

<script>
import { Guid } from 'js-guid'

export default {
  setup (props, { emit }) {
    const todo = { title: '' }
    const setTodo = () => {
      todo.id = Guid.newGuid().toString()
      todo.completed = false
      emit('create', { ...todo })
    }

    return {
      todo, setTodo
    }
  },
  directives: {
    focus: {
      mounted: (el) => el.focus()
    }
  }
}
</script>

<style lang="scss" scoped>
  .todoform{
    padding: 32px;
    background: #fff;
    border-radius: 16px;
    margin: 0 16px;
    &__title{
      margin-bottom: 16px;
    }
    &__input{
      margin: 16px 0;
      width: 100%;
      font-size: 16px;
      padding: 8px;
    }
    &__btn{
      padding: 12px 32px;
      font-size: 14px;
      border: none;
      background: #111111;
      border-radius: 8px;
      color: #cccccc;
      cursor: pointer;
    }
  }
</style>
