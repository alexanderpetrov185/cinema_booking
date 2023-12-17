import React, { useCallback, useEffect, useState } from "react";
import "./authForm.scss";
import {
  loginAction,
  registrationAction,
} from "../../redux/reducers/actionCreators";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux";

type Props = {
  setModalIsOpen: (arg0: boolean) => void;
};

type Validations = {
  isEmpty: boolean;
  minLength: number;
  maxLength: number;
  isEmail?: boolean;
};

const useValidation = (value: string, validations: Validations) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(true);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case "maxLength":
          value.length > validations[validation]
            ? setMaxLengthError(true)
            : setMaxLengthError(false);
          break;
        case "isEmpty":
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
        case "isEmail":
          const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          re.test(String(value))
            ? setIsEmailError(false)
            : setIsEmailError(true);
          break;
      }
    }
  }, [validations, value]);

  useEffect(() => {
    if (isEmpty || minLengthError || maxLengthError || isEmailError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError, maxLengthError, isEmailError]);

  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    isEmailError,
    inputValid,
  };
};

const useInput = (initialValue: string, validations: Validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};

const AuthForm = ({ setModalIsOpen }: Props) => {
  const email = useInput("", {
    isEmpty: true,
    minLength: 3,
    isEmail: true,
    maxLength: 40,
  });
  const password = useInput("", { isEmpty: true, minLength: 5, maxLength: 20 });
  const [isLogin, setIsLogin] = React.useState<boolean>(true);
  const [repeatPassword, setRepeatPassword] = React.useState<string>("");
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.userReducer);

  const authButtonHandler = useCallback(() => {
    isLogin
      ? dispatch(loginAction(email.value, password.value))
      : password.value === repeatPassword &&
        dispatch(registrationAction(email.value, password.value));
  }, [dispatch, email, isLogin, password, repeatPassword]);

  const changeAuthType = useCallback(() => {
    // setEmail("");
    // setPassword("");
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
          value={email.value}
          onChange={(e) => email.onChange(e)}
          onBlur={(e) => email.onBlur(e)}
          type="email"
          placeholder={""}
          name="email"
          required
        />
        <span>E-mail</span>
      </label>
      <div className={"errorAuth email"}>
        {email.isDirty && email.isEmpty && (
          <span>Поле не может быть пустым</span>
        )}
        {email.isDirty && (email.minLengthError || email.maxLengthError) && (
          <span>Некорректная длина</span>
        )}
        {email.isDirty && email.isEmailError && (
          <span>Поле должно содержать Email</span>
        )}
        {error && <span>{error}</span>}
      </div>
      <label>
        <input
          value={password.value}
          onChange={(e) => password.onChange(e)}
          onBlur={(e) => password.onBlur(e)}
          type="password"
          placeholder={""}
          name="password"
          required
        />
        <span>password</span>
      </label>
      <div className={"errorAuth password"}>
        {password.isDirty && password.isEmpty && (
          <span>Поле не может быть пустым</span>
        )}
        {password.isDirty && (email.minLengthError || email.maxLengthError) && (
          <span>Некорректная длина</span>
        )}
        {error && <span>{error}</span>}
      </div>
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
          {repeatPassword.length > 0 && password.value !== repeatPassword ? (
            <span>Пароли должны совпадать</span>
          ) : (
            <></>
          )}
        </>
      ) : (
        <span className={"forgotPasswordSpan"}>Забыли пароль?</span>
      )}
      <button
        disabled={!email.inputValid || !password.inputValid}
        className={"authButton"}
        onClick={authButtonHandler}
      >
        {isLogin ? "Войти" : "Зарегистрироваться"}
      </button>
      <span className={"authTypeSpan"} onClick={changeAuthType}>
        {isLogin ? "Зарегистрироваться" : "К форме входа"}
      </span>
    </form>
  );
};

export default AuthForm;
