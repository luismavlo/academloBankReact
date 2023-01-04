import React from "react";
import { useForm } from "react-hook-form";

import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { startRegister } from "../../../redux/actions/auth";

const menuOptions = [
  {
    title: "Security",
    icon: "fa-solid fa-shield-halved",
  },
  {
    title: "Fast",
    icon: "fa-solid fa-jet-fighter",
  },
  {
    title: "friendly",
    icon: "fa-solid fa-user-group",
  },
  {
    title: "Analytics",
    icon: "fa-solid fa-chart-line",
  },
  {
    title: "Credits",
    icon: "fa-solid fa-credit-card",
  },
  {
    title: "Savings",
    icon: "fa-solid fa-money-bill-1-wave",
  },
  {
    title: "Awards",
    icon: "fa-solid fa-award",
  },
];

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#3C8468",
    color: "white",
  },
};

export const Banner = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const defaultValues = { name: "", password: "" };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const submit = (data) => {
    dispatch(startRegister(data.name, data.password));
    reset(defaultValues);
  };

  return (
    <section className="banner">
      <div className="banner-main">
        <h1>We are with you always, creating opportunities</h1>
        <button className="btn btn--white" onClick={openModal}>
          Register Here!
        </button>
      </div>
      <div className="banner-opt">
        {menuOptions.map((option) => (
          <div className="banner-opt__card" key={option.title}>
            <span id={option.title}>{option.title}</span>
            <i className={option.icon}></i>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="subtitle-modal">Register Now!</h2>
        <form className="modal-form" onSubmit={handleSubmit(submit)}>
          <input
            type="text"
            placeholder="ingrese el nombre"
            {...register("name")}
          />
          <input
            type="password"
            placeholder="ingrese la contraseña"
            {...register("password")}
          />
          <input type="submit" value="Register" />
        </form>
      </Modal>
    </section>
  );
};
