import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <h2>Made by Lizbeth Vazquez©</h2>
      <p>
        <ul>
          <a href="https://github.com/liz0612">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/lizbeth-v-7929a42b7/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
          <a href="">
            <li className="logo">
              <FaInstagram />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;
