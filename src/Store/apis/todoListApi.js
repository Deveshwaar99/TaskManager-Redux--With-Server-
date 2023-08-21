import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const todoListApi = createApi({
  reducerPath: "todoList",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints(builder) {
    return {
      getTodo: builder.query({
        query: () => {
          return {
            url: "/List",
            method: "GET",
          }
        },
        providesTags: ["Todo"],
      }),
      addTodo: builder.mutation({
        query: (item) => {
          return {
            url: "/List",
            method: "POST",
            body: {
              task: item.task,
              priority: item.priority,
            },
          }
        },
        invalidatesTags: ["Todo"],
      }),
      editTodo: builder.mutation({
        query: (item) => {
          return {
            url: `/List/${item.id}`,
            method: "PUT",
            body: {
              task: item.task,
              priority: item.priority,
            },
          }
        },
        invalidatesTags: ["Todo"],
      }),
      deleteTodo: builder.mutation({
        query: (id) => {
          return {
            url: `/List/${id}`,
            method: "DELETE",
          }
        },
        invalidatesTags: ["Todo"],
      }),
    }
  },
})

export const {
  useGetTodoQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useEditTodoMutation,
} = todoListApi
export { todoListApi }
