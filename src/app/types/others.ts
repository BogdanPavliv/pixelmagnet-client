import { ReactNode } from "react";
import { RefObject } from "react";
import { Swiper as SwiperClass } from "swiper";

export type CircleProps = {
  children: ReactNode;
};

export type SlideNavigationProps = {
  testimonialsRef: RefObject<SwiperClass>;
};

export interface HeaderState {
  isMenuToggled: boolean;
}
