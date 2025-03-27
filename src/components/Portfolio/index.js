import React from "react";
import expenseImage from "../../assets/small/Expense Tracker 2.png";
import BlogImage from "../../assets/small/Screenshot 2025-01-28 at 2.25.19 PM.png";
import weatherDashImage from "../../assets/small/Screenshot 2025-02-10 at 11.18.51 AM.png";
import noteTakerImage from "../../assets/small/Screenshot 2025-02-26 at 7.38.25 PM.png";
import payrollImage from "../../assets/small/Screenshot 2025-01-28 at 9.59.34 AM.png";
import editorImage from "../../assets/small/Screenshot 2025-02-26 at 3.07.57 PM.png";
import techblogImage from "../../assets/small/Screenshot 2025-03-26 at 6.31.07 PM.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/liz0612/Tech-Blog">
                {" "}
                <img
                  src={techblogImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Tech-Blog"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Tech Blog</h4>
              <p>
              🔍 A MySQL database and CMS-style blog built using the Model-View-Controller (MVC) paradigm. Built using MySQL2, Express, Sequelize, Bulma, Handlebars, and dotenv.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/liz0612/cautious-meme">
                {" "}
                <img
                  src={editorImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="text-Editor"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Just Another Text Editor (J.A.T.E)</h4>
              <p>
              A Progressive Web Application (PWA) that allows users to write and save text or code snippets, with offline support.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/liz0612/challenge-3">
                {" "}
                <img
                  src={payrollImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="EmployeePay"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Employee Payroll </h4>
              <p>
              The Employee Payroll Tracker is a web application designed for payroll managers to efficiently view and manage employee payroll data. This application provides a dynamic and interactive interface to add, display, and analyze employee information, such as names and salaries. With its clean and responsive design, the application ensures an intuitive user experience across various screen sizes.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/liz0612/Note-taker">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Note_Taker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Note Taker</h4>
              <p>
                An application that provides the user the ability to add new
                notes, and to delete notes.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/liz0612/Weather-Dashboard">
                {" "}
                <img
                  src={weatherDashImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather_Dashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
                A website that allows the user see the weather outlook for
                multiple cities. The user can enter a city and see a 5-Day
                Forecast. The user can see the temperature, humidity levels,
                wind speed as well as the UV index.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/liz0612/my-blog">
                {" "}
                <img
                  src={BlogImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Myblog"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>My Blog</h4>
              <p>
                A website which offers users to input a drink name to have the
                ingredients, measurements, and images display. The user can also
                have a cocktail generated. If the user is too young, the user
                will be redirected to another page.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/liz0612/p3-TLLM">
                {" "}
                <img
                  src={expenseImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="ExpenseTracker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Expense Tracker</h4>
              <p>
              This project is a collaborative MERN-stack single-page application designed to solve real-world challenges with a focus on user experience, scalability, and responsiveness.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
