import React from "react";
import { useSearchWithQuery } from "../store/movieApiSlice";
import SliderSection from "./SliderSection";

const GenresSlider = (props) => {
  const { data, isLoading } = useSearchWithQuery({
    GenreId: props.genreId,
    page: 1,
  });
  return (
    <div>
      <SliderSection
        title={props.title}
        isLoading={isLoading}
        data={data}
        slidesNum={props.slidesNum}
      />
    </div>
  );
};

export default GenresSlider;
