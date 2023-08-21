import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
//import { addTodo, deleteTodo, editTodo } from "./Slice/listSlice"
import { todoListApi } from "./apis/todoListApi"

const store = configureStore({
  reducer: {
    [todoListApi.reducerPath]: todoListApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(todoListApi.middleware)
  },
})

setupListeners(store.dispatch)

export {
  useGetTodoQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useEditTodoMutation,
} from "./apis/todoListApi"
export default store
