"use client";
import React from 'react'
import { sliderBrandsSettings } from "../../../utils/common";
import {dataBrands} from "../../../utils/data";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrustedBy = () => {
  return (
    <section className="trusted-by">
        <div className="container-max">
          <div className="trusted-by__wrapper">
            <h3 className="trusted-by__title">TRUSTED BY THE WORLD’S LEADING COMPANIES</h3>
            <div className="trusted-by__slider--wrapper">
              <Slider
              {...sliderBrandsSettings}
              className="slick-brands"
              >
                {
                  dataBrands.map((brand: any) => (
                    <div key={brand.id} className="brands__slide--wrapper">
                      <div className="brands__slide">
                        <div className={ brand.accent ? "brands__name accent" : "brands__name"}>{brand.name}</div>
                      </div>
                    </div>
                  ))
                }
              </Slider>
            </div>
          </div>
        </div>
      </section>
  )
}

export default TrustedBy