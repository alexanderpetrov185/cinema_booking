import React from "react";
import styles from "./profile.module.scss";
import { logoutAction } from "../../redux/reducers/actionCreators";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux";
import { ReactComponent as ProfileIcon } from "../../static/icons/profile.svg";

const Profile = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.userReducer);
  const [hidden, setHidden] = React.useState(true);

  return (
    <div className={styles.profile}>
      <ProfileIcon
        className={styles.profileIcon}
        onClick={() => setHidden(!hidden)}
      />
      <div
        className={styles.profileLinks}
        style={hidden ? { visibility: "hidden" } : { visibility: "visible" }}
      >
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
    </div>
  );
};

export default Profile;
