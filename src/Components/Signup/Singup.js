import React from "react";
import styles from "./Singup.module.css";
import Input_controls from "../InputControl/InputControls";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
function Sign_up() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [err_msg, setErr_msg] = useState("");
  const handleSumbit = () => {
    if (!values.name || !values.email || !values.pass) {
      setErr_msg("Fill All details");

      return;
    }
    setErr_msg("");
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        console.log("res", res);
        toast.success("rushabh");
        navigate("/");
      })
      .catch((err) => console.log(err));
    console.log(values);
  };
  return (
    <>
      {/* <div>Welcome to Communomy </div> */}
      <div className={styles.container}>
        <div className={styles.innerBox}>
          <h2 className={styles.heading}>Sign Up</h2>
          <Input_controls
            label="Name"
            placeholder="Your Name"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
          />
          <Input_controls
            label="Email"
            placeholder="Email"
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
            <button onClick={handleSumbit}>Sign In</button>
            <p>
              Already have an account?
              <span>
                <Link to="/login"> Login </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sign_up;
