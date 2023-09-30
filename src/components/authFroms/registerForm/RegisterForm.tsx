import React from 'react';
import "./registerForm.scss"

const RegisterForm = () => {
    return (
        <form className={"registerForm"}>
            <label>
                Имя:
                <input type="text" name="name"/>
            </label>
            <input type="submit" value="Отправить"/>
        </form>
    );
};

export default RegisterForm;