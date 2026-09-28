import "./Footer.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer(){

  return(

    <footer className="footer">

      <div className="footer-container">

        <p>© 2026 Ainur Raftuzzaki</p>

        <div className="social-icons">

          <a href="https://github.com/AinurRaftuzzaki"><FaGithub/></a>
          <a href="https://www.linkedin.com/in/ainur-raftuzzaki-4a09823a1/"><FaLinkedin/></a>
          <a href="https://www.instagram.com/ainr_zky/"><FaInstagram/></a>

        </div>

      </div>

    </footer>

  )

}

export default Footer;