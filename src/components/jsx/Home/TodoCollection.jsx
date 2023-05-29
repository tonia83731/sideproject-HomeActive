import { ReactComponent as Checkbox } from "../../assets/checkbox_unfinished.svg"
import { ReactComponent as CheckboxDone } from "../../assets/checkbox_finished.svg"

import { ReactComponent as Edit } from "../../assets/edit.svg"
import { ReactComponent as Delete } from "../../assets/delete.svg"
import { ReactComponent as Exercise } from "../../assets/exercise.svg"

export function TodoItem({todo, isEdit, isDone, isExercise}){
  return(
    <div className="todo-item">
      <div className="todo-item-container">
        <div className="checkbox">
          {todo.isDone === true ? <CheckboxDone/> : <Checkbox/>}
        </div>
        <input type="text" className={`todo-item-title ${todo.isDone === true ? "line-through" : ""}`} value={todo.title} disabled={todo.isEdit === false ? true : false}/>
        <div className="todo-btn-group">
          <button className="todo-btn btn edit-btn blue-btn"><Edit/></button>
          <button className="todo-btn btn delete-btn blue-btn"><Delete/></button>
          {todo.isExercise.length !== 0 ? <button className="todo-btn exercise-btn red-btn btn"><Exercise/></button> : ""}
        </div>
      </div>
    </div>
  )
}

export default function TodoCollection({todos}){
  return(
    <div className="todo-collection">
      {todos.map((todo) => {
        return <TodoItem key={todos.id} todo={todo}/>
      })}
    </div>
  )
}