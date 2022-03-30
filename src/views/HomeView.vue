<template>
  <div class="home">
    <div class="home__top">
      <h1 class="home__title">Todo</h1>
      <button class="home__btn" @click="popupShow">Create Reminder</button>
    </div>
    <div class="popup" v-if="isPopupShow" @click="popupShow">
      <todo-form @click.stop @create="createTodo"/>
    </div>
    <todo-list
      :todos='todos'
      :todosCompleted='todosCompleted'
      :todosUncompleted='todosUncompleted'
      @delete="deleteTodo"
    />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import TodoForm from '@/components/TodoForm.vue'
import { fetchTodo } from '@/hooks/fetchTodo'
import { ref } from 'vue'

export default {
  setup () {
    const { todosCompleted, todosUncompleted, todos } = fetchTodo()
    const createTodo = (todo) => {
      todos.value.push(todo)
      popupShow()
    }
    const deleteTodo = (id) => {
      todos.value = todos.value.filter(todo => todo.id !== id)
    }
    const isPopupShow = ref(false)
    const popupShow = () => { isPopupShow.value = !isPopupShow.value }
    return {
      isPopupShow,
      popupShow,
      todosCompleted,
      todosUncompleted,
      todos,
      createTodo,
      deleteTodo
    }
  },
  name: 'HomeView',
  components: {
    TodoList,
    TodoForm
  }
}
</script>

<style lang="scss" scoped>
  .home{
    &__top{
      display: flex;
    }
    &__btn{
      padding: 12px 32px;
      font-size: 14px;
      border: none;
      background: #111111;
      border-radius: 8px;
      color: #cccccc;
      cursor: pointer;

      margin-left: auto;
    }
  }
  .popup{
    display: grid;
    place-items: center;
    position: fixed;
    height: 100%;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5)
  }
</style>
