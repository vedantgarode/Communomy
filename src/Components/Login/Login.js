import React from "react";
import styles from "./Login.module.css";
import Input_controls from "../InputControl/InputControls";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";

function Login_user() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [err_msg, setErr_msg] = useState("");
  const handleSumbit = () => {
    console.log(values);
    if (!values.email || !values.pass) {
      setErr_msg("Fill All details");
      return;
    }
    setErr_msg("");
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        console.log("res", res);
        toast.success("rushabh");
        navigate("/");
      })
      .catch((err) => console.log(err));
    console.log(values);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerBox}>
          <h2 className={styles.heading}>Login</h2>
          <Input_controls
            label="Email"
            placeholder="Enter Email"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <Input_controls
            label="Password"
            placeholder="Enter Password"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
          />
          <div className={styles.footer}>
            <button onClick={handleSumbit}>Login</button>
            <p>
              Already have an account?{" "}
              <span>
                <Link to="/sign">Sign Up</Link>
              </span>
            </p>
          </div>
        </div>

        {/* <b>{err_msg}</b><br></br> */}
      </div>
    </>
  );
}

export default Login_user;
