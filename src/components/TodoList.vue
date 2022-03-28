<template>
  <div>
    <!-- <button @click="setTodo">Add todo</button> -->
    <div class="todolist">
      <todo-item
        v-for="todo in todosUncompleted"
        :key='todo.id'
        v-bind:class="{ completed: todo.completed }"
        :todo='todo'
        @completedChange='setCompleted'
      />
    </div>
    <h2>Completed</h2>
    <div class="todolist">
      <todo-item
        v-for="todo in todosCompleted"
        :key='todo.id'
        v-bind:class="{ completed: todo.completed }"
        :todo='todo'
        @completedChange='setCompleted'
      />
    </div>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'
export default {
  props: {
    todos: Array,
    todosCompleted: Array,
    todosUncompleted: Array
  },
  setup (props) {
    const setCompleted = (id) => {
      props.todos.find(todo => todo.id === id).completed = !props.todos.find(todo => todo.id === id).completed
    }
    return {
      setCompleted
    }
  },
  components: {
    TodoItem
  }
}
</script>

<style lang="scss" scoped>

</style>
