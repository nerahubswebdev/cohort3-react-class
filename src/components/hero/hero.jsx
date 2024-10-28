import React from "react";
import "./hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="description">
          <h1>Hi, I’m Sagar 👋</h1>
          {/* <p>
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive.Even though I have been creating web applications for
            over 7years, I still love it as if it was something new.
          </p> */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam totam
            veritatis quia alias repellendus itaque suscipit iure dicta est
            ducimus doloribus voluptatum quibusdam temporibus porro eum
            obcaecati, saepe fugit. Odit! Dignissimos sed consequuntur, tempore
            repellendus animi earum beatae esse id dicta harum iusto hic
            quisquam aliquid, illo qui facilis possimus voluptatum obcaecati
            laboriosam aut pariatur cum accusantium reiciendis similique? Rem?
            Praesentium vitae modi eos eveniet ipsam veniam tempore dolore,
            minus cumque eligendi quibusdam ut in aliquid explicabo. Dicta
            minima dolor autem, optio voluptate quos dolorem rem similique
            veritatis, aspernatur distinctio. Nesciunt quis minima quia quo
            distinctio temporibus libero esse sunt laudantium iure debitis
            magnam voluptatem molestias repellat, aliquam impedit, hic odio
            reprehenderit repellendus rerum quas! Harum odit debitis eaque
            accusamus. Dolore harum quod laborum totam maxime nemo saepe
            doloribus facilis? Commodi exercitationem quia quas optio sunt est
            error, qui adipisci accusamus esse unde cumque expedita, sed
            cupiditate, quibusdam porro in? Consequatur explicabo dolore illum
            voluptatibus asperiores, quo voluptate delectus esse sunt. Itaque
            repellat fuga molestiae dolore animi cumque pariatur provident
            impedit, est, distinctio laudantium eligendi esse, nesciunt ab.
            Recusandae, nisi.
          </p>
          <p>
            <strong>Location:</strong> Ahmedabad, India
          </p>
          <p>
            <strong>Status:</strong> Available for new projects
          </p>
        </div>
        <div className="image">
          <img
            src="https://t4.ftcdn.net/jpg/07/08/47/75/360_F_708477508_DNkzRIsNFgibgCJ6KoTgJjjRZNJD4mb4.jpg"
            alt="Sagar's Photo"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
