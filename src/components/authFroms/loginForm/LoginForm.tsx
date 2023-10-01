import React, {FC} from 'react';
import "./loginForm.scss"
import {useAppDispatch} from "../../../redux/hooks/redux";
import {loginAction, registrationAction} from "../../../redux/reducers/actionCreators";

const LoginForm: FC = () => {
    const dispatch = useAppDispatch()
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')

    return (
        <form className={"loginForm"} onSubmit={(e) => e.preventDefault()}>
            <input onChange={e => setEmail(e.target.value)}
                   type="text" name="email"
                   placeholder={"E-mail"}
                   required
            />
            <input onChange={e => setPassword(e.target.value)}
                   type="password"
                   name="password"
                   placeholder={"password"}
                   required
            />
            <label><input type="checkbox" name="rememberMe"/> Запомнить меня</label>
            <button onClick={() => dispatch(loginAction(email, password))}>Войти</button>
            <button onClick={() => dispatch(registrationAction(email, password))}>Регистрация</button>
            {/*<a href="/">Забыли пароль?</a>*/}
            {/*<a href="/">Регистрация</a>*/}
        </form>
    );
};

export default LoginForm;