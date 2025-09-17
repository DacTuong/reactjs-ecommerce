import React from "react";
import { Form } from "react-router-dom";

const LoginForm = () => {
  return (
    <form action="" autocomplete="off" method="POST" class="form">
      <div class="row row-form">
        <label>Email</label>
        <input
          class="input-form"
          placeholder="Nhập Email"
          type="email"
          name="user_email"
          required
        />
      </div>
      <div class="row row-form">
        <label>Mật khẩu</label>
        <input
          id="password"
          class="input-form"
          placeholder="Nhập mật khẩu"
          type="password"
          name="user_password"
          maxlength="20"
          required
        />
        <button type="button" id="toggle-password" class="toggle-password">
          Hiện
        </button>
      </div>

      <div class="row row-form">
        <input
          class="submit-btn"
          type="submit"
          name="dangnhap"
          id=""
          value="Đăng nhập"
        />

        <div class="row-link">
          <a class="link-submit" href="{{ URL::to('/register-index') }}">
            Đăng ký nếu chưa có tài khoản
          </a>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
