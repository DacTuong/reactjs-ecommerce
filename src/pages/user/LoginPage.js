import React from "react";
import "../../assets/styles/login.scss"; // đường dẫn SCSS
import LoginForm from "../../components/auth/LoginForm";
const LoginPage = () => {
  return (
    <div class="container-login">
      <div className="login-box">
        <div class="title">ĐĂNG NHẬP </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
