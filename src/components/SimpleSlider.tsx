import Slider from "react-slick";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slide">
      <Slider {...settings}>
        <div className="!flex justify-center items-center gap-8 p-5">
          <Player
            className=" inset-0"
            autoplay
            loop
            src="assets/car-rent.json"
            style={{ height: "300px", width: "300px" }}
          ></Player>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            voluptatem tempora impedit magni asperiores cumque, possimus vitae
            nostrum magnam maxime dolorem. Libero, repudiandae quis, nemo, odio
            optio assumenda ex sit magni vero natus harum tempore! Unde, aliquam
            quas consectetur nesciunt inventore quibusdam asperiores velit
            optio. Sed necessitatibus tenetur modi et?
          </div>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};
export default SimpleSlider;
