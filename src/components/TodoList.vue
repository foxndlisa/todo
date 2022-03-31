<template>
  <div>
    <div class="todolist">
      <TransitionGroup>
        <todo-item
          v-for="todo in todosUncompleted"
          :key='todo.id'
          :todo='todo'
          @completedChange='setCompleted'
        />
      </TransitionGroup>
    </div>
    <h2>Completed</h2>
    <div class="todolist">
      <TransitionGroup>
        <todo-item
          v-for="todo in todosCompleted"
          :key='todo.id'
          :todo='todo'
          @completedChange='setCompleted'
        >
          <template v-slot:controls>
            <img @click="deleteTodo(todo.id)" class="delBtn" src="@/assets/remove.png" />
          </template>
        </todo-item>
      </TransitionGroup>
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
  setup (props, { emit }) {
    const setCompleted = (id) => {
      props.todos.find(todo => todo.id === id).completed = !props.todos.find(todo => todo.id === id).completed
    }
    const deleteTodo = (id) => {
      emit('delete', id)
    }
    return {
      setCompleted,
      deleteTodo
    }
  },
  components: {
    TodoItem
  }
}
</script>

<style lang="scss" scoped>
.v-leave-from,
.v-enter-to,
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-leave-from,
.v-enter-to {
  opacity: 1;
}

.delBtn{
  margin-left: auto;
  text-decoration: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
</style>
