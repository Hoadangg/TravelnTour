import React, {useEffect} from "react";
import Aos from 'aos'
import'aos/dist/aos.css'
import {
  HiOutlineLocationMarker,
  HiOutlineClipboardCheck,
} from "react-icons/hi";
import "./Main.css";

const Main = () => {
  
useEffect(()=>{
  Aos.init({duration:2000})
}, [])



  const Data = [
    {
      id: 1,
      imgSrc:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/431598033.jpg?k=33db763957124efc6d51bc6901ac6435c0e0e547b6122626a7b18c4641efd6c9&o=&hp=1",
      destTitle: "Ho Tram",
      location: "Vung Tau",
      grade: "Crus Relax",
      fees: "$700",
      description:
        "Melia Ho Tram is located next to the beach in Ho Tram tourist area. The property features a 24-hour front desk, 3 restaurants and a beach club. Rooms here have a balcony.",
    },
    {
      id:2,
      imgSrc:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/348379959.jpg?k=0b75f89cbf27c72edd903c1c83865cce21d03167b6050f32301516540d3ae772&o=&hp=1',
      destTitle:'Bora Bors',
      location:'Phu Quoc',
      grade:'Crus hiaed',
      fees:'$900',
      description:'Melia Ho Tram is located next to the beach in Ho Tram tourist area. The property features a 24-hour front desk, 3 restaurants and a beach club. Rooms here have a balcony.'
    },
      {
      id: 3,
      imgSrc:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/230855048.jpg?k=28b0c6416e446b9008d4ad3241864da15ea6232d8b25383eb60f681c0cd73acc&o=&hp=1',
      destTitle:'Bum',
      location:'Phu Quoc',
      grade:'Crus hiaed',
      fees:'$800',
      description:'Melia Ho Tram is located next to the beach in Ho Tram tourist area. The property features a 24-hour front desk, 3 restaurants and a beach club. Rooms here have a balcony.'
    },  {
      id:4,
      imgSrc:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/429808527.jpg?k=aa96abea12e45b4b1e7273a4023ec08136b89bd32455c2da4a7575a13629000e&o=&hp=1',
      destTitle:'Hana Shandu',
      location:'Nha Trang',
      grade:'Crus hiaed',
      fees:'$750',
      description:'Melia Ho Tram is located next to the beach in Ho Tram tourist area. The property features a 24-hour front desk, 3 restaurants and a beach club. Rooms here have a balcony.'
    },  {
      id:5,
      imgSrc:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/433464301.jpg?k=3d1468625b86cf0bd3181592638eb298a32ff635453f8ceca37e0e0c448e5430&o=&hp=1',
      destTitle:'Cat',
      location:'Da Lat',
      grade:'Crus hiaed',
      fees:'$500',
      description:'Melia Ho Tram is located next to the beach in Ho Tram tourist area. The property features a 24-hour front desk, 3 restaurants and a beach club. Rooms here have a balcony.'
    },  {
      id:6,
      imgSrc:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/398485506.jpg?k=6994340090aa9714d343e05893a989dcf5d044c4537845a0d56207f5a25109ca&o=&hp=1',
      destTitle:'Bora Bors',
      location:'Da Nang',
      grade:'Crus hiaed',
      fees:'$880',
      description:'Melia Ho Tram is located next to the beach in Ho Tram tourist area. The property features a 24-hour front desk, 3 restaurants and a beach club. Rooms here have a balcony.'
    },
  ];
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos= "fade-right"  className="title">Most visted destinations</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div data-aos='fade-up' key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    <span>DETAILS</span>
                    <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
