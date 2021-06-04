import React from "react";
import { connect } from "react-redux";
import { getToDoList } from "../redux/selectors";

function ToDoList({
  todoList,
  todoItemController = () => {},
  handleToDoItemClick = () => {},
}) {
  return (
    <div className="todo-list">
      <h2 className="todo-list-title">ToDo</h2>
      {todoList.map((item) => (<div key={item.id} className="todo-item">
          <p onClick={handleToDoItemClick(item.id, item.text)} className="item-text">
            {item.text}
            <span className="item-subtext">
              {item.date.getHours() +
                ":" +
                item.date.getMinutes() +
                ":" +
                item.date.getSeconds()}
            </span>
            </p>
          {todoItemController(item.id)}
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({ todoList: getToDoList(state) });

export default connect(mapStateToProps, null)(ToDoList);
