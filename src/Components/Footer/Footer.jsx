import React, {useEffect} from "react";
import Aos from 'aos'
import'aos/dist/aos.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import "./Footer.css";
import video2 from "../../Assets/beach_footer.mp4";
import { FiSend } from "react-icons/fi";
const Footer = () => {
    
useEffect(()=>{
  Aos.init({duration:2000})
}, [])
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos= "fade-up" className="text">
            <small>KEEP IN T OUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos= "fade-up"  type="text" placeholder="Enter Email Address" />
            <button data-aos= "fade-up"  className="btn flex" type="submit">
              SEND
              <FiSend className="icon" />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" /> Travel.
              </a>

              <div data-aos= "fade-up"  className="footerParagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
              <div data-aos= "fade-up"  className="footerSocails">
                <AiOutlineTwitter className="icon" />
                <AiFillInstagram className="icon" />
                <AiFillYoutube className="icon" />
                <FaTripadvisor className="icon" />
              </div>
            </div>
          </div>
          <div className="footerLinks grid">
            {/* Group one */}
            <div data-aos= "fade-up" 
            data-aos-duration="3000"
            className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Turism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>
            {/* group two */}
            <div data-aos= "fade-up" 
            data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">PARTNERS</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>

            {/* group three */}
            <div data-aos= "fade-up" 
            data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">LASR MINUTE</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Lodon
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Caifornia
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insdoneis
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Oceania
              </li>
            </div>
          </div>
          <div className="footerDiv flex">
            <small >BEST TRAVEL WEBSITE THEME</small>
            <small>COPPYRIGHTS RESERVED - ISRATECH</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
