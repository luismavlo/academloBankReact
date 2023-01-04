import React from "react";
import imgMoney from "../../../assets/money.jpg";
import imgBuild from "../../../assets/build.jpg";

export const About = () => {
  return (
    <section className="about">
      <h2>Committed to your money and safety</h2>
      <div className="about-content">
        <article className="center">
          <h3>Lorem ipsum dolor sit amet consectetur.</h3>

          <p className="parag">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eum
            eligendi amet voluptas mollitia esse nulla praesentium, cum unde
            asperiores neque beatae facere reiciendis, porro nostrum commodi
            quisquam. Odio, obcaecati!
          </p>

          <p className="parag">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eum
            eligendi amet voluptas mollitia esse nulla praesentium, cum unde
            asperiores neque beatae facere reiciendis, porro nostrum commodi
            quisquam. Odio, obcaecati!
          </p>

          <img src={imgMoney} alt="MONEY IMG" className="img" />
        </article>
        <article className="center">
          <img src={imgBuild} alt="build img" className="img" />

          <h3>Lorem ipsum do beatae facere!</h3>

          <p className="parag">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium delectus hic nemo unde ipsa nobis velit commodi mollitia
            ad facere facilis fuga officiis sapiente a odio quibusdam eligendi,
            aliquid debitis.
          </p>

          <p className="parag">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eum
            eligendi amet voluptas mollitia esse nulla praesentium, cum unde
            asperiores neque beatae facere reiciendis, porro nostrum commodi
            quisquam. Odio, obcaecati!
          </p>
        </article>
      </div>
    </section>
  );
};
