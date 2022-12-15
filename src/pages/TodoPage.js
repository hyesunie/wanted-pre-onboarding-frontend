import { useCallback, useEffect, useReducer } from "react";
import { createTodo, readTodos, updateTodo, deleteTodo } from "../api";
import TodoList from "../components/TodoList";

function reducer(state, action) {
  switch (action.type) {
    case "READ": {
      const { list } = action;
      return { ...state, list };
    }
    case "CREATE": {
      const { id, todo, isCompleted, userId } = action;
      return {
        ...state,
        list: [...state.list, { id, todo, isCompleted, userId }],
      };
    }
    case "UPDATE": {
      const { id, todo, isCompleted } = action;
      return {
        ...state,
        list: state.list.map((e) => {
          if (e.id === id) {
            return { id, todo, isCompleted, userId: e.userId };
          }
          return e;
        }),
      };
    }
    case "DELETE": {
      const { id } = action;
      return { ...state, list: state.list.filter((e) => e.id !== id) };
    }
    default: {
      return state;
    }
  }
}

function TodoPage() {
  const [state, dispatch] = useReducer(reducer, { list: [] });
  const onCreate = useCallback(async (newTodo) => {
    const { id, todo, isCompleted, userId } = await createTodo({
      todo: newTodo,
    });
    dispatch({ type: "CREATE", id, todo, isCompleted, userId });
  }, []);

  const onUpdate = useCallback(async (todoInfo) => {
    const { id, todo, isCompleted } = await updateTodo(todoInfo);
    dispatch({ type: "UPDATE", id, todo, isCompleted });
  }, []);

  const onRemove = useCallback(async (deleteId) => {
    await deleteTodo({ id: deleteId });
    dispatch({ type: "DELETE", id: deleteId });
  }, []);

  useEffect(() => {
    (async function () {
      const list = await readTodos();
      dispatch({ type: "READ", list });
    })();
  }, []);

  return (
    <TodoList
      list={state.list}
      onCreate={onCreate}
      onUpdate={onUpdate}
      onRemove={onRemove}
    />
  );
}

export default TodoPage;
