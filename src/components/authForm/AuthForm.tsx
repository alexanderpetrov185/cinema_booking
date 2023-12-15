import React, { useCallback, useState } from "react";
import "./authForm.scss";
import {
  loginAction,
  registrationAction,
} from "../../redux/reducers/actionCreators";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux";

type Props = {
  setModalIsOpen: (arg0: boolean) => void;
};

// const useInput = (initialValue: string) => {
//   const [value, setValue] = useState(initialValue);
//   const [isDirty, setDirty] = useState(false);
//
//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.value);
//   };
//
//   const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setDirty(true);
//   };
//
//   return {
//     value,
//     onChange,
//     onBlur,
//   };
// };

const AuthForm = ({ setModalIsOpen }: Props) => {
  const [isLogin, setIsLogin] = React.useState<boolean>(true);
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [repeatPassword, setRepeatPassword] = React.useState<string>("");
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.userReducer);

  const authButtonHandler = useCallback(() => {
    isLogin
      ? dispatch(loginAction(email, password))
      : password === repeatPassword &&
        dispatch(registrationAction(email, password));
  }, [dispatch, email, isLogin, password, repeatPassword]);

  const changeAuthType = useCallback(() => {
    setEmail("");
    setPassword("");
    setRepeatPassword("");
    setIsLogin(!isLogin);
  }, [isLogin]);

  const closeAuthBlock = useCallback(() => {
    setModalIsOpen(false);
    setIsLogin(true);
  }, [setModalIsOpen]);

  return (
    <form className={"authForm"} onSubmit={(e) => e.preventDefault()}>
      <button className={"btnClose"} onClick={closeAuthBlock}>
        X
      </button>
      <div className="authHead">
        {isLogin ? <h3>Вход</h3> : <h3>Регистрация</h3>}
      </div>
      <label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder={""}
          name="email"
          required
        />
        <span>E-mail</span>
      </label>
      {error && <span className={"errorAuth"}>{error}</span>}
      <label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder={""}
          name="password"
          required
        />
        <span>password</span>
      </label>
      {!isLogin ? (
        <>
          <label>
            <input
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              type="password"
              placeholder={""}
              name="repeatPassword"
              required
            />
            <span>repeat password</span>
          </label>
          {repeatPassword.length > 0 && password !== repeatPassword ? (
            <span>Пароли должны совпадать</span>
          ) : (
            <></>
          )}
        </>
      ) : (
        <span className={"forgotPasswordSpan"}>Забыли пароль?</span>
      )}
      <button className={"authButton"} onClick={authButtonHandler}>
        {isLogin ? "Войти" : "Зарегистрироваться"}
      </button>
      <span className={"authTypeSpan"} onClick={changeAuthType}>
        {isLogin ? "Зарегистрироваться" : "К форме входа"}
      </span>
    </form>
  );
};

export default AuthForm;
