import React from "react";
import { useDispatch } from "react-redux";
import { changeToken } from "../../modules/auth";

const Login = () => {
  const dispatch = useDispatch();
  const onLoginClick = () => {
    dispatch(changeToken("abc_token"));
  };

  return (
    <div>
      <span>아이디</span>
      <input></input>
      <span>비밀번호</span>
      <input></input>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={onLoginClick}>로그인</button>
        <button>회원가입</button>
      </div>
    </div>
  );
};

export default Login;
