import { useDispatch, useSelector } from "react-redux";
import { setUser, logout } from "./authSlice";

function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      {user ? (
        <>
          <p>Welcome {user}</p>
          <button onClick={() => dispatch(logout())}>
            Logout
          </button>
        </>
      ) : (
        <button onClick={() => dispatch(setUser("Uday"))}>
          Login
        </button>
      )}
    </div>
  );
}

export default Login;
