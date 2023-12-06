import React, { useCallback } from "react";
import "./authForm.scss";
import CloseIcon from "@mui/icons-material/Close";
import {
  loginAction,
  registrationAction,
} from "../../redux/reducers/actionCreators";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux";

type Props = {
  setModalIsOpen: (arg0: boolean) => void;
};

const AuthForm = ({ setModalIsOpen }: Props) => {
  const [modalIsLogin, setModalIsLogin] = React.useState<boolean>(true);
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.userReducer);

  const loginOnClick = useCallback(() => {
    dispatch(loginAction(email, password));
  }, [dispatch, email, password]);

  return (
    <form className={"authForm"} onSubmit={(e) => e.preventDefault()}>
      <CloseIcon className={"btnClose"} onClick={() => setModalIsOpen(false)} />
      <div className="topBlock">
        {modalIsLogin ? <span>Вход</span> : <span>Регистрация</span>}
      </div>
      <label>
        <input
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
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder={""}
          name="password"
          required
        />
        <span>password</span>
      </label>
      <button onClick={loginOnClick}>{"Войти"}</button>
      <span onClick={() => {}}>{"Зарегистрироваться"}</span>
    </form>
  );
};

export default AuthForm;

// import React from 'react';
// import "./authForm.scss"
// import CloseIcon from "@mui/icons-material/Close";
// import {loginAction, registrationAction} from "../../redux/reducers/actionCreators";
// import {useAppDispatch, useAppSelector} from "../../redux/hooks/redux";
//
// type Props = {
//     setModalIsOpen: (arg0: boolean) => void
// }
//
// const AuthForm = ({setModalIsOpen}: Props) => {
//     const [authType, setAuthType] = React.useState("login")
//     const dispatch = useAppDispatch()
//     const [email, setEmail] = React.useState<string>('')
//     const [password, setPassword] = React.useState<string>('')
//     const {error} = useAppSelector((state) => state.userReducer)
//
//     return (
//         <form className={"authForm"} onSubmit={(e) => e.preventDefault()}>
//             <div className="topBlock">
//                 <span>{authType}</span>
//                 <CloseIcon className={"btnClose"} onClick={() => setModalIsOpen(false)}/>
//             </div>
//             <input onChange={e => setEmail(e.target.value)}
//                    type="text" name="email"
//                    placeholder={"E-mail"}
//                    required
//             />
//             {error && <span className={"errorAuth"}>{error}</span>}
//             <input onChange={e => setPassword(e.target.value)}
//                    type="password"
//                    name="password"
//                    placeholder={"password"}
//                    required
//             />
//             {
//                 authType === "login" ? <>
//                         <button onClick={() => {
//                             dispatch(loginAction(email, password))
//                             setAuthType('login')
//                         }}>
//                             {"Авторизоваться"}
//                         </button>
//                         <button onClick={() => {
//                             setAuthType('registration')
//                         }}>
//                             {"К форме регистрации"}
//                         </button>
//                     </>
//                     : <>
//                         <button onClick={() => {
//                             dispatch(registrationAction(email, password))
//                             setAuthType('registration')
//                         }}>
//                             {"Зарегистрироваться"}
//                         </button>
//                         <button onClick={() => {
//                             setAuthType('login')
//                         }}>
//                             {"К авторизации"}
//                         </button>
//                     </>
//             }
//             {/*<label><input type="checkbox" name="rememberMe"/> Запомнить меня</label>*/}
//             {/*<a href="/">Забыли пароль?</a>*/}
//         </form>
//     );
// };
//
// export default AuthForm;
