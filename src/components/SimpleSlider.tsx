import Slider from "react-slick";
import { Player } from "@lottiefiles/react-lottie-player";

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
            autoplay
            loop
            src="assets/car-rent.json"
            className=" lottie"
          ></Player>
          <div>
            <h1 className="font-semibold text-3xl text-sunshine tracking-wider my-3">
              City Tour
            </h1>
            <p className="text-gray-600 tracking-wide">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              molestiae voluptatem quibusdam illum laudantium nemo officia quod
              voluptates cumque. Numquam ea voluptatem vel repellendus cumque,
              neque dolores, distinctio molestiae, voluptas tempora vitae a
              soluta quis inventore odit ipsam! Nobis temporibus perspiciatis
              iusto ex laborum repellat numquam.
            </p>
            <div className="w-fit !text-corn py-2 px-4 text-center mt-5 text-xl rounded transition bg-white tracking-wide">
              Excited!!!
            </div>
          </div>
        </div>
        <div className="!flex justify-center items-center gap-8 p-5">
          <Player
            autoplay
            loop
            src="assets/car-rent.json"
            className=" lottie"
          ></Player>
          <div>
            <h1 className="font-semibold text-3xl text-sunshine tracking-wider my-3">
              Wedding Party
            </h1>
            <p className="text-gray-600 tracking-wide">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              molestiae voluptatem quibusdam illum laudantium nemo officia quod
              voluptates cumque. Numquam ea voluptatem vel repellendus cumque,
              neque dolores, distinctio molestiae, voluptas tempora vitae a
              soluta quis inventore odit ipsam! Nobis temporibus perspiciatis
              iusto ex laborum repellat numquam.
            </p>
            <div className="w-fit !text-corn py-2 px-4 text-center mt-5 text-xl rounded transition bg-white tracking-wide">
              Excited!!!
            </div>
          </div>
        </div>
        <div className="!flex justify-center items-center gap-8 p-5">
          <Player
            autoplay
            loop
            src="assets/car-rent.json"
            className=" lottie"
          ></Player>
          <div>
            <h1 className="font-semibold text-3xl text-sunshine tracking-wider my-3">
              City Transfer
            </h1>
            <p className="text-gray-600 tracking-wide">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              molestiae voluptatem quibusdam illum laudantium nemo officia quod
              voluptates cumque. Numquam ea voluptatem vel repellendus cumque,
              neque dolores, distinctio molestiae, voluptas tempora vitae a
              soluta quis inventore odit ipsam! Nobis temporibus perspiciatis
              iusto ex laborum repellat numquam.
            </p>
            <div className="w-fit !text-corn py-2 px-4 text-center mt-5 text-xl rounded transition bg-white tracking-wide">
              Excited!!!
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default SimpleSlider;
