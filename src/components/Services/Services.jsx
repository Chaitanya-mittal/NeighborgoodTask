import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ServiceCard from "../ServiceCard/ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
function Services({ darkMode }) {
  const serviceBox = useRef();
  const [toggleBtn, setToggleBtn] = useState([]);

  function handleClick(e) {
    const old = toggleBtn;
    const isOpened = old.filter((i) => i === e.target.name);
    console.log(isOpened);
    if (isOpened.length === 0) {
      setToggleBtn((p) => [...p, e.target.name]);
    } else {
      setToggleBtn((p) => p.filter((t) => t !== e.target.name));
    }
  }

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: serviceBox.current,
          start: "100px bottom",
          end: "50% bottom",
          scrub: 3,
        },
      })
      .fromTo(
        serviceBox.current,
        { clipPath: "inset(50%)" },
        { clipPath: "inset(0%)" },
      );
  });
  return (
    <section className=" py-24" id="service">
      <div ref={serviceBox}>
        <h2 className="text-center text-4xl font-[600] text-black dark:text-white">
          Our <span className="textGradient1 poppinsText">Services</span>
        </h2>
        <div className=" mt-10 px-4 ">
          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            modules={[Pagination]}
            className="mySwiper pb-10"
          >
            <SwiperSlide>
              <ServiceCard
                darkMode={darkMode}
                toggleBtn={toggleBtn.includes("img2")}
                handleClick={handleClick}
                img="img2"
                title="Connect, Discover, Attend: Meet Your Neightbors!"
                content="Find your perfect match based on shared interests and hobbies, with our interests and hobbies, with our interest matching service - because compatibility goes beyond looks!"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard
                darkMode={darkMode}
                toggleBtn={toggleBtn.includes("img3")}
                handleClick={handleClick}
                img="img3"
                title="Connect with Neighbors, Discover Local Events"
                content="Looking for something fun to do? Our event discovery service helps you find the hottest concerts, festivals, and parties in your area, so you never muss out on the fun!"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <ServiceCard
                darkMode={darkMode}
                toggleBtn={toggleBtn.includes("img4")}
                handleClick={handleClick}
                img="img4"
                title="Build Your Neighbors Network, Join Now!"
                content="Want to create a killer online profile that stands out from the crowd? Our profile Creation service will help you create a captivating and unique profile that gets you notied!"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard
                darkMode={darkMode}
                toggleBtn={toggleBtn.includes("img5")}
                handleClick={handleClick}
                img="img5"
                title="Get Nearby Support Around You Easily!"
                content="The Platform facilitates carpooling, baby nursing, and food stall discovery, optimizing savings in time and expenses."
              />
            </SwiperSlide>
            <div className="swiper-pagination mt-8 flex w-full items-center justify-center gap-2"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Services;
