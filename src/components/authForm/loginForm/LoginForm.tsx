import React from "react";
import { ErrorMessage, Field, Form } from "formik";
import { IAuthForms } from "../IAuthForms";
import "./loginForm.scss";

const LoginForm = ({
  error,
  dirty,
  handleReset,
  changeAuthType,
  setModalIsOpen,
}: IAuthForms) => {
  return (
    <Form>
      <button
        type={"button"}
        className={"btnClose"}
        onClick={() => setModalIsOpen(false)}
      >
        X
      </button>
      <h3 className="authHead">Вход</h3>
      <label>
        <Field name={"email"} placeholder="" />
        <span>E-mail</span>
      </label>

      <ErrorMessage
        name={"email"}
        component={"span"}
        className={"errorMessage"}
      />

      <label>
        <Field name={"password"} placeholder="" type={"password"} />
        <span>password</span>
      </label>

      <ErrorMessage
        name={"password"}
        component={"span"}
        className={"errorMessage"}
      />
      <span className={"forgotPasswordSpan"}>Забыли пароль?</span>

      {/*error from server*/}
      {error && <span className={"errorMessage"}>{error}</span>}

      <button className={"authButton"} type="submit" disabled={!dirty}>
        Войти
      </button>
      <span
        className={"authTypeSpan"}
        onClick={() => {
          handleReset();
          changeAuthType();
        }}
      >
        Зарегистрироваться
      </span>
    </Form>
  );
};

export default LoginForm;
