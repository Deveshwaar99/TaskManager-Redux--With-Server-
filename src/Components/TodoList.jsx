import Skeleton from "@mui/material/Skeleton"
import TodoItem from "./TodoItem"
import { useGetTodoQuery } from "../Store"
function TodoList() {
  const { data, error, isFetching } = useGetTodoQuery()
  let renderedList

  if (isFetching) {
    renderedList = (
      <>
        <Skeleton variant="rounded" width={500} height={100} />
        <br />
        <Skeleton variant="rounded" width={500} height={100} />
        <br />
        <Skeleton variant="rounded" width={500} height={100} />
        <br />
      </>
    )
  } else if (error) {
    console.log("Error in Fetching list")
    renderedList = <p>Error in fetching List</p>
  } else {
    renderedList = data.map((item) => (
      <div key={item.id}>
        <TodoItem task={item.task} priority={item.priority} id={item.id} />
      </div>
    ))
  }

  return <>{renderedList}</>
}
export default TodoList
