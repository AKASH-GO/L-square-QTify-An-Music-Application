import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRightNavigation.module.css";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";

function CarouselLeftNavigation() {
  const swiper = useSwiper();
  const [isEnding, setIsEnding] = useState(swiper.isEnding); // Initialize isBegin to true.

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnding(swiper.isEnding); // Update isBegin when slideChange event occurs.
    });
  }, [swiper]); // Include swiper in the dependencies array.

  return (
    <div className={styles.rightNavigation}>
      {!isEnding && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
}

export default CarouselLeftNavigation;
