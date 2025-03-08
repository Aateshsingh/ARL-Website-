import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Blog } from "@/lib/types/blog";

type PropType = {
  data: Blog[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ data, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {data.map((post, index) => (
            <div className="embla__slide mt-5" key={index}>
              {/* Content */}
              <div className="embla__slide__number rounded-md flex flex-col object-contain">
                <div className="relative w-full h-48 md:h-64 lg:h-80">
                  <Image
                    priority
                    src={`/blog/${post.image}`}
                    alt={post.title}
                    fill
                    className="object-cover object-center rounded-t-md"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="space-y-2 p-2 md:p-4 lg:p-6">
                  <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-subheading">
                    {post.title}
                  </h1>
                  <p className="text-sm">{post.content.substring(0, 150)}...</p>{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot${
                index === selectedIndex ? " embla__dot--selected" : ""
              }`}
            />
          ))}
        </div>

        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
