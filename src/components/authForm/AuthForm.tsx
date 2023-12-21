import React, { useCallback, useEffect, useState } from "react";
import "./authForm.scss";
import {
  loginAction,
  registrationAction,
} from "../../redux/reducers/actionCreators";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

type Props = {
  setModalIsOpen: (arg0: boolean) => void;
};

const AuthForm = ({ setModalIsOpen }: Props) => {
  const initialValues = { email: "", password: "", repeatPassword: "" };
  const [authTypeIsLogin, setAuthTypeIsLogin] = React.useState<boolean>(true);
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.userReducer);

  const changeAuthType = useCallback(() => {
    setAuthTypeIsLogin(!authTypeIsLogin);
  }, [authTypeIsLogin]);

  const closeAuthBlock = useCallback(() => {
    setModalIsOpen(false);
    setAuthTypeIsLogin(true);
  }, [setModalIsOpen]);

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  // min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

  const onSubmit = useCallback(
    (values: any) => {
      authTypeIsLogin
        ? dispatch(loginAction(values.email, values.password))
        : dispatch(registrationAction(values.email, values.password));
    },
    [dispatch, authTypeIsLogin],
  );

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Поле необходимо заполнить*"),
    password: authTypeIsLogin
      ? Yup.string().required("Поле обязательное для заполнения*")
      : Yup.string()
          .matches(passwordRules, {
            message:
              "Слабый пароль* (пароль должен содеражать минимум 5 символов, минимум 1 бувку верхнего и нижнего регистра и 1 цифру)",
          })
          .required("Поле обязательное для заполнения*"),
    repeatPassword: authTypeIsLogin
      ? Yup.string().notRequired()
      : Yup.string()
          .oneOf([Yup.ref("password"), undefined], "Пароли должны совпадать*")
          .required("Поле обязательное для заполнения*"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleReset, dirty }) => {
        return (
          <Form className={"authForm"}>
            <button
              type={"button"}
              className={"btnClose"}
              onClick={closeAuthBlock}
            >
              X
            </button>
            <div className="authHead">
              {authTypeIsLogin ? <h3>Вход</h3> : <h3>Регистрация</h3>}
            </div>
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

            {!authTypeIsLogin ? (
              <>
                <label>
                  <Field
                    name={"repeatPassword"}
                    placeholder=""
                    type={"password"}
                  />
                  <span>repeat password</span>
                </label>
                <ErrorMessage
                  name={"repeatPassword"}
                  component={"span"}
                  className={"errorMessage"}
                />
              </>
            ) : (
              <span className={"forgotPasswordSpan"}>Забыли пароль?</span>
            )}

            {/*error from server*/}
            {error && <span className={"errorMessage"}>{error}</span>}

            <button className={"authButton"} type="submit" disabled={!dirty}>
              {authTypeIsLogin ? "Войти" : "Зарегистрироваться"}
            </button>
            <span
              className={"authTypeSpan"}
              onClick={() => {
                handleReset();
                changeAuthType();
              }}
            >
              {authTypeIsLogin ? "Зарегистрироваться" : "К форме входа"}
            </span>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AuthForm;
