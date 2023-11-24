import Skeleton from '@mui/material/Skeleton'
import Button from '@mui/material/Button'
import TodoItem from './ui/TodoItem'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'
import ShowModal from './ui/ShowModal'
import { useAddTodoMutation } from '../Store'

import { useGetTodoQuery } from '../Store'
function TodoList() {
  const [open, setOpen] = useState(false)
  const [addTodo] = useAddTodoMutation()
  const { data, error, isFetching } = useGetTodoQuery()

  const callDispatch = (taskObject) => {
    addTodo(taskObject)
  }
  const buttonStyles = {
    color: 'white',
    backgroundColor: '#713fff',
    borderRadius: '14px',
    fontWeight: 600,
    fontSize: '16px',
    boxShadow: '0 6px 12px rgba(113,63,255,.25)',
  }
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
    console.log('Error in Fetching list')
    renderedList = <p>Error in fetching List</p>
  } else if (data.length === 0) renderedList = <p>No TODOS available</p>
  else {
    renderedList = data.map((item) => (
      <div key={item._id}>
        <TodoItem title={item.title} priority={item.priority} description={item?.description||"No Description"} id={item._id} />
      </div>
    ))
  }

  return (
    <>
      <div>
        <div className="flex justify-end ">
          <div className="mt-0">
            <Button
              style={buttonStyles}
              size="large"
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={() => setOpen(true)}
            >
              Add Task
            </Button>
          </div>
        </div>
        {renderedList}
        <ShowModal
          open={open || false}
          setOpen={setOpen}
          callDispatch={callDispatch}
          currentTask=""
          currentPriority="high"
        />
      </div>
    </>
  )
}
export default TodoList
