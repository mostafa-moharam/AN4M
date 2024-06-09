import React from "react";
import Slider from "./Slider";
import Loading from "./Loading";
import "./css/sliderSection.css";

const SliderSection = (props) => {
  return (
    <div className="sliderSection">
      <h3> {props.title} </h3>
      <div className="movieSlider">
        {props.isLoading ? (
          <Loading />
        ) : (
          <Slider data={props.data} slidesNum={props.slidesNum} />
        )}
      </div>
    </div>
  );
};

export default SliderSection;
