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
    <main className="mx-auto overflow-hidden">
      <section>
        <div className="image-section h-[310px] md:h-auto mt-3 md:mt-16 mx-auto max-w-[320px] md:max-w-[768px] md:pl-[290px] md:pr-[0px] xl:max-w-[1400px] xl:pl-[700px]">
          <h2 className="title-section">ATHLETS</h2>

          <div className="relative w-[218px] md:w-[545px] xl:w-[710px] md:absolute md:-left-[210px] xl:-left-[180px] md:top-2.5 xl:-top-4 md:z-10">
            <picture className="absolute left-0 top-0 w-full h-full xl:hidden">
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
        </div>

        <div className="bg-gray-100 md:bg-white mt-2">
          <div className="inner-section pt-20 md:pt-0 mx-auto max-w-[320px] md:max-w-none">
            <div className="swiper-contain">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={false}
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <div className="md:bg-white md:flex md:justify-center">
                    <div className="list-slide md:max-w-[768px] md:pl-[290px] md:pr-6 md:py-7 xl:py-14 xl:max-w-[1400px] xl:pl-[700px]">
                      <h3 className="title-slide">
                        <span className="number-order">
                          01
                          <span className="violet-line"></span>
                        </span>
                        CONNECTION
                      </h3>
                      <p className="desc-slide">Connect with coaches directly, you can ping coaches to view profile.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="md:bg-gray-100 md:flex md:justify-center">
                    <div className="list-slide md:max-w-[768px] md:pl-[290px] md:pr-6 md:py-7 xl:py-14 xl:max-w-[1400px] xl:pl-[700px]">
                      <h3 className="title-slide">
                        <span className="number-order">
                          02
                          <span className="violet-line"></span>
                        </span>
                        COLLABORATION
                      </h3>
                      <p className="desc-slide">
                        Work with other student athletes to  increase visability. When you share and like other players
                        videos it will increase your visability as a player. This is the team work aspect to Surface 1.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="md:bg-violet md:flex md:justify-center">
                    <div className="list-slide md:max-w-[768px] md:pl-[290px] md:pr-6 md:py-7 xl:py-14 xl:max-w-[1400px] xl:pl-[700px]">
                      <h3 className="title-slide">
                        <span className="number-order">
                          03
                          <span className="violet-line md:bg-white"></span>
                        </span>
                        GROWTH
                      </h3>
                      <p className="desc-slide md:text-white">
                        Resources and tools for you to get better as a student Athelte. Access to training classes,
                        tutor sessions, etc 
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="image-section h-[290px] md:h-auto mt-3 md:mt-16 mx-auto max-w-[320px] md:max-w-[768px] md:pr-[290px] md:pl-5 xl:max-w-[1400px] xl:pr-[700px]">
          <h2 className="title-section">PLAYERS</h2>

          <div className="relative w-[302px] md:w-[690px] xl:w-[991px] md:absolute md:-right-[246px] md:-top-3 xl:-right-[90px] xl:-top-16 md:z-10">
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
              sizes="100vw"
            />
          </div>
        </div>

        <div className="bg-gray-100 md:bg-white mt-2">
          <div className="inner-section pt-20 md:pt-0 mx-auto max-w-[320px] md:max-w-none">
            <div className="swiper-contain">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={false}
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <div className="md:bg-white md:flex md:justify-center">
                    <div className="list-slide md:max-w-[768px] md:pr-[295px] md:pl-6 md:py-7 xl:py-20 xl:max-w-[1400px] xl:pr-[750px]">
                      <h3 className="title-slide">
                        <span className="number-order">
                          01
                          <span className="violet-line"></span>
                        </span>
                        CONNECTION
                      </h3>
                      <p className="desc-slide">
                        Connect with talented athlete directly, you can watch their skills through video showreels
                        directly from Surface 1.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="md:bg-gray-100 md:flex md:justify-center">
                    <div className="list-slide md:max-w-[768px] md:pr-[295px] md:pl-6 md:py-12 xl:py-20 xl:max-w-[1400px] xl:pr-[750px]">
                      <h3 className="title-slide">
                        <span className="number-order">
                          02
                          <span className="violet-line"></span>
                        </span>
                        COLLABORATION
                      </h3>
                      <p className="desc-slide">
                        Work with recruiter to increase your chances of findingtalented athlete.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="md:bg-dark-violet md:flex md:justify-center">
                    <div className="list-slide md:max-w-[768px] md:pr-[295px] md:pl-6 md:py-7 xl:py-14 xl:max-w-[1400px] xl:pr-[750px]">
                      <h3 className="title-slide">
                        <span className="number-order md:text-violet">
                          03
                          <span className="violet-line md:bg-white"></span>
                        </span>
                        GROWTH
                      </h3>
                      <p className="desc-slide md:text-white">Save your time, recruit proper athlets for your team.</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
