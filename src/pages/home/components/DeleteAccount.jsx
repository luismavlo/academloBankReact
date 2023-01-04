import React from "react";

export const DeleteAccount = () => {
  return (
    <div className="card card-delete">
      <h4>Close account</h4>
      <form>
        <div className="input-group">
          <input type="text" />
          <span>Confirm user</span>
        </div>
        <div className="input-group">
          <input type="number" />
          <span>Confirm password</span>
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
