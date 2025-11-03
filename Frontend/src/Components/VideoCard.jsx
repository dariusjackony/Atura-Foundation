import React from "react";
import "./styles/video-card.css";
import lake1 from "../images/lake.webp";
import pic1 from "../images/photo.jpg";
function VideoCard(){
   return(
    <div className="card-container">
        <div className="main-card">
            <div className="card">
                <img src={lake1} alt="" />
                    <div className="card-info">
                        <h3 className="card-title">The Pearl of Africa.</h3>
                        <p className="card-duration">Duration:</p>
                        <section className="separate">
                            <p className="card-rating">Rating:</p>
                            <button className="watch-btn">Watch Now</button>
                        </section>
                    
                    </div>
            </div>
        
         </div>

          <div className="main-card">
            <div className="card">
                <img src={pic1} alt="" />
                    <div className="card-info">
                        <h3 className="card-title">The Pearl of Africa.</h3>
                        <p className="card-duration">Duration:</p>
                        <section className="separate">
                            <p className="card-rating">Rating:</p>
                            <button className="watch-btn">Watch Now</button>
                        </section>
                    
                    </div>
            </div>
        
         </div>
    </div>
    
   )
}
export default VideoCard;