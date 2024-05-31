import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


import banner1 from '../../assets/banner1.avif'
import banner2 from '../../assets/banner2.avif'
import banner3 from '../../assets/banner3.jpeg'

const Slider = () => {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                navigation={true}
                autoplay={{
                    delay: 5000,
                    waitForTransition: true
                }}
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                style={{
                    "--swiper-pagination-color": "#7CFF77",
                    "--swiper-pagination-bullet-inactive-color": "#ffffff",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "12px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px",
                    "--swiper-theme-color": " #7CFF77",
                }}
            >
                <SwiperSlide className='z-1'>
                    <div className=' hero w-full min-h-[300px] md:min-h-[500px] lg:min-h-screen 2xl:min-h-[50vh]  ' style={{ backgroundImage: `url(${banner1})` }}>
                        <div className="hero-overlay opacity-80 dark:opacity-100 "></div>
                        <div className='hero-content text-center  text-white'>
                            <div className="max-w-xl">
                                <h1 className="mb-5 text-5xl font-bold">Empower Learning. Every Step of the Way.</h1>
                                <p className="mb-5">Unlock the potential within every student. Our LMS simplifies learning and fosters engagement.</p>
                                {/* <button className="btn btn-primary">Get Started</button> */}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='hero min-h-[300px] md:min-h-[500px] lg:min-h-screen 2xl:min-h-[50vh] ' style={{ backgroundImage: `url(${banner2})` }}>
                        <div className="hero-overlay opacity-80 dark:opacity-100 "></div>
                        <div className='hero-content text-center text-neutral-content'>
                            <div className="max-w-xl">
                                <h1 className="mb-5 text-5xl font-bold">Connect. Collaborate. Conquer.</h1>
                                <p className="mb-5">Streamline communication and teamwork. Our LMS bridges the gap between teachers, students, and parents.</p>
                                {/* <button className="btn btn-primary">Get Started</button> */}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className='hero min-h-[300px] md:min-h-[500px] lg:min-h-screen 2xl:min-h-[50vh] ' style={{ backgroundImage: `url(${banner3})` }}>
                        <div className="hero-overlay opacity-80 dark:opacity-100 "></div>
                        <div className='hero-content text-center text-neutral-content'>
                            <div className="max-w-xl">
                                <h1 className="mb-5 text-5xl font-bold">Elevate Education. Today and Tomorrow.</h1>
                                <p className="mb-5">Future-proof your classroom with cutting-edge learning tools. Our LMS adapts to changing needs.</p>
                                {/* <button className="btn btn-primary">Get Started</button> */}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                




            </Swiper>

        </>
    )
}

export default Slider