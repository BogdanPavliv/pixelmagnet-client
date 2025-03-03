import React, { RefObject } from 'react';
import { Swiper as SwiperClass } from 'swiper';

type Props = {
    testimonialsRef: RefObject<SwiperClass>;
  };
  

const SlideNavigation = ({ testimonialsRef }: Props) => {
    const slidePrev = () => {
        if (testimonialsRef.current && testimonialsRef.current.slidePrev) {
            testimonialsRef.current.slidePrev();
        }
    };

    const slideNext = () => {
        if (testimonialsRef.current && testimonialsRef.current.slideNext) {
            testimonialsRef.current.slideNext();
        }
    };

    return (
        <div className="buttons-container">
            <button
                onClick={slidePrev}
                className="swiper-button-prev"
                disabled={!testimonialsRef.current || testimonialsRef.current.isBeginning}
            >
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className='disabled-button' d="M31.6225 18.06C31.29 18.06 30.9575 17.9375 30.695 17.675L21 7.98002L11.305 17.675C10.7975 18.1825 9.95746 18.1825 9.44996 17.675C8.94246 17.1675 8.94246 16.3275 9.44996 15.82L20.0725 5.19752C20.58 4.69002 21.42 4.69002 21.9275 5.19752L32.55 15.82C33.0575 16.3275 33.0575 17.1675 32.55 17.675C32.305 17.9375 31.955 18.06 31.6225 18.06Z" fill="#555555"/>
                  <path className='disabled-button' d="M21 37.1875C20.2825 37.1875 19.6875 36.5925 19.6875 35.875V6.42249C19.6875 5.70499 20.2825 5.10999 21 5.10999C21.7175 5.10999 22.3125 5.70499 22.3125 6.42249V35.875C22.3125 36.5925 21.7175 37.1875 21 37.1875Z" fill="#555555"/>
                </svg>
            </button>
            <div className="custom-pagination"></div>
            <button
                onClick={slideNext}
                className="swiper-button-next"
                disabled={!testimonialsRef.current || testimonialsRef.current.isEnd}
            >
                <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className='disabled-button' d="M10.5893 24.0605C10.9217 24.0644 11.2528 24.1908 11.5122 24.4563L21.0924 34.2647L30.9008 24.6845C31.4143 24.183 32.2542 24.1929 32.7557 24.7063C33.2572 25.2197 33.2473 26.0597 32.7339 26.5612L21.9871 37.0579C21.4737 37.5594 20.6337 37.5495 20.1323 37.0361L9.63546 26.2894C9.13397 25.776 9.14385 24.936 9.65729 24.4345C9.90536 24.1749 10.2568 24.0565 10.5893 24.0605Z" fill="#555555"/>
                  <path className='disabled-button' d="M21.4361 5.05929C22.1535 5.06773 22.7415 5.66969 22.733 6.38714L22.3865 35.8376C22.3781 36.5551 21.7761 37.143 21.0587 37.1346C20.3412 37.1261 19.7532 36.5242 19.7617 35.8067L20.1082 6.35626C20.1167 5.63881 20.7186 5.05085 21.4361 5.05929Z" fill="#555555"/>
                </svg>
            </button>
        </div>
    );
};

export default SlideNavigation