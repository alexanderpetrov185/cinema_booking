import React from "react";
import { ErrorMessage, Field, Form } from "formik";
import { IAuthForms } from "../IAuthForms";

const SignInForm = ({
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
      <h3 className="authHead">Регистрация</h3>
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
      <label>
        <Field name={"repeatPassword"} placeholder="" type={"password"} />
        <span>repeat password</span>
      </label>
      <ErrorMessage
        name={"repeatPassword"}
        component={"span"}
        className={"errorMessage"}
      />

      {/*error from server*/}
      {error && <span className={"errorMessage"}>{error}</span>}

      <button className={"authButton"} type="submit" disabled={!dirty}>
        Зарегистрироваться
      </button>
      <span
        className={"authTypeSpan"}
        onClick={() => {
          handleReset();
          changeAuthType();
        }}
      >
        К форме входа
      </span>
    </Form>
  );
};

export default SignInForm;
