import React, { useState, useMemo, useCallback } from "react";
import TodoTemplate from "./templates/TodoTemplate";

function TodoListItem({ id, todo, isCompleted, onUpdate, onRemove }) {
  const [isModifyMode, setMode] = useState(false);

  const onToggleCheck = useCallback(
    async (e) => {
      await onUpdate({ id, todo, isCompleted: !isCompleted });
    },
    [id, isCompleted, todo]
  );

  const onToggleMode = useCallback(
    (e) => {
      setMode(!isModifyMode);
    },
    [isModifyMode]
  );

  const onDeleteTodo = useCallback(() => {
    onRemove(id);
  }, [id]);

  const onSubmitUpdate = useCallback(
    async (e) => {
      if (!isModifyMode) return;
      const todo = e.target.parentElement.querySelector(`input`).value;

      await onUpdate({ id, todo, isCompleted });
      setMode(!isModifyMode);
    },
    [id, todo, isModifyMode, isCompleted]
  );

  const modifyModeElement = useMemo(() => {
    return (
      <TodoTemplate.ItemInput
        type="text"
        autoFocus={true}
        defaultValue={todo}
      />
    );
  }, [todo]);

  const nomalModeElement = useMemo(() => {
    return (
      <>
        <TodoTemplate.ItemCheckBox
          id={id}
          type="checkbox"
          defaultChecked={isCompleted}
          onChange={onToggleCheck}
        />
        <TodoTemplate.ItemLabel htmlFor={id}>{todo}</TodoTemplate.ItemLabel>
      </>
    );
  }, [id, todo, isCompleted]);

  return (
    <TodoTemplate.Li id={id}>
      <TodoTemplate.ItemDiv>
        {isModifyMode ? modifyModeElement : nomalModeElement}
      </TodoTemplate.ItemDiv>
      <TodoTemplate.ItemButton onClick={onToggleMode}>
        {isModifyMode ? "취소" : "수정"}
      </TodoTemplate.ItemButton>
      <TodoTemplate.ItemButton
        onClick={isModifyMode ? onSubmitUpdate : onDeleteTodo}
      >
        {isModifyMode ? "제출" : "삭제"}
      </TodoTemplate.ItemButton>
    </TodoTemplate.Li>
  );
}

export default React.memo(TodoListItem);
