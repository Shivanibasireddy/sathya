import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  let username = useRef(null);
  let password = useRef(null);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let loginCheck = () => {
    if (username.current.value === "Shivani" && password.current.value === "vani@85") {
      dispatch(loginCheck(username.current.value));
      navigate("Home");
    } else {
      alert("Your credentials are wrong, please check once!");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%", borderRadius: "15px", backgroundColor: "#f0f8ff" }}>
        <h3 className="text-center mb-4 text-primary">Login</h3>
        <div className="mb-3">
          <label htmlFor="username" className="form-label text-success">Username</label>
          <input
            type="text"
            ref={username}
            className="form-control"
            id="username"
            placeholder="Enter username"
            style={{ borderColor: "#28a745", borderWidth: "2px" }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label text-danger">Password</label>
          <input
            type="password"
            ref={password}
            className="form-control"
            id="password"
            placeholder="Enter password"
            style={{ borderColor: "#dc3545", borderWidth: "2px" }}
          />
        </div>
        <button onClick={loginCheck} className="btn btn-warning w-100 py-2" style={{ borderRadius: "8px", backgroundColor: "#ffc107", color: "#fff", fontWeight: "bold" }}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
