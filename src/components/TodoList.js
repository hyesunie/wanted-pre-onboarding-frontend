import React, { useCallback } from "react";
import TodoTemplate from "./templates/TodoTemplate";
import TodoListItem from "./TodoListItem";

function TodoList({ list, onCreate, onUpdate, onRemove }) {
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const todo = e.target[0].value;
      e.target[0].value = "";
      onCreate(todo);
    },
    [onCreate]
  );

  return (
    <TodoTemplate.Section>
      <TodoTemplate.Form onSubmit={onSubmit}>
        <TodoTemplate.Input type="text" placeholder="할 일을 입력하세요." />
        <TodoTemplate.Submit>+</TodoTemplate.Submit>
      </TodoTemplate.Form>
      <TodoTemplate.Article>
        <TodoTemplate.Ul>
          {list &&
            list.map((e) => (
              <TodoListItem
                key={e.id}
                id={e.id}
                todo={e.todo}
                isCompleted={e.isCompleted}
                onUpdate={onUpdate}
                onRemove={onRemove}
              />
            ))}
        </TodoTemplate.Ul>
      </TodoTemplate.Article>
    </TodoTemplate.Section>
  );
}

export default React.memo(TodoList);
