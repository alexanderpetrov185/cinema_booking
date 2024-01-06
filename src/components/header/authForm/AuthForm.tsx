import React, { useCallback } from "react";
import {
  loginAction,
  registrationAction,
} from "../../../redux/reducers/actionCreators";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/redux";
import { Formik } from "formik";
import * as Yup from "yup";
import LoginForm from "./loginForm/LoginForm";
import SignInForm from "./signInForm/SignInForm";
import AppPreloader from "../../preLoaders/appPreloader/AppPreloader";

type Props = {
  setModalIsOpen: (arg0: boolean) => void;
};

const AuthForm = ({ setModalIsOpen }: Props) => {
  const initialValues = { email: "", password: "", repeatPassword: "" };
  const [authTypeIsLogin, setAuthTypeIsLogin] = React.useState<boolean>(true);
  const dispatch = useAppDispatch();
  const { isLoggedIn, isLoading, error } = useAppSelector(
    (state) => state.userReducer,
  );

  const changeAuthType = useCallback(() => {
    setAuthTypeIsLogin(!authTypeIsLogin);
  }, [authTypeIsLogin]);

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  // min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

  const onSubmit = (values: any) => {
    authTypeIsLogin
      ? dispatch(loginAction(values.email, values.password))
      : dispatch(registrationAction(values.email, values.password));
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Поле обязательное для заполнения*"),
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

  React.useEffect(() => {
    if (!error && isLoggedIn) {
      setModalIsOpen(false);
    }
  }, [error, isLoggedIn, setModalIsOpen]);

  if (isLoading) {
    return <AppPreloader />;
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleReset, dirty }) => {
        return authTypeIsLogin ? (
          <LoginForm
            handleReset={handleReset}
            dirty={dirty}
            changeAuthType={changeAuthType}
            error={error}
            setModalIsOpen={setModalIsOpen}
          />
        ) : (
          <SignInForm
            handleReset={handleReset}
            dirty={dirty}
            changeAuthType={changeAuthType}
            error={error}
            setModalIsOpen={setModalIsOpen}
          />
        );
      }}
    </Formik>
  );
};

export default AuthForm;
