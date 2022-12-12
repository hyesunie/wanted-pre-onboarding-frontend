const API_END_POINT = "https://pre-onboarding-selection-task.shop/";
const SIGN_UP = "auth/signup";

const request = async (url, option) => {
  const response = await fetch(url, option);

  if (response.ok) {
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

export { createAccount };
