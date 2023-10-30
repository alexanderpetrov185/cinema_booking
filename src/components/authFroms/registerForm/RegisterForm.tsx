import React from 'react';
import "./loginForm.scss"
import {useAppDispatch, useAppSelector} from "../../../redux/hooks/redux";
import {loginAction, registrationAction} from "../../../redux/reducers/actionCreators";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
    setModalIsOpen: (arg0: boolean) => void
}

const RegisterForm = ({setModalIsOpen}: Props) => {
    const dispatch = useAppDispatch()
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const {error} = useAppSelector((state) => state.userReducer)

    return (
        <form className={"loginForm"} onSubmit={(e) => e.preventDefault()}>
            <div className="buttonsBlock">
                <CloseIcon className={"btnClose"} onClick={() => setModalIsOpen(false)}/>
            </div>
            <input onChange={e => setEmail(e.target.value)}
                   type="text" name="email"
                   placeholder={"E-mail"}
                   required
            />
            {error && <span className={"errorAuth"}>{error}</span>}
            <input onChange={e => setPassword(e.target.value)}
                   type="password"
                   name="password"
                   placeholder={"password"}
                   required
            />
            {/*<label><input type="checkbox" name="rememberMe"/> Запомнить меня</label>*/}
            <button onClick={() => dispatch(loginAction(email, password))}>Войти</button>
            <button onClick={() => dispatch(registrationAction(email, password))}>Регистрация
            </button>
            {/*<a href="/">Забыли пароль?</a>*/}
            {/*<a href="/">Регистрация</a>*/}
        </form>
    );
};

export default RegisterForm;

