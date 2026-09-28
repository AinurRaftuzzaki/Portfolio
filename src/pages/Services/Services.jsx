import "./Services.css"
import { FaCode, FaPalette, FaLaptopCode } from "react-icons/fa";

function Services(){

  return(
    <div className="services" id="serv">

      <div className="title">
        <h2>Services</h2>
      </div>

      <div className="services-container">

        <div className="service-card">
          <FaCode className="service-icon"/>
          <h3>Frontend Development</h3>
          <p>Mengembangkan situs web modern dan interaktif menggunakan React, Next.js, JavaScript, HTML, dan CSS, serta didukung integrasi Node.js, PHP, dan MySQL.</p>
        </div>

        <div className="service-card">
          <FaPalette className="service-icon"/>
          <h3>UI Design</h3>
          <p>Merancang antarmuka pengguna yang bersih, estetis, dan intuitif dengan fokus utama pada kenyamanan serta kemudahan penggunaan (usability).</p>
        </div>

        <div className="service-card">
          <FaLaptopCode className="service-icon"/>
          <h3>Web Applications</h3>
          <p>Membangun aplikasi web modern dengan fitur dinamis, performa yang responsif, dan pengalaman pengguna yang mulus.</p>
        </div>

      </div>

    </div>
  )

}

export default Services;