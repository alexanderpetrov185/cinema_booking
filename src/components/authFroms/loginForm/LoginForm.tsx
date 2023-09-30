import React from 'react';
import "./loginForm.scss"

const LoginForm = () => {
    return (
        <form className={"loginForm"}>
            <input type="text" name="email" placeholder={"E-mail"}/>
            <input type="text" name="password" placeholder={"password"}/>
            <label><input type="checkbox" name="rememberMe"/> Запомнить меня</label>
            <button type={"submit"}>Войти</button>
            <a href="/">Забыли пароль?</a>
            <a href="/">Регистрация</a>
        </form>
    );
};

export default LoginForm;