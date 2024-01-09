import React from "react";
import styles from "./profile.module.scss";
import { logoutAction } from "../../redux/reducers/actionCreators";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux";

const Profile = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.userReducer);

  return (
    <div className={styles.profile}>
      <span>{user ? user.email : "emptyMail"}</span>
      <span>Мои билеты</span>
      <span>История</span>
      <span>Помощь</span>
      <span
        onClick={() => {
          dispatch(logoutAction());
        }}
      >
        Выход
      </span>
    </div>
  );
};

export default Profile;
