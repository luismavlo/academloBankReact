import moment from "moment";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export const HistoryTransfer = () => {
  const { transfers } = useSelector((state) => state.transfers);

  return (
    <div className="content-history">
      <ul>
        {transfers?.map((transfer) => (
          <li key={transfer.id}>
            <span>Transfer</span>
            <span>{moment(transfer.createdAt).format("dd/MM/YYYY")}</span>
            <span>{transfer.amount} USD</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
