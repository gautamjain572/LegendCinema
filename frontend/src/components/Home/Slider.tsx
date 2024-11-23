import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const HomeSlider = () => {

    const banners = [assets.poster3 ,assets.poster ,assets.poster2]

    return (
        <Swiper
            navigation={true}
            autoplay={{ delay: 1000, disableOnInteraction: true, }}
            modules={[Navigation, Autoplay]}
            className="mySwiper" loop={true}>
            {
                banners.map((item, index) => (
                    <SwiperSlide key={index} >
                        <Image className='w-full object-cover' src={item} alt='image' width={100} height={50} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default HomeSlider