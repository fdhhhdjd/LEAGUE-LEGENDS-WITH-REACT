import {
    Swiper,
    SwiperSlide
} from 'swiper/react'

import SwiperCore, {
    EffectFade,
    Mousewheel,
    Pagination
} from 'swiper'

import {
    Welcome,
    Champion,
    ChampionDetail,
    Trailer,
    Credit
} from '../components/home-section'

import { championsData } from '../assets/dummy'

SwiperCore.use([Mousewheel, Pagination, EffectFade])

const swiperOptions = {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: true,
    effect: 'fade',
    speed: 1000
}

const Home = () => {
    return (
        <>
       
            {
                championsData.map((item, index) => <ChampionDetail
                    key={index}
                    item={item}
                    id={index}
                />)
            }
            <div className="scroll">
                <span>Scroll to see effect</span>
            </div>
        </>
    )
}

export default Home
