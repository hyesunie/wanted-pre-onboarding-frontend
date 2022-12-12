import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAccount } from "../api";
import { validateId, validatePassword } from "../util";
import AuthTemplate from "./templates/AuthTemplate";

function SignUp() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const { access_token: token } = await createAccount({
        email: id,
        password,
      });

      localStorage.setItem("token", token);
      navigate("/todo");
    },
    [id, password]
  );

  const onChange = useCallback(
    (e) => {
      const { id: targetId, value: targetValue } = e.target;
      if (targetId === "id") {
        setId(targetValue);
        setIsVerified(validateId(targetValue) && validatePassword(password));
        return;
      }

      if (targetId === "password") {
        setPassword(targetValue);
        setIsVerified(validateId(id) && validatePassword(targetValue));
        return;
      }
    },
    [id, password]
  );

  return (
    <>
      <AuthTemplate.Section>
        <p style={{ fontWeight: "600", fontSize: "2em", paddingTop: "2em" }}>
          회원가입
        </p>
        <AuthTemplate.Form onSubmit={onSubmit}>
          <AuthTemplate.Input
            id="id"
            type="text"
            placeholder="ID"
            onChange={onChange}
          />
          <AuthTemplate.Input
            id="password"
            type="password"
            placeholder="PASSWORD"
            onChange={onChange}
          />
          <AuthTemplate.Button
            type="submit"
            active={isVerified}
            disabled={!isVerified}
          >
            로그인
          </AuthTemplate.Button>
        </AuthTemplate.Form>
      </AuthTemplate.Section>
    </>
  );
}

export default SignUp;
