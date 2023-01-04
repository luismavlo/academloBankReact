import axios from "axios";
import Swal from "sweetalert2";
import { types } from "../types/types";
import { setIsLoading } from "./ui";

export const startTransferTo = (amount, accountNumber, senderUserId) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .post("http://localhost:4000/api/v1/transfer", {
        amount,
        accountNumber,
        senderUserId,
      })
      .then((resp) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successful transfer",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "An error has occurred, please contact the administrator",
        });
        console.log(error);
      })
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const startGetHistoryTransfer = (id) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get(`http://localhost:4000/api/v1/users/${id}/history`)
      .then((resp) => {
        console.log(resp);
        dispatch(historyTransfer(resp.data.transfer));
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "An error has occurred, please contact the administrator",
        });
        console.log(error);
      })
      .finally(() => dispatch(setIsLoading(false)));
  };
};

const historyTransfer = (history) => ({
  type: types.historyTransfer,
  payload: history,
});
