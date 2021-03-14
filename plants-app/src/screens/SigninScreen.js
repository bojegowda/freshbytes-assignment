import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function SigninScreen(props) {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(username, password));
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1> Sign In </h1>{" "}
        </div>{" "}
        {loading && <LoadingBox> </LoadingBox>}{" "}
        {error && <MessageBox variant="danger"> {error} </MessageBox>}{" "}
        <div>
          <label htmlFor="username"> Username </label>{" "}
          <input
            type="username"
            id="username"
            placeholder="Enter username"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>{" "}
        </div>{" "}
        <div>
          <label htmlFor="password"> Password </label>{" "}
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>{" "}
        </div>{" "}
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In{" "}
          </button>{" "}
        </div>{" "}
        <div>
          <label />
          <div>
            New customer ?{" "}
            <Link to={`/register?redirect=${redirect}`}>
              {" "}
              Create your account{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </form>{" "}
    </div>
  );
}
