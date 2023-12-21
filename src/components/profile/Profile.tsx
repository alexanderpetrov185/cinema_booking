import React from "react";
import "./profile.scss";
import { logoutAction } from "../../redux/reducers/actionCreators";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux";
import { ReactComponent as ProfileIcon } from "../../static/icons/profile.svg";

interface Props {
  modalOpen: (state: boolean) => void;
}

const Profile = ({ modalOpen }: Props) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.userReducer);
  const [hidden, setHidden] = React.useState(true);

  return (
    <div className={"profile"}>
      <ProfileIcon
        className={"profileIcon"}
        onClick={() => setHidden(!hidden)}
      />
      <div
        className="profileText"
        style={hidden ? { visibility: "hidden" } : { visibility: "visible" }}
      >
        <span>{user ? user.email : "emptyMail"}</span>
        <span>Мои билеты</span>
        <span>История</span>
        <span>Помощь</span>
        <span
          onClick={() => {
            modalOpen(false);
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
