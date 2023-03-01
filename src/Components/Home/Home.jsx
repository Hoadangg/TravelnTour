import React, {useEffect} from "react";
import Aos from 'aos'
import'aos/dist/aos.css'
import "./Home.css";
import video from "../../Assets/beach_homevid.mp4";
import {HiFilter} from "react-icons/hi";
import {GrLocation} from "react-icons/gr";
import {FiFacebook} from "react-icons/fi";
import {AiOutlineInstagram} from "react-icons/ai";
import {FaTripadvisor} from "react-icons/fa"
import {BsListTask} from "react-icons/bs"
import {TbApps} from "react-icons/tb"


const Home = () => {
//create a hook to add a sroll aninamtion

useEffect(()=>{
  Aos.init({duration:2000})
}, [])






  return (
    <section className="home">
      <div className="overay">
        <video src={video} muted autoPlay loop type="video/mp4"></video>
        <div className="homeContent container">
          <div className="textDiv">
            <span data-aos= "fade-up" className="smallText">Our Packages</span>
            <h1 data-aos= "fade-up"  className="homeTitle">Search your holiday</h1>
          </div>
          <div data-aos= "fade-up"   className="cardDiv grid">
            <div className="desctiantionInput">
              <label htmlFor="city" className="label_city">Search your desctination:</label>
              <div className="input flex">
                <input type="text"  placeholder="Enter name here..."/>
                <GrLocation className ="icon"/>
              </div>
            </div>
            <div className="dateInput">
              <label htmlFor="date">Select your date:</label>
              <div className="input flex">
                <input type="date"/>
                <GrLocation className ="icon"/>
              </div>
            </div>
            <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="price">Max price</label>
                <h3 className="total">$5000</h3>
              </div>
              <div className="input flex">
                <input type="range" max="5000" min="1000"/>
              </div>
            </div>
            <div data-aos= "fade-up"  className="searchOptions flex">
              <HiFilter className="icon"/>
              <span>MORE FILTERS</span>
            </div>
          </div>
          <div data-aos= "fade-up"  className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon"/>
            <AiOutlineInstagram className="icon"/>
            <FaTripadvisor  className="icon"/>
          </div>
          <div className="leftIcons">
            <BsListTask className="icon"/>
            <TbApps className="icon"/>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
