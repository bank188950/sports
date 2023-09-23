'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-2xl">
      <div className="swiper-contain">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={false}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </div>

      <section>
        <div>
          <h2 className="title-section">ATHLETS</h2>

          <div className="relative max-w-[218px] md:max-w-[498px] lg:max-w-[678px]">
            <picture className="absolute left-0 top-0 w-full h-full 2xl:hidden">
              <source media="(min-width: 768px)" srcSet="/images/rugbyball-tablet-background.png" />
              <img src="/images/rugbyball-mobile-background.png" alt="Rugbyball background" />
            </picture>
            <Image
              className="relative w-full h-auto"
              src="/images/rugbyball.png"
              alt="Rugbyball"
              width={750}
              height={990}
              priority
              sizes="100vw"
            />
          </div>

          <div className="relative max-w-[302px] md:max-w-[691px] lg:max-w-[991px]">
            <picture className="absolute left-0 top-0 w-full h-full">
              <source media="(min-width: 1400px)" srcSet="/images/basketball-desktop-background.png" />
              <source media="(min-width: 768px)" srcSet="/images/basketball-tablet-background.png" />
              <img src="/images/basketball-mobile-background.png" alt="basketball background" />
            </picture>
            <Image
              className="relative w-full h-auto"
              src="/images/basketball.png"
              alt="Basketball"
              width={991}
              height={815}
              priority
              sizes="100vw"
            />
          </div>
        </div>

        <div className="bg-gray-100">
          <h3 className="title-slide">
            <span className="number-order">01</span> CONNECTION
          </h3>
          <p className="desc-slide">Connect with coaches directly, you can ping coaches to view profile.</p>
        </div>
        <div>
          <h3 className="title-slide">
            <span className="number-order">02</span> COLLABORATION
          </h3>
          <p className="desc-slide">
            Work with other student athletes to  increase visability. When you share and like other players videos it
            will increase your visability as a player. This is the team work aspect to Surface 1.
          </p>
        </div>
        <div>
          <h3 className="title-slide">
            <span className="number-order">03</span> GROWTH
          </h3>
          <p className="desc-slide">
            Work with other student athletes to  increase visability. When you share and like other players videos it
            will increase your visability as a player. This is the team work aspect to Surface 1.
          </p>
        </div>
      </section>

      <section>
        <div>
          <h2 className="title-section">PLAYERS</h2>
        </div>
        <div>
          <h3 className="title-slide">
            <span className="number-order">01</span> CONNECTION
          </h3>
          <p className="desc-slide">
            Connect with talented athlete directly, you can watch their skills through video showreels directly from
            Surface 1.
          </p>
        </div>
        <div>
          <h3 className="title-slide">
            <span className="number-order">02</span> COLLABORATION
          </h3>
          <p className="desc-slide">Work with recruiter to increase your chances of findingtalented athlete.</p>
        </div>
        <div>
          <h3 className="title-slide">
            <span className="number-order">03</span> GROWTH
          </h3>
          <p className="desc-slide">Save your time, recruit proper athlets for your team.</p>
        </div>
      </section>

      {/* <div className="px-4 md:px-6"></div> */}
    </main>
  );
}
