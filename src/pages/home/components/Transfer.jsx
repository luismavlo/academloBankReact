import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { startTransferTo } from "../../../redux/actions/trasnfer";

export const Transfer = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.auth);

  const defaultValues = { accountNumber: "", amount: 0 };

  const submit = (data) => {
    dispatch(startTransferTo(+data.amount, +data.accountNumber, id));
    reset(defaultValues);
  };

  return (
    <div className="card card-transfer">
      <h4>Transfer Money</h4>
      <form onSubmit={handleSubmit(submit)}>
        <div className="input-group">
          <input type="text" {...register("accountNumber")} />
          <span>Transfer to</span>
        </div>
        <div className="input-group">
          <input type="number" {...register("amount")} />
          <span>Amount</span>
        </div>
        <div className="input-group">
          <button type="submit">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
          <span>Send</span>
        </div>
      </form>
    </div>
  );
};
