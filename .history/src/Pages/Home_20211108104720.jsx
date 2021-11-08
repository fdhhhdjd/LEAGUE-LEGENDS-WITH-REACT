import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Mousewheel, Pagination } from "swiper";
import { championsData } from "../Data/Dummy";
import { ChampionDetail, Welcome, Champion, Trailer,Credit } from "../import/index";
SwiperCore.use([Mousewheel, Pagination, EffectFade]);
const swiperOptions = {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,

  pagination: true,

  effect: "fade",
  speed: 1000,
 
};

const Home = () => {
  return (
    <>
      <Swiper {...swiperOptions}>
        <SwiperSlide>
          {({ isActive }) => <Welcome isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Champion isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Trailer isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Credit isActive={isActive}/>}
        </SwiperSlide>
      </Swiper>
      {championsData.map((item, index) => (
        <ChampionDetail key={index} item={item} id={index} />
      ))}
      <div className="scroll">
        <span>Scroll to see effect</span>
      </div>
    </>
  );
};

export default Home;
