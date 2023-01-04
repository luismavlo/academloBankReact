import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../../components/Navbar";
import { startGetHistoryTransfer } from "../../redux/actions/trasnfer";
import { Consign } from "./components/Consign";
import { DeleteAccount } from "./components/DeleteAccount";
import { HistoryTransfer } from "./components/HistoryTransfer";
import { Transfer } from "./components/Transfer";

export const Home = () => {
  const dispatch = useDispatch();

  const [time, setTime] = useState("");

  const { accountNumber, amount } = useSelector((state) => state.auth);
  const { id } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startGetHistoryTransfer(id));
  }, [dispatch, id]);

  setTimeout(() => {
    setTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
  }, 1000);

  return (
    <>
      <Navbar />
      <section className="content-home">
        <div className="content-home__info">
          <div>
            <h3>Current Balance</h3>
            <h5>{time}</h5>
          </div>
          <div>
            <h3>{amount} USD</h3>
            <h4>Ac: {accountNumber}</h4>
          </div>
        </div>
        <div className="content-home__data">
          <HistoryTransfer />
          <div className="content-transfer-option">
            <Transfer />
            <Consign />
            <DeleteAccount />
          </div>
        </div>
      </section>
    </>
  );
};
