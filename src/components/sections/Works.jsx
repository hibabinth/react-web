import React, { useRef } from 'react';
import SlickModule from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = SlickModule?.default ?? SlickModule;

const mockProjects = [
  { name: 'KUVAN', logo: 'K', category: 'Brand Identity' },
  { name: 'DAKHNII', logo: 'D', category: 'Packaging Design' },
  { name: 'BREW', logo: 'B', category: 'Website Design' },
  { name: '72MG', logo: '72', category: 'Studio' },
];

const SliderArrow = ({ direction, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-navy text-cream transition-transform hover:scale-105"
    style={direction === 'next' ? { right: '-8px' } : { left: '-8px' }}
    aria-label={direction === 'next' ? 'Next project' : 'Previous project'}
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === 'next' ? (
        <polyline points="9 18 15 12 9 6" />
      ) : (
        <polyline points="15 18 9 12 15 6" />
      )}
    </svg>
  </button>
);

const Works = () => {
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: false,
  };

  return (
    <section id="works" className="w-full bg-cream py-24 md:py-28 px-4 md:px-8 text-navy relative scroll-mt-28">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-[2.6rem] md:text-[4.2rem] lg:text-[5.2rem] font-sans font-normal text-navy tracking-tight leading-none mb-4">
          Have a <span className="font-serif italic text-navy font-light tracking-normal">taste</span>
        </h2>
        <p className="text-xl md:text-2xl font-sans text-navy/80 font-medium tracking-tight">
          of our works
        </p>
      </div>

      {/* Slider Container */}
      <div className="works-slider relative mx-auto max-w-5xl px-4">
        <SliderArrow
          direction="prev"
          onClick={() => sliderRef.current?.slickPrev()}
        />
        <SliderArrow
          direction="next"
          onClick={() => sliderRef.current?.slickNext()}
        />
        <Slider ref={sliderRef} {...sliderSettings}>
          {mockProjects.map((project) => (
            <div key={project.name} className="px-2 md:px-3">
              <div className="relative aspect-video overflow-hidden rounded-[2rem] bg-black group">
                <div className="flex h-full items-center justify-center text-8xl font-black text-white opacity-90 transition-transform duration-500 group-hover:scale-110 md:text-[12rem]">
                  {project.logo}
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-navy/20 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="translate-y-4 transform rounded-full bg-cream px-8 py-3 text-xl font-bold text-navy transition-transform group-hover:translate-y-0">
                    View Project
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* View More Text (Global link) */}
      <div className="text-center mt-12">
        <a href="#works" className="text-xl md:text-2xl font-sans font-bold text-navy hover:underline transition-all">
          View More
        </a>
      </div>
    </section>
  );
};

export default Works;
