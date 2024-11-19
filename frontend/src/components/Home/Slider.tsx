import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { useEffect } from "react";

const width = window.innerWidth;
const height = window.innerHeight;


const HomeSlider = () => {

    const [banners, setBanners] = useState([
        { imgUrl: assets.poster3 },
        { imgUrl: assets.poster },
        { imgUrl: assets.poster2 },
    ])

    return (
        <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
        >
            {
                banners.map((item, index) => (
                    <SwiperSlide key={index} >
                        <Image className='object-cover' src={item.imgUrl} alt='' width={width} height={height / 2.5} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default HomeSlider