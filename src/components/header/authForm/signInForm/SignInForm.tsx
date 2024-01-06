import React from "react";
import { ErrorMessage, Field, Form } from "formik";
import { IAuthForms } from "../IAuthForms";
import styles from "./signInForm.module.scss";
import ButtonClose from "../../../buttonClose/ButtonClose";

const SignInForm = ({
  error,
  dirty,
  handleReset,
  changeAuthType,
  setModalIsOpen,
}: IAuthForms) => {
  return (
    <Form className={styles.authFormStyle}>
      <ButtonClose onClick={() => setModalIsOpen(false)} />
      <h3 className="styles.authHead">Регистрация</h3>
      <label>
        <Field name={"email"} placeholder="" />
        <span>E-mail</span>
      </label>

      <ErrorMessage
        name={"email"}
        component={"span"}
        className={"styles.errorMessage"}
      />

      <label>
        <Field name={"password"} placeholder="" type={"password"} />
        <span>password</span>
      </label>

      <ErrorMessage
        name={"password"}
        component={"span"}
        className={"styles.errorMessage"}
      />
      <label>
        <Field name={"repeatPassword"} placeholder="" type={"password"} />
        <span>repeat password</span>
      </label>
      <ErrorMessage
        name={"repeatPassword"}
        component={"span"}
        className={styles.errorMessage}
      />

      {/*error from server*/}
      {error && <span className={styles.errorMessage}>{error}</span>}

      <button className={styles.authButton} type="submit" disabled={!dirty}>
        Зарегистрироваться
      </button>
      <span
        className={styles.authTypeSpan}
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
