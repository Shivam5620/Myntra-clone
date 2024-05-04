import { useState } from "react";
import "../style/user.css";
import { useNavigate } from "react-router-dom";

export default function User(props) {
  const redirect = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (userName === "jitendra@gmail.com" && password === "1234") {
      props.setLoggedIn(true);
      alert("Logged In");
      // <Navigate to="/" />
      redirect("/");
    } else {
      alert("Please Enter Correct User Name or Password");
    }
  };

  return (
    <div className="userPage d-flex justify-content-center">
      <div className="loginPage shadow-sm mt-4 pb-5">
        <div className="baseForm">
          <span>
            <b>Login</b>
          </span>
          <input
            type={"text"}
            placeholder="Enter Username "
            className="form-control"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type={"text"}
            placeholder="Enter Password*"
            className="form-control mt-2"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="termConditions">
            By continuing, I agree to the <b>Terms of use</b> &{" "}
            <b>Privacy Policy</b>
          </span>
          <button className="btn-myntra" onClick={handleSubmit}>
            CONTINUE
          </button>
          <span className="termConditions">
            Having Trouble Logging In? <b>Get Help</b>
          </span>
        </div>
      </div>
    </div>
  );
}
