import { useAuth } from "components/hook/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operationst";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};