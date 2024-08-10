import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";
import classNames from "classnames";

import "./index.scss";

type SliderProps = {
    Slides: React.ReactNode[];
    className?: string;
};

const Slider = ({ Slides, className }: SliderProps) => {
    return (
        <Swiper
            className={classNames("slider", className)}
            modules={[Navigation, A11y]}
            spaceBetween={5}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
        >
            {Slides.map((Slide, i) => (
                <SwiperSlide key={`slide-${i}`}>{Slide}</SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
