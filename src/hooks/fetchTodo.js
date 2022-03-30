import { onMounted, computed, ref } from 'vue'
import axios from 'axios'
export function fetchTodo () {
  const todos = ref([])
  const fetching = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      todos.value = response.data
    } catch (e) {
      console.log(e)
    }
  }
  const todosCompleted = computed(() => { return todos.value.filter(i => i.completed === true) })
  const todosUncompleted = computed(() => { return todos.value.filter(i => i.completed === false) })

  onMounted(fetching)
  return {
    todos,
    todosCompleted,
    todosUncompleted
  }
}
