


export default function TodoAdd({inputValue}){

  return(
    <div className="todo-add">
      <div className="todo-add-container" data-click="normal">
        <div className="sub-title title">Todo</div>
        <button className="todo-btn btn add-btn yellow-btn">+</button>
      </div>
      <div className="todo-add-container" data-click="change">
        <div className="todo-add-input-group">
          <input type="text" className="todo-add-input" value={inputValue} placeholder="write todo here..."/>
          <select name="todo-type" id="" className="todo-add-select" defaultValue="housework">
            <option value="housework" className="todo-add-option">Housework</option>
            <option value="work" className="todo-add-option">Work</option>
            <option value="others" className="todo-add-option">Others</option>
          </select>
        </div>
        <div className="todo-add-btn-group">
          <button className="todo-btn btn cancel-btn grey-btn">&#10005;</button>
          <button className="todo-btn btn add-btn yellow-btn">Add</button>
        </div>
      </div>
    </div>
  )
}