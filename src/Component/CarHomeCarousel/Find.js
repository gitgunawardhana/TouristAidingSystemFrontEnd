import React from 'react'
import styles from './Find.module.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import Card from './Card'

const Find = () => {
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>Choose As Your Need</h1>
      </div>
      <div className={styles.slider_container}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={4}
          navigation
          breakpoints={{
            340: {
              width: 200,
              slidesPerView: 1
            },
            768: {
              width: 768,
              slidesPerView: 3
            },
            1040: {
              width: 1040,
              slidesPerView: 4
            },
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Card image='https://www.carmag.co.za/wp-content/uploads/2013/02/2013-Daihatsu-Ayla-Overlook-400x240.jpg' kind='Small' />
          </SwiperSlide>
          <SwiperSlide>
            <Card image='https://d11unpj7eou730.cloudfront.net/thumbs/p-nc-p-s400-ver4/images/cars/generic/Hyundai-Fluidic-Verna-Top-Medium-Sized-Family-Car.jpg' kind='Medium' />
          </SwiperSlide>
          <SwiperSlide>
            <Card image='https://platform.cstatic-images.com/large/in/v2/stock_photos/05660d43-409b-47b5-b87b-16da2996b9ac/9de1838c-2e84-4439-8221-7ae98e18c48c.png' kind='Large' />
          </SwiperSlide>
          <SwiperSlide>
            <Card image='https://www.carmag.co.za/wp-content/uploads/2018/11/x-class-suv-400x240.jpg' kind='SUV' />
          </SwiperSlide>
          <SwiperSlide>
            <Card image='https://www.dpmco.com/public/images/product/bajaj-re-sp.png' kind='Tuk Tuk' />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Find