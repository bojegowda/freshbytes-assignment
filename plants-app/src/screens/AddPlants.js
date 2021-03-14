import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function RegisterScreen(props) {
  const [name, setName] = useState("");
  const [description, setDesription] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  // const plantsRegister = useSelector((state) => state.plantsRegister);
  const { plantsInfo, loading, error } = "";

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (plantsInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, plantsInfo]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1> ADD PLANTS </h1>{" "}
        </div>{" "}
        {loading && <LoadingBox> </LoadingBox>}{" "}
        {error && <MessageBox variant="danger"> {error} </MessageBox>}{" "}
        <div>
          <label htmlFor="name"> Name </label>{" "}
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>{" "}
        </div>{" "}
        <div>
          <label htmlFor="description"> Desription </label>{" "}
          <input
            type="description"
            id="description"
            placeholder="Enter description"
            required
            onChange={(e) => setDesription(e.target.value)}
          ></input>{" "}
        </div>{" "}
        <div>
          <label />
          <button className="primary" type="submit">
            Add Plant{" "}
          </button>{" "}
        </div>{" "}
      </form>{" "}
    </div>
  );
}
