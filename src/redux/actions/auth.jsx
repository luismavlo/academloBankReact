import axios from "axios";
import Swal from "sweetalert2";
import { types } from "../types/types";
import { setIsLoading } from "./ui";

export const startLogin = (accountNumber, password) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .post("http://localhost:4000/api/v1/users/login", {
        accountNumber,
        password,
      })
      .then((resp) => {
        localStorage.setItem("accountNumber", resp.data.accountNumber);
        dispatch(
          login({
            id: resp.data.uid,
            name: resp.data.name,
            accountNumber: resp.data.accountNumber,
            amount: resp.data.amount,
          })
        );
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response?.data?.message,
        });
      })
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const startRegister = (name, password) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .post("http://localhost:4000/api/v1/users/signup", { name, password })
      .then((resp) => {
        localStorage.setItem("accountNumber", resp.data.accountNumber);
        dispatch(
          login({
            id: resp.data.uid,
            name: resp.data.name,
            accountNumber: resp.data.accountNumber,
            amount: resp.data.amount,
          })
        );
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      })
      .finally(() => dispatch(setIsLoading(false)));
  };
};

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logout());
  };
};

const logout = () => ({
  type: types.authLogout,
});
