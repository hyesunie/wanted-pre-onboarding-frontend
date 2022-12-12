import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import SignUp from "../components/SignUp";

function loader() {
  const token = localStorage.getItem("token");
  return { isExistToken: token ? true : false };
}

function HomePage() {
  const { isExistToken } = useLoaderData();
  const navigate = useNavigate();
  useEffect(() => {
    if (isExistToken) {
      navigate("/todo");
      return;
    }
  }, [isExistToken]);
  return <SignUp />;
}

export { loader, HomePage as default };
