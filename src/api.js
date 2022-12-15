const API_END_POINT = "https://pre-onboarding-selection-task.shop/";
const SIGN_UP = "auth/signup";
const TODO = "todos";

const request = async (url, option) => {
  const response = await fetch(url, option);

  if (response.ok) {
    if (response.status === 204 && response.statusText === "No Content") {
      return;
    }

    return await response.json();
  }

  throw new Error(`${option.method}:[${url}] 경로에서 오류가 발생했습니다.`);
};

const createAccount = async (userInfo) => {
  const url = API_END_POINT + SIGN_UP;
  const option = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userInfo),
  };

  return await request(url, option);
};

const createTodo = async (todoInfo) => {
  const url = API_END_POINT + TODO;
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(todoInfo),
  };

  return await request(url, option);
};

const readTodos = async () => {
  const url = API_END_POINT + TODO;
  const option = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  return await request(url, option);
};

const updateTodo = async ({ id, todo, isCompleted }) => {
  const url = API_END_POINT + TODO + `/${id}`;
  const option = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ todo, isCompleted }),
  };

  return await request(url, option);
};

const deleteTodo = async ({ id }) => {
  const url = API_END_POINT + TODO + `/${id}`;
  const option = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  return await request(url, option);
};

export { createAccount, createTodo, readTodos, updateTodo, deleteTodo };
