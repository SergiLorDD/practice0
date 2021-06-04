import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { changeTodoItem, deleteTodoItem, setTodoItem } from "../redux/actions";
import ToDoList from "./ToDoList";

function ToDoListController(props) {
  const [activeId, setActiveId] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null)

  const handleToDoItemClick = (id, text) => (e) => {
    inputRef.current.focus()
    setActiveId(id);
    setInputValue(text);
  };
  const cancelChangeItem = () => {
    setInputValue("");
    setActiveId(null);
  };
  const onChange = (e) => setInputValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeId) {
      props.changeTodoItem({ text: inputValue, id: activeId });
      cancelChangeItem();
    } else {
      props.setTodoItem(inputValue);
      cancelChangeItem();
    }
  };

  const toDoItemDelete = (id) => (e) => {
    e.preventDefault();
    props.deleteTodoItem(id);
  };
  const handleToDoItemDelete = (id) => <button onClick={toDoItemDelete(id)} className="btn-delete"/>;

  const submitController = () => {
    if (activeId) {
      return (
        <>
          <button type="submit" className="btn-submit"/>
          <button onClick={cancelChangeItem} className="btn-delete"/>
        </>
      );
    }
    return <button type="submit" className="btn-submit"/>;
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          placeholder="New task)"
          value={inputValue}
          onChange={onChange}
          className="input todo-input"
          ref={inputRef}
        />{" "}
        {submitController()}
      </form>
      <ToDoList
        todoItemController={handleToDoItemDelete}
        handleToDoItemClick={handleToDoItemClick}
      />
    </>
  );
}

const mapDispatchToProps = { setTodoItem, changeTodoItem, deleteTodoItem };

export default connect(null, mapDispatchToProps)(ToDoListController);
