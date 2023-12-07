import React, { useCallback } from "react";
import "./authBlock.scss";
import CloseIcon from "@mui/icons-material/Close";
import {
  loginAction,
  registrationAction,
} from "../../redux/reducers/actionCreators";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux";

type Props = {
  setModalIsOpen: (arg0: boolean) => void;
};

const AuthBlock = ({ setModalIsOpen }: Props) => {
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
    <div className={"authBlock"}>
      <form className={"authForm"} onSubmit={(e) => e.preventDefault()}>
        <div className="authHead">
          {isLogin ? <span>Вход</span> : <span>Регистрация</span>}
          <button className={"btnClose"} onClick={closeAuthBlock}>
            X
          </button>
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
              <span>password</span>
            </label>
            {repeatPassword.length > 0 && password !== repeatPassword ? (
              <span>Пароли должны совпадать</span>
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}
        <button className={"authButton"} onClick={authButtonHandler}>
          {isLogin ? "Войти" : "Зарегистрироваться"}
        </button>
        <span onClick={changeAuthType}>
          {isLogin ? "Зарегистрироваться" : "Авторизоваться"}
        </span>
      </form>
    </div>
  );
};

export default AuthBlock;
