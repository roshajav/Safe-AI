import React, { useState } from "react";

const TodoList = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [task, setTask] = useState("");
  const [strikedText, setStrikedText] = useState(false);

  const addTodoList = () => {
    if (task === "") return;
    setTodoItems([...todoItems, task]);
    setTask("");
  };

  const strikeTaskCompleted = (item, index) => {
    setStrikedText(!item);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter a todo item"
        onChange={(e) => {
          setTask(e.target.value);
        }}
        value={task}
      />
      &ensp;
      <button onClick={addTodoList}> Submit </button>
      <ul>
        {todoItems?.map((item, index) => {
          return (
            <div key={index}>
              <ul className="strikedText">
                {strikedText ? strikedText : item}
                &ensp;
                <button onClick={() => strikeTaskCompleted(item, index)}>
                  Completed
                </button>
              </ul>
            </div>
          );
        })}
      </ul>
    </>
  );
};
export default TodoList;
