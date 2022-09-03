import React from "react";
import "./About.css";
import aboutImg from "./img/about.JPG";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
               computer science and artificial inteligentce graduate major in computer programing with a background in Java application, HTML, CSS, Python, react javascript, MySQL , Oracle and mongo
                 database. Experience working in an IT company as software support as part of on-the-job training. Highly analytical, motivated and skilled at solving programming problems. Can work well both independently and in a team.
              </p>
              <p className="about__text p__color">
              o Design and establish user-friendly websites, including optimized check-out page, resulting in a 25%
                increase in user clicks

              o Provide adequate training to 60+ staff members and 20+ junior web developers in internal web
                functions, including steps on how to make minor updates/changes independently.

              o Establish an interactive and dynamic website that guarantees high traffic, page view5, and maximum
                user experience, generating a 45% increase in the company's sales revenue.

              o Administer the full lifecycle of software development for 12 critical projects of the company with
                100% on-time delivery while staying 7% under budget.
              </p>
              <p className="about__text p__color">
              <h1>COURSES & TRAININGS</h1>
              *Web Design for Everybody Specialization Course |
              in Coursera organization.
              *Fresh Graduate in Fayoum university.

              *Front End Web Developer Learning :
                  Web Developer Bootcamp.
                  mean stack in ITI.
                  course mearn in ITI.
                  The Complete JavaSIript & typescript Course.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
