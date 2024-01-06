import React from "react";
import { ErrorMessage, Field, Form } from "formik";
import { IAuthForms } from "../IAuthForms";
import styles from "./loginForm.module.scss";
import ButtonClose from "../../../buttonClose/ButtonClose";

const LoginForm = ({
  error,
  dirty,
  handleReset,
  changeAuthType,
  setModalIsOpen,
}: IAuthForms) => {
  return (
    <Form className={styles.loginForm}>
      <ButtonClose onClick={() => setModalIsOpen(false)} />
      <h3 className={styles.authHead}>Вход</h3>
      <label>
        <Field name={"email"} placeholder="" />
        <span>E-mail</span>
      </label>

      <ErrorMessage
        name={"email"}
        component={"span"}
        className={styles.errorMessage}
      />

      <label>
        <Field name={"password"} placeholder="" type={"password"} />
        <span>password</span>
      </label>

      <ErrorMessage
        name={"password"}
        component={"span"}
        className={styles.errorMessage}
      />
      <span className={styles.forgotPasswordSpan}>Забыли пароль?</span>

      {/*error from server*/}
      {error && <span className={styles.errorMessage}>{error}</span>}

      <button className={styles.authButton} type="submit" disabled={!dirty}>
        Войти
      </button>
      <span
        className={styles.authTypeSpan}
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
