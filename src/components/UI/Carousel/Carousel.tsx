import React, {createRef, FC, memo, ReactNode} from 'react';
import {Swiper} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import SliderBtn, {SliderBtnWrapper} from "components/UI/Buttons/SliderBtn";
import 'swiper/css';
import cl from './Carousel.module.scss'
import useCaseOne from "hooks/useCaseOne";

interface CarouselProps {
    children: ReactNode,
    type: string,
    autoplay?: any,
    button?: boolean
}

const breakpointSlider = {
    320: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 12
    },
    480: {
        slidesPerGroup: 2,
        slidesPerView: 3,
        spaceBetween: 12
    },
    678: {
        slidesPerGroup: 3,
        slidesPerView: 4,
        spaceBetween: 12
    },
    992: {
        slidesPerGroup: 4,
        slidesPerView: 5,
        spaceBetween: 12
    },
    1200: {
        slidesPerGroup: 5,
        slidesPerView: 6,
        spaceBetween: 12
    }
}

const breakpointBanner = {
    320: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 30
    }
}

const breakpointTrailer = {
    320: {
        slidesPerGroup: 1,
        slidesPerView: 2,
        spaceBetween: 12
    },
    480: {
        slidesPerGroup: 1,
        slidesPerView: 3,
        spaceBetween: 12
    },
    678: {
        slidesPerGroup: 1,
        slidesPerView: 3,
        spaceBetween: 12
    },
    992: {
        slidesPerGroup: 2,
        slidesPerView: 5,
        spaceBetween: 12
    },
    1200: {
        slidesPerGroup: 1,
        slidesPerView: 4,
        spaceBetween: 12
    }
}

const Carousel: FC<CarouselProps> = memo(({ children, type, autoplay, button = true }) => {
    const navigationPrevRef = createRef<HTMLButtonElement>()
    const navigationNextRef = createRef<HTMLButtonElement>()
    const breakpoints = useCaseOne(type, breakpointBanner, breakpointSlider, breakpointTrailer)

    return (
        <Swiper
            slidesPerGroup={2}
            modules={[Navigation, Autoplay, Pagination]}
            navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current
            }}
            onSwiper={(swiper) => {
                setTimeout(() => {
                    // @ts-ignore
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    // @ts-ignore
                    swiper.params.navigation.nextEl = navigationNextRef.current;

                    // Re-init navigation
                    swiper.navigation.destroy()
                    swiper.navigation.init()
                    swiper.navigation.update()
                })
            }}
            loop={ (type === 'trailer') || ( type === 'banner' ) ? true : false}
            autoplay={autoplay ? autoplay : false }
            breakpoints={breakpoints}
            effect='fade'
            pagination={{
                clickable: true
            }}
        >
            { children }
            { button ?
                <SliderBtnWrapper>
                    <SliderBtn dir='left' ref={navigationPrevRef}/>
                    <SliderBtn dir='right' ref={navigationNextRef}/>
                </SliderBtnWrapper>
                :
                null
            }
        </Swiper>
    );
});

Carousel.displayName = 'Carousel'

export default Carousel;