import React from "react";

export const Consign = () => {
  return (
    <div className="card card-consign">
      <h4>Request loan</h4>
      <form className="space">
        <div className="input-group">
          <input type="number" />
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
