import React from 'react';
import './profile.scss'
import {logoutAction} from "../../redux/reducers/actionCreators";
import {useAppDispatch} from "../../redux/hooks/redux";

interface Props {
    modalOpen: (state: boolean) => void;
}

const Profile = ({modalOpen}: Props) => {
    const dispatch = useAppDispatch()

    return (
        <div className={"profile"}>
            <img src="/assets/icons/profile.svg" alt="profile_icon" className="profileIcon"/>
            <div className="profileText">
                <h2>EMAIl</h2>
                <span>
                Мои билеты
            </span>
                <span>
                История
            </span>
                <span>
                Помощь
            </span>
                <span onClick={() => {
                    modalOpen(false);
                    dispatch(logoutAction());
                }}>
                Выход
            </span>
            </div>
        </div>
    );
};

export default Profile;